<template>
  <div id="projects" class="mt-16 lg:mt-24 px-4 lg:px-16">
    <div class="text-center mb-10">
      <h1 class="font-semibold text-3xl mb-5 uppercase md:text-4xl">Latest Projects</h1>
      <p class="text-base font-light max-w-2xl mx-auto">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
    </div>

    <!-- Categories -->
    <div v-if="!isLoadingCat" class="flex flex-wrap justify-center gap-4 mb-10 uppercase text-base md:text-lg font-medium list-none">
      <li
        class="cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
        :class="{ 'bg-black text-white': !selectedCategory }"
        @click="selectCategory(null)"
      >All</li>
      <li
        v-for="cat in categories"
        :key="cat._id"
        class="cursor-pointer px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
        :class="{ 'bg-black text-white': selectedCategory === cat._id }"
        @click="selectCategory(cat._id)"
      >{{ cat.name }}</li>
    </div>

    <!-- Projects Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 min-h-[300px] relative">
      <div v-if="isLoading" class="absolute inset-0 flex justify-center items-center bg-white/70 z-10">
        <svg class="animate-spin h-10 w-10 text-black" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10"
                  stroke="currentColor" stroke-width="4" fill="none"/>
          <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"/>
        </svg>
      </div>

      <template v-else-if="projects.length">
        
        <FilterCard
          v-for="project in projects"
          :key="project._id"
          :id="project._id"
          :imgsrc="`${imageUrl}${project.images[0]}`"
          :title="project.name"
          :description="project.description"
          class="transition duration-300 transform hover:scale-105"
        />
      </template>

      <div v-else class="col-span-full flex flex-col items-center justify-center text-center py-20">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-gray-400" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0v-4a4 4 0 00-4-4H9a4 4 0 00-4 4v4"/>
        </svg>
        <p class="text-lg font-medium text-gray-500">No projects found.</p>
        <p class="text-sm text-gray-400">Try selecting a different category.</p>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center items-center gap-6 mb-4">
      <button
        class="p-2 border rounded-full disabled:opacity-30 hover:bg-black hover:text-white transition"
        :disabled="currentPage <= 1"
        @click="prevPage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M15 19l-7-7 7-7"/>
        </svg>
      </button>

      <span class="text-sm md:text-base">Page {{ currentPage }} of {{ totalPages }}</span>

      <button
        class="p-2 border rounded-full disabled:opacity-30 hover:bg-black hover:text-white transition"
        :disabled="currentPage >= totalPages"
        @click="nextPage"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
             viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 5l7 7-7 7"/>
        </svg>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

type Category = { _id: string; name: string }
type Project = {
  _id: string
  name: string
  description: string
  images: string[]
}

const categories = ref<Category[]>([])
const projects = ref<Project[]>([])
const isLoading = ref(true)
const isLoadingCat = ref(true)

const selectedCategory = ref<string | null>(null)
const currentPage = ref(1)
const pageSize = 6
const totalPages = ref(1)

const loadCategories = async () => {
   isLoadingCat.value = true
  try {
    const data = await $fetch<Category[]>(`${apiUrl}/categories`)
    categories.value = data
    isLoadingCat.value = false
  } catch (error) {
    console.error('Failed to load categories:', error)
  }
}

const loadProjects = async () => {
  isLoading.value = true
  try {
    let url = `${apiUrl}/projects?page=${currentPage.value}&limit=${pageSize}`
    if (selectedCategory.value) {
      url += `&category=${selectedCategory.value}`
    }
    const data = await $fetch<{ projects: Project[]; total: number }>(url)
    projects.value = data.projects
    totalPages.value = Math.ceil(data.total / pageSize)
  } catch (error) {
    console.error('Failed to load projects:', error)
     isLoading.value = false
  }
  isLoading.value = false
}

onMounted(async () => {
  await loadCategories()
  await loadProjects()
})

watch(selectedCategory, () => {
  currentPage.value = 1
  loadProjects()
})

watch(currentPage, () => {
  loadProjects()
})

const selectCategory = (catId: string | null) => {
  selectedCategory.value = catId
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}
</script>


