<template>
  <div id="whoWeServe" class="my-14 px-4 lg:px-20 bg-gray-50 py-12 rounded-3xl">

    <!-- Page Header -->
    <div class="text-center max-w-4xl mx-auto mb-16">
      <h1 class="uppercase font-bold text-3xl md:text-5xl text-gray-800 mb-4">
        {{ data.header }}
      </h1>
      <p class="text-gray-600 text-base md:text-lg font-light whitespace-pre-line">
        {{ data.description }}
      </p>
    </div>

    <!-- Items Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      <div
        v-for="item in data.items"
        :key="item._id"
        class="group relative border border-gray-200 p-6 rounded-3xl shadow-sm bg-white transition transform hover:-translate-y-2 hover:shadow-lg"
      >
        <!-- Accent Circle -->
        <div class="absolute -top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-br from-[#BC9565] to-[#E2C68B] flex items-center justify-center text-white font-bold text-lg">
          {{ item.title[0] }}
        </div>

        <h3 class="text-xl font-semibold text-gray-800 mb-3 mt-6 md:mt-2">
          {{ item.title }}
        </h3>
        <p class="text-gray-600 text-sm md:text-base whitespace-pre-line">
          {{ item.description }}
        </p>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface WhoWeServeItem {
  _id: string
  title: string
  description: string
}

interface WhoWeServe {
  header: string
  description: string
  items: WhoWeServeItem[]
}

const config = useRuntimeConfig()
const apiBase = process.dev
  ? config.public.apiBaseLocal
  : config.public.apiBaseProd

const data = ref<WhoWeServe>({
  header: '',
  description: '',
  items: []
})

async function fetchData() {
  try {
    const res = await fetch(`${apiBase}/who-we-serve`)
    if (!res.ok) throw new Error('Failed to fetch Who We Serve data')
    data.value = await res.json()
  } catch (err) {
    console.error(err)
  }
}

onMounted(fetchData)
</script>

<style scoped>
/* Optional: Smooth hover transition */
.group {
  transition: all 0.3s ease;
}
</style>