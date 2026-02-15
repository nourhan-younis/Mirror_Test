<template>
  <div id="home" class="text-white">
    <div class="absolute lg:top-5 top-0 z-2 flex w-full">
      <NavBar />
    </div>
    <div class="relative">
      <Slider />
    </div>

    <div
      class="flex mt-20 lg:mt-50 px-2 absolute lg:top-50 top-25 lg:left-50 left-10 z-1 gap-[15%] w-[90%]"
    >
      <div>
        <h1 class="lg:text-5xl font-bold uppercase text-2xl">
          Innovative ideas <br />
          stylish designs
        </h1>
        <p class="lg:text-xl text-base lg:my-10 my-5">
          Accelerating Construction with smart BIM & Fast-Track Engineering - Built for Accuracy,
          Designed for progress.
        </p>
        <button
          v-if="pdfUrl"
          @click="openPortfolio"
          class="lg:px-10 lg:py-5 px-5 py-3 border-1 cursor-pointer font-medium text-white border-white hover:bg-white hover:border-1 hover:text-black"
        >
          VIEW PORTFOLIO
        </button>
      </div>

      <!-- ✅ Updated Play Icon with API Call -->
      <button class="content-center cursor-pointer" @click="openVideo">
        <i class="fa-solid fa-circle-play lg:text-6xl text-4xl"></i>
      </button>
    </div>

    <!-- ✅ Video Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-white bg-opacity-80 flex justify-center items-center z-50 cursor-pointer"
    >
      <div class="relative w-[90%] max-w-4xl bg-black rounded-lg overflow-hidden">
        <video
          v-if="videoUrl"
          class="w-full h-auto"
          :src="videoUrl"
          controls
          autoplay
        ></video>
        <button
          class="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 cursor-pointer"
          @click="showModal = false"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from '~/components/NavBar.vue'
import Slider from '~/components/Slider.vue'

const showModal = ref(false)
const videoUrl = ref('')
const pdfUrl = ref('')

// Your backend base URL — adjust for dev/prod
const config = useRuntimeConfig()
const apiBase = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imgPath = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd


function openPortfolio() {
  if (pdfUrl.value) {
    window.open(pdfUrl.value, '_blank')
  } else {
    alert('Portfolio not uploaded yet!')
  }
}


async function loadPortfolio() {
  try {
    const res = await fetch(`${apiBase}/portfolio`)
    if (!res.ok) throw new Error('Failed to fetch portfolio')

    const data = await res.json()
    if (!data || !data.pdf) return

    pdfUrl.value = `${imgPath}/uploads/pdf/${data.pdf}`
  } catch (err) {
    console.error(err)
  }
}

async function openVideo() {
  try {
    // Call your GET /api/videos to get the uploaded video list
    const response = await fetch(`${apiBase}/videos`)
    if (!response.ok) throw new Error('Failed to fetch video')

    const data = await response.json()
    if (data.length === 0) {
      alert('No video uploaded yet!')
      return
    }

    // Pick first video (because you allow only one)
    const filename = data.videos[0]
    videoUrl.value = `${imgPath}/uploads/videos/${filename}`
    showModal.value = true
  } catch (error) {
    console.error(error)
    alert('Error loading video')
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && showModal.value) {
    showModal.value = false
  }
}

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

onMounted(()=>{
  loadPortfolio();
   window.addEventListener('keydown', handleKeydown);
})
</script>

