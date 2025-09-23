<template>
  <div
    ref="cardRef"
    class="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-700 ease-out flex flex-col overflow-hidden
      opacity-0 translate-y-10"
    :class="{
      'opacity-100 translate-y-0': inView
    }"
  >
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :alt="title"
      class="w-full h-32 object-cover cursor-pointer hover:opacity-80 transition-all duration-300"
      @click="openLightbox(index)"
    />
    <div class="p-6 flex flex-col gap-2">
      <h3 class="font-bold text-xl text-[#BC9565]">{{ title }}</h3>
      <h5 class="font-semibold text-xl text-[#BC9565]">{{ subtitle }}</h5>
      <p class="text-sm"><strong>Location:</strong> {{ location }}</p>
      <p class="text-sm"><strong>Client:</strong> {{ client }}</p>
      <p class="text-sm"><strong>Scope:</strong> {{ scope }}</p>
      <p class="text-sm"><strong>LOD:</strong> {{ lod }}</p>
      <ul class="text-sm list-disc ml-5 mt-2">
        <li v-for="(service, i) in services" :key="i">{{ service }}</li>
      </ul>
    </div>

    <div
      v-if="lightboxOpen"
      class="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-all duration-500"
      @click="closeLightbox"
    >
      <img
        :src="images[currentImage]"
        alt="Gallery image"
        class="max-h-[90vh] max-w-[90vw] object-contain transform scale-0 transition-transform duration-500"
        :class="{ 'scale-100': lightboxOpen }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: String,
  subtitle: String,
  location: String,
  client: String,
  scope: String,
  lod: String,
  services: Array,
  images: Array,
})

const lightboxOpen = ref(false)
const currentImage = ref(0)

const openLightbox = (index) => {
  currentImage.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
}

// Animation on scroll
const cardRef = ref(null)
const inView = ref(false)
let observer

onMounted(() => {
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      ([entry]) => {
        inView.value = entry.isIntersecting
      },
      { threshold: 0.1 }
    )
    if (cardRef.value) observer.observe(cardRef.value)
  } else {
    inView.value = true
  }
})

onBeforeUnmount(() => {
  if (observer && cardRef.value) observer.unobserve(cardRef.value)
})
</script>
