<template>
  <div
    class="card-container w-full sm:w-80 md:w-90 h-64 sm:h-80 md:h-96 bg-cover bg-center relative group transition-all duration-500 hover:opacity-90 m-2 sm:m-4 md:m-8"
    :style="{ backgroundImage: `url('${imgsrc}')` }"
    @click="toggleOverlay"
  >
    <!-- Hover Social Icons Overlay -->
    <div
      class="absolute inset-0 bg-black bg-opacity-80 flex gap-3 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center cursor-pointer hover:bg-gray-900"
      :class="{
        'opacity-100': showOverlay,
        'opacity-0 group-hover:opacity-100': !showOverlay
      }"
    >
      <a :href="linkedIn" target="_blank" v-if="linkedIn">
        <div class="bg-[#BC9565] hover:bg-black rounded-full px-3 py-2">
          <i class="fa-brands fa-linkedin text-white"></i>
        </div>
      </a>

      <a :href="`https://wa.me/${whatsapp}`" target="_blank" v-if="whatsapp">
        <div class="bg-[#BC9565] hover:bg-black rounded-full px-3 py-2">
          <i class="fa-brands fa-whatsapp text-white"></i>
        </div>
      </a>

      <a :href="`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`" target="_blank" v-if="email">
        <div class="bg-[#BC9565] hover:bg-black rounded-full px-3 py-2">
          <i class="fa-solid fa-envelope text-white"></i>
        </div>
      </a>
    </div>

    <!-- Title & Description -->
    <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 sm:w-4/5 bg-gradient-to-t from-black/70 to-black/0 p-4 rounded-lg shadow-lg text-center z-2"
    >
      <h1 class="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
        {{ title }}
      </h1>
      <p class="text-sm sm:text-base md:text-lg text-gray-200 font-light leading-snug">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showOverlay = ref(false)

function toggleOverlay() {
  if (window.innerWidth <= 768) {
    showOverlay.value = !showOverlay.value
  }
}

defineProps({
  imgsrc: String,
  title: String,
  description: String,
  email: String,
  whatsapp: String,
  linkedIn: String
})
</script>

<style scoped>
@media (max-width: 640px) {
  .card-container {
    width: 80vw !important;
    margin-top: 30px;
  }
}
</style>