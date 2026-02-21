<template>
  <div
    id="aboutUs"
    ref="aboutUsRef"
    class="w-full px-4 py-10 bg-white flex flex-col lg:flex-row items-center justify-center gap-10
      transition-all duration-700 ease-out"
    :class="{
      'opacity-0 translate-y-10': !inView,
      'opacity-100 translate-y-0': inView
    }"
  >
    <!-- Image block -->
    <div class="w-full lg:w-1/2 relative flex justify-center">
      <img
        v-if="aboutData.imageUrl"
        :src="`${imgPath}${aboutData.imageUrl}`"
        alt="Interior"
        class="rounded-xl w-full max-w-[550px] h-auto object-cover shadow-lg"
      />
      <div
        @click="openVideo"
        class="absolute bottom-4 left-16 flex items-center gap-3 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
      >
        <i class="fa-solid fa-circle-play text-2xl text-black animate-pulse opacity-80"></i>
        <p class="text-sm font-medium text-black">Watch Video</p>
      </div>
    </div>

    <!-- Content block -->
    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div class="bg-white shadow-xl rounded-xl px-6 py-8 sm:px-10 sm:py-10 max-w-[600px] transition-all duration-500">
        <h4 class="uppercase text-[#BC9565] text-sm sm:text-base font-medium mb-3">
          / {{ aboutData.heading }}
        </h4>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
          {{ aboutData.subHeading }}
        </h1>

        <transition name="fade-expand">
          <p
            key="text"
            class="text-sm sm:text-base font-light mb-6 whitespace-pre-line overflow-hidden"
          >
            {{ showMore ? aboutData.fullText : shortText }}
          </p>
        </transition>

        <button
          @click="toggleText"
          class="px-6 py-2 border border-black text-white bg-black hover:bg-white hover:text-black transition-all text-sm sm:text-base rounded-full"
        >
          {{ showMore ? 'READ LESS' : 'READ MORE' }}
        </button>
      </div>

      <!-- Stats -->
      <div class="flex flex-col sm:flex-row gap-6 justify-center text-center mt-10">
        <div v-for="stat in aboutData.stats" :key="stat._id">
          <p class="text-2xl font-semibold">{{ stat.value }}</p>
          <p class="text-sm md:text-base font-light">{{ stat.title }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- ✅ Video Modal -->
  <div
    v-if="showModal"
    class="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
  >
    <div class="relative w-[100%] max-w-4xl bg-black rounded-lg overflow-hidden">
      <video v-if="videoUrl" class="w-full h-auto" :src="videoUrl" controls autoplay></video>
      <button
        class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 cursor-pointer"
        @click="showModal = false"
      >
        &times;
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, onBeforeUnmount } from 'vue'

const aboutUsRef = ref<HTMLElement | null>(null)
const inView = ref(false)
let observer: IntersectionObserver | null = null

interface AboutStat {
  _id: string
  title: string
  value: string
}

// AboutUs data
const aboutData = ref({
  heading: '',
  subHeading: '',
  fullText: '',
  stats: Array<AboutStat>,
  imageUrl: '',
})
const shortText = ref('')
const showMore = ref(false)
const toggleText = () => {
  showMore.value = !showMore.value
}

// Video logic (keep existing)
const showModal = ref(false)
const videoUrl = ref('')

const config = useRuntimeConfig()
const apiBase = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imgPath = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

async function fetchAboutUs() {
  try {
    const res = await fetch(`${apiBase}/about-us`)
    if (!res.ok) throw new Error('Failed to fetch About Us')
    const data = await res.json()
    aboutData.value = data
    shortText.value = data.fullText.length > 200 ? data.fullText.slice(0, 200) + '...' : data.fullText
  } catch (err) {
    console.error(err)
  }
}

async function openVideo() {
  try {
    const response = await fetch(`${apiBase}/videos`)
    if (!response.ok) throw new Error('Failed to fetch video')
    const data = await response.json()
    if (data.length === 0) return alert('No video uploaded yet!')
    const filename = data.videos[0]
    videoUrl.value = `${imgPath}/uploads/videos/${filename}`
    showModal.value = true
  } catch (error) {
    console.error(error)
    alert('Error loading video')
  }
}

// Intersection Observer
function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && showModal.value) showModal.value = false
}

onMounted(() => {
  fetchAboutUs()
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => (inView.value = entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (aboutUsRef.value) observer.observe(aboutUsRef.value)
  } else {
    inView.value = true
  }
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  if (observer && aboutUsRef.value) observer.unobserve(aboutUsRef.value)
})
</script>

<style scoped>
.fade-expand-enter-active,
.fade-expand-leave-active {
  transition: all 0.5s ease;
}
.fade-expand-enter-from,
.fade-expand-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-expand-enter-to,
.fade-expand-leave-from {
  opacity: 1;
  max-height: 2000px;
}
</style>