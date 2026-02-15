<template>
  <div class="px-6 lg:px-20 py-16">

    <!-- Back button -->
    <button
      @click="goBack"
      class="mb-6 flex items-center gap-2 text-sm font-medium hover:underline cursor-pointer"
    >
      ← Back
    </button>

    <h1 class="text-4xl font-bold text-center mb-10 uppercase">
      All Projects
    </h1>

    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-3 mb-10">
      <button
        @click="selectCategory(null)"
        :class="filterClass(!selectedCategory)"
      >All</button>

      <button
        v-for="cat in categories"
        :key="cat._id"
        @click="selectCategory(cat._id)"
        :class="filterClass(selectedCategory === cat._id)"
      >
        {{ cat.name }}
      </button>
    </div>

    <!-- Grid wrapper -->
    <div class="relative min-h-[300px]">

      <!-- Loader -->
      <div
        v-if="isLoading"
        class="absolute inset-0 flex justify-center items-center bg-white/70 z-10"
      >
        <div class="loader"></div>
      </div>

      <!-- Projects grid -->
      <TransitionGroup
        v-else-if="projects.length"
        name="fade"
        tag="div"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <FilterCard
          v-for="p in projects"
          :key="p._id"
          :id="p._id"
          :imgsrc="`${imageUrl}${p.images[0]}`"
          :title="p.name"
          :description="p.description"
          class="hover:scale-105 transition duration-300"
        />
      </TransitionGroup>

      <!-- Empty state -->
      <div
        v-else
        class="col-span-full flex flex-col items-center justify-center text-center py-20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mb-4 text-gray-400"
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0v-4a4 4 0 00-4-4H9a4 4 0 00-4 4v4"/>
        </svg>
        <p class="text-lg font-medium text-gray-500">No projects found.</p>
        <p class="text-sm text-gray-400">Try selecting a different category.</p>
      </div>

    </div>

    <!-- Pagination -->
    <div v-if="totalItems > pageSize" class="flex justify-center gap-6 mt-12">
      <button @click="prevPage" :disabled="currentPage === 1" class="pageBtn">
        ← Prev
      </button>

      <span class="font-medium">
        Page {{ currentPage }} / {{ totalPages }}
      </span>

      <button @click="nextPage" :disabled="currentPage === totalPages" class="pageBtn">
        Next →
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const config = useRuntimeConfig()

type Category = { _id: string; name: string }
type Project = {
  _id: string
  name: string
  description: string
  images: string[]
}

const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

const categories = ref<Category[]>([])
const projects = ref<Project[]>([])
const totalItems = ref(0)

const selectedCategory = ref<string | null>(null)
const currentPage = ref(1)
const pageSize = 15
const totalPages = ref(1)
const isLoading = ref(true)

const filterClass = (active: boolean) =>
  `px-5 py-2 rounded-full border transition duration-300 ${
    active ? 'bg-black text-white' : 'hover:bg-black hover:text-white'
  }`

const loadCategories = async () => {
  categories.value = await $fetch(`${apiUrl}/categories`)
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
    totalItems.value = data.total
    totalPages.value = Math.ceil(data.total / pageSize)

  } catch (error) {
    console.error('Failed to load projects:', error)
  }

  isLoading.value = false
}

watch([selectedCategory, currentPage], loadProjects)

onMounted(async () => {
  await loadCategories()
  await loadProjects()
})

const selectCategory = (id: string | null) => {
  selectedCategory.value = id
  currentPage.value = 1
}

const nextPage = () => currentPage.value++
const prevPage = () => currentPage.value--

const goBack = () => router.back()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.pageBtn {
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 999px;
  transition: 0.3s;
}
.pageBtn:hover {
  background: black;
  color: white;
}

.loader {
  width: 50px;
  height: 50px;
  border: 4px solid #ddd;
  border-top: 4px solid black;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
