<template>
  <section class="py-20 px-4 md:px-20 bg-gray-100">
    <!-- Back button -->
    <div class="mb-6 max-w-5xl mx-auto flex justify-start">
      <button
        @click="goBack"
        class="inline-block px-6 py-3 bg-gray-300 text-gray-800 font-medium rounded hover:bg-gray-400 transition-all mr-4 cursor-pointer"
      >
        ← Back
      </button>
    </div>

    <!-- Loader -->
    <div v-if="loading" class="text-center py-20">
      <span class="loader inline-block w-10 h-10 border-4 border-t-[#BC9565] border-gray-300 rounded-full animate-spin"></span>
    </div>

    <!-- Content -->
    <div v-else class="fade-in">
      <div class="mb-12">
        <DetailsSlider :images="project?.images" />
      </div>

      <!-- Details Box -->
      <div
        class="bg-white rounded-3xl shadow-md p-6 md:p-12 w-full max-w-5xl mx-auto transform transition-all duration-700"
      >
        <div class="mb-6">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#BC9565]">
            {{ project?.name }}
          </h1>
          <p class="text-base md:text-lg text-gray-600 whitespace-pre-line">
            {{ project?.description }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p class="font-semibold text-lg mb-1">📍 Location</p>
            <p class="text-gray-700">{{ project?.location }}</p>
          </div>
          <div>
            <p class="font-semibold text-lg mb-1">🏷️ Client</p>
            <p class="text-gray-700">{{ project?.customerName }}</p>
          </div>
          <div>
            <p class="font-semibold text-lg mb-1">💰 Cost</p>
            <p class="text-gray-700">{{ project?.projectCost }}</p>
          </div>
          <div>
            <p class="font-semibold text-lg mb-1">🕒 Time</p>
            <p class="text-gray-700">{{ project?.projectTime }}</p>
          </div>
          <div class="md:col-span-2">
            <p class="font-semibold text-lg mb-1">📌 Scope</p>
            <p class="text-gray-700 whitespace-pre-line">{{ project?.scopeOfWork }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import DetailsSlider from '~/components/DetailsSlider.vue'

type Project = {
  _id: string
  name: string
  description: string
  location: string
  customerName: string
  projectCost: number
  projectTime: string
  scopeOfWork: string
  category: string
  images: string[]
}

const route = useRoute()
const router = useRouter()

const project = ref<Project>({
  _id: '',
  name: '',
  description: '',
  location: '',
  customerName: '',
  projectCost: 0,
  projectTime: '',
  scopeOfWork: '',
  category: '',
  images: []
})

const loading = ref(true)

const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

const goBack = () => {
  router.back()
}

onMounted(async () => {
  const id = route.params.id
  try {
    const response = await fetch(`${apiUrl}/projects/${id}`)
    if (!response.ok) throw new Error('Project not found')
    const data = await response.json()
      
    // ✅ Add imageUrl prefix
    data.images = data.images.map((img: string) => `${imageUrl}${img}`)

    project.value = data
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.fade-in {
  animation: fadeInUp 1s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.loader {
  border-radius: 50%;
  border-top-color: #BC9565;
}
</style>
