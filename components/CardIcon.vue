<template>
  <div
    class="w-full sm:w-[90%] md:w-[80%] lg:w-[30%] xl:w-[28%] p-6 sm:p-8 lg:p-10 rounded-xl cursor-pointer shadow-md transition-all duration-300 group bg-white text-black hover:bg-[url('/images/interior/classic/am5.jpg')] hover:bg-cover hover:bg-center hover:text-white hover:opacity-90"
    :class="{
      'bg-[url(/images/interior/classic/am5.jpg)] bg-cover bg-center text-white ': isHovered && !isDesktop
    }"
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
    <h1 class="font-medium text-lg sm:text-xl xl:text-2xl mb-4 lg:mb-6">{{ title }}</h1>
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

<script setup>
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  icon: String,
  title: String,
  description: String,
})
const showMore = ref(false)
const toggle = () => (showMore.value = !showMore.value)

const plainText = computed(() => props.description.replace(/<br\s*\/?>/gi, ' '))
const shortDescription = computed(() =>
  plainText.value.length > 150 ? plainText.value.slice(0, 150) + '...' : plainText.value
)
const isLong = computed(() => plainText.value.length > 150)
const isHovered = ref(false)
const toggleHover = () => {
  if (!isDesktop.value) isHovered.value = !isHovered.value
}
const isDesktop = ref(false)
onMounted(() => {
  const updateSize = () => {
    isDesktop.value = window.innerWidth >= 1024
  }
  updateSize()
  window.addEventListener('resize', updateSize)
})
</script>
