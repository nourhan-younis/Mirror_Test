<template>
  <div class="w-full px-4 md:px-32 mt-0">
    <div class="flex justify-between items-center w-full">

      <div class="w-36">
        <img src="/images/mirror logo.png" alt="Logo">
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <svg class="w-6 h-6 text-white cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div
        :class="['flex flex-col md:text-base md:flex-row gap-8 md:gap-8 font-medium text-[12px] text-black md:text-white absolute md:static top-21 md:top-20 left-70 md:left-0   w-[30%] md:w-auto bg-white md:bg-transparent px-6 md:px-0 py-4 md:py-0 z-50 transition-all duration-300 ease-in-out', isOpen ? 'block' : 'hidden md:flex']">
        <a href="#home" class="hover:text-[#BC9565]">HOME</a>
        <a href="#aboutUs" class="hover:text-[#BC9565]">ABOUT US</a>
        <a href="#services" class="hover:text-[#BC9565]">SERVICES</a>
        <a href="#projects" class="hover:text-[#BC9565]">PROJECTS</a>
        <a href="#contact" class="hover:text-[#BC9565]">CONTACT</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>
