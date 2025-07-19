<template>
  <div class="w-full text-center p-6 rounded-xl bg-white shadow-sm">
    <p class="text-6xl md:text-7xl font-bold text-gray-200 mb-2">{{ number }}</p>
    <h2 class="font-semibold text-xl md:text-2xl mb-3">{{ title }}</h2>
    <div
      class="overflow-hidden transition-all duration-500 ease-in-out"
      :class="showMore ? 'max-h-[1000px]' : 'max-h-[120px]'"
    >
      <p
        class="font-light text-sm md:text-base"
        v-html="description"
      ></p>
    </div>
    <button
      v-if="isLong"
      @click="toggleShowMore"
      class="mt-2 text-sm cursor-pointer font-medium underline hover:text-[#BC9565] transition-all"
    >
      {{ showMore ? 'Read Less' : 'Read More' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  number: String,
  title: String,
  description: String,
})

const showMore = ref(false)
const toggleShowMore = () => {
  showMore.value = !showMore.value
}

const plainText = computed(() =>
  props.description.replace(/<br\s*\/?>/gi, ' ')
)

const isLong = computed(() => plainText.value.length > 120)
</script>
