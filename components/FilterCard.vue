<template>
  <div
    ref="card"
    class="relative group rounded-2xl overflow-hidden shadow-lg w-full h-80 lg:h-96 cursor-pointer transition-all duration-700 ease-out"
    :class="{
      'opacity-0 translate-y-10': !inView,
      'opacity-100 translate-y-0': inView
    }"
    @click="handleClick"
  >
    <!-- Image -->
    <img
      :src="imgsrc"
      alt="Project Image"
      class="w-full h-full object-cover transition-all duration-700 group-hover:brightness-75"
    />

    <!-- Overlay gradient + text + button -->
    <div
      class="absolute opacity-100 inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent text-[#f3f3f3] transition-all duration-700"
    >
      <!-- Optional label -->
      <span class="text-xs uppercase tracking-widest text-gray-300 mb-2">Project</span>

      <h1 class="font-semibold text-lg md:text-2xl mb-2 line-clamp-2 break-words">{{ title }}</h1>
      <p class="text-sm md:text-base mb-4 line-clamp-2 break-words">{{ description }}</p>

      <!-- View Details button -->
    <NuxtLink
  :to="`/project/${id}`"
  class="self-start px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition-all duration-300"
>
  View Details
</NuxtLink>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  id:string
  imgsrc: string
  title: string
  description: string
}>()

const isMobile = ref(false)
const isActive = ref(false)
const inView = ref(false)
const card = ref<HTMLElement | null>(null)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 1024
}

const handleClick = () => {
  if (isMobile.value) {
    isActive.value = !isActive.value
  }
}

let observer: IntersectionObserver

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        inView.value = entry.isIntersecting
      })
    },
    { threshold: 0.1 }
  )

  if (card.value) {
    observer.observe(card.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkMobile)
  if (card.value && observer) {
    observer.unobserve(card.value)
  }
})
</script>

<style scoped>
.group:hover img {
  filter: brightness(0.75);
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word; /* handles long words */
}
</style>
