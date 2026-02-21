<template>
  <div id="howWeWork" class="my-14 px-4 lg:px-20">
    <div class="text-center max-w-4xl mx-auto mb-12">
      <h1 class="uppercase font-medium text-2xl mb-4 md:text-4xl">
        {{ data.heading }}
      </h1>
      <p class="text-base md:text-lg font-light whitespace-pre-line">
        {{ data.description }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
      <Num
        v-for="step in data.steps"
        :key="step._id"
        :number="step.number"
        :title="step.title"
        :description="step.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Step {
  _id: string
  number: string
  title: string
  description: string
}

interface HowWeWork {
  heading: string
  description: string
  steps: Step[]
}

const config = useRuntimeConfig()
const apiBase = process.dev
  ? config.public.apiBaseLocal
  : config.public.apiBaseProd

const data = ref<HowWeWork>({
  heading: '',
  description: '',
  steps: []
})

async function fetchData() {
  try {
    const res = await fetch(`${apiBase}/how-we-work`)
    if (!res.ok) throw new Error('Failed')
    data.value = await res.json()
  } catch (err) {
    console.error(err)
  }
}

onMounted(fetchData)
</script>