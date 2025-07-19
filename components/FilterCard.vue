<template>
  <div
    class="relative group rounded-2xl overflow-hidden shadow-lg w-full h-80 lg:h-96 cursor-pointer"
    @click="toggleOverlay"
  >
    <div
      class="w-full h-full bg-cover bg-center transition-all duration-500"
      :style="{ backgroundImage: `url(${imgsrc})` }"
    >
      <div
        class="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center text-white text-center transition-opacity duration-500 p-4"
        :class="{
          'opacity-100': isMobile && isHovered,
          'opacity-0': isMobile && !isHovered,
          'opacity-0 group-hover:opacity-100': !isMobile
        }"
      >
        <h1 class="font-semibold text-lg md:text-2xl mb-2">{{ title }}</h1>
        <p class="text-sm md:text-base mb-4">{{ description }}</p>
        <!-- <NuxtLink
          to="/details"
          class="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all rounded-full text-sm"
        >
          View Details
        </NuxtLink> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  imgsrc: String,
  title: String,
  description: String
})

const isHovered = ref(false)
const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

const toggleOverlay = () => {
  if (isMobile.value) {
    isHovered.value = !isHovered.value
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>
