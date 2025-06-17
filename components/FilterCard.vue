<template>
  <div
    class="w-full h-70 lg:w-150 lg:h-96 bg-cover bg-center relative group rounded-l overflow-hidden transition-all duration-500 hover:opacity-800"
    :style="{ backgroundImage: `url(${imgsrc})` }"
  >
    <div
      class="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100  duration-500 p-6 text-center cursor-pointer hover:bg-black hover:bg-opacity-10"
    >
      <h1 class="font-medium text-2xl lg:text-3xl mb-4">{{ title }}</h1>
      <p class="text-base lg:text-lg">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imgsrc: String,  
  title: String, 
  description: String
})
</script>
