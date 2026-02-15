<template>
  <div class="w-full px-4 md:px-32 mt-0 relative">
    <div class="flex justify-between items-center w-full z-50 relative">
      <!-- Logo -->
      <div class="w-40 z-50 relative">
        <img src="/images/mirror logo.png" alt="Logo">
      </div>

      <!-- Hamburger icon -->
      <button class="md:hidden z-50 relative" @click="toggleMenu">
        <svg class="w-6 h-6 text-black cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Desktop Nav -->
      <div
        class="hidden md:flex flex-row gap-8 font-medium text-white md:text-base">
        <a href="#home" class="hover:text-[#BC9565]">HOME</a>
        <a href="#aboutUs" class="hover:text-[#BC9565]">ABOUT US</a>
        <a href="#services" class="hover:text-[#BC9565]">SERVICES</a>
        <a href="#projects" class="hover:text-[#BC9565]">PROJECTS</a>
        <a href="#contact" class="hover:text-[#BC9565]">CONTACT</a>
      </div>
    </div>

    <!-- Mobile Overlay Menu -->
    <transition name="fade-slide">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-95 flex flex-col justify-center items-center gap-10 text-white text-2xl font-medium z-40 transition-all duration-500"
      >
        <!-- Close icon -->
        <button class="absolute top-6 right-6" @click="closeMenu">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <a href="#home" class="hover:text-[#BC9565]" @click="toggleMenu">HOME</a>
        <a href="#aboutUs" class="hover:text-[#BC9565]" @click="toggleMenu">ABOUT US</a>
        <a href="#services" class="hover:text-[#BC9565]" @click="toggleMenu">SERVICES</a>
        <a href="#projects" class="hover:text-[#BC9565]" @click="toggleMenu">PROJECTS</a>
        <a href="#contact" class="hover:text-[#BC9565]" @click="toggleMenu">CONTACT</a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const closeMenu = () => {
  isOpen.value = false
}

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Fade and slide animation */
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-enter-from, .fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
