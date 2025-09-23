<template>
  <div
    ref="cardRef"
    class="w-full sm:w-[90%] md:w-[80%] lg:w-[30%] xl:w-[28%] p-6 sm:p-8 lg:p-10 rounded-xl cursor-pointer shadow-md transition-all duration-700 ease-out group bg-white text-black
      hover:bg-[url('/images/interior/classic/am5.jpg')] hover:bg-cover hover:bg-center hover:text-white hover:opacity-90"
    :class="[
      isHovered && !isDesktop ? 'bg-[url(/images/interior/classic/am5.jpg)] bg-cover bg-center text-white' : '',
      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
    @click="toggleHover"
  >
    <div>
      <i :class="[
        icon,
        'text-2xl sm:text-3xl xl:text-4xl mb-4 lg:mb-6',
        isHovered && !isDesktop ? 'text-white' : 'text-[#BC9565]',
        'group-hover:text-white'
      ]"></i>
    </div>
    <h1 class="font-medium text-lg sm:text-xl xl:text-2xl mb-4 lg:mb-6">
      {{ title }}
    </h1>
    <p
      class="text-sm sm:text-base font-light leading-relaxed mb-3"
      v-html="showMore ? description : shortDescription"
    ></p>
    <button
      v-if="isLong"
      @click.stop="toggle"
      class="text-sm cursor-pointer font-medium underline hover:text-[#BC9565]"
    >
      {{ showMore ? 'Read Less' : 'Read More' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})

const showMore = ref(false)
const toggle = () => (showMore.value = !showMore.value)

const plainText = computed(() =>
props   && props.description ?  props.description.replace(/<br\s*\/?>/gi, ' ') : ''
)
const shortDescription = computed(() =>
  plainText.value.length > 150 ? plainText.value.slice(0, 150) + '...' : plainText.value
)
const isLong = computed(() => plainText.value.length > 150)

const isHovered = ref(false)
const isDesktop = ref(false)
const toggleHover = () => {
  if (!isDesktop.value) isHovered.value = !isHovered.value
}

// Intersection Observer for fade + slide
const inView = ref(false)
const cardRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver

onMounted(() => {
  const updateSize = () => {
    isDesktop.value = window.innerWidth >= 1024
  }
  updateSize()
  window.addEventListener('resize', updateSize)

  // Animate on scroll
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          inView.value = true
        } else {
          inView.value = false
        }
      },
      { threshold: 0.1 }
    )
    if (cardRef.value) observer.observe(cardRef.value)
  } else {
    inView.value = true // fallback for old browsers
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', () => {})
  if (observer && cardRef.value) observer.unobserve(cardRef.value)
})
</script>
