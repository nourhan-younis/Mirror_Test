<template>
        <div
          class="w-90 h-96 bg-cover bg-center relative group transition-all duration-500 hover:opacity-80"
          :style="{ backgroundImage: `url(${imgsrc})` }"
        >
          <div
            class="absolute inset-0 bg-black bg-opacity-80 flex gap-2 items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 text-center cursor-pointer hover:bg-gray-500 "
          >
          <div class="bg-[#BC9565] hover:bg-black rounded-full  px-3 py-2 text-center">
      
              <i class="fa-brands fa-facebook-f  text-white "></i>
          </div>
          <div class="bg-[#BC9565] hover:bg-black rounded-full px-3 py-2 text-center">
      
              <i class="fa-brands fa-instagram  text-white "></i>
          </div>
          <div class="bg-[#BC9565] hover:bg-black rounded-full px-3 py-2 text-center">
      
              <i class="fa-brands fa-twitter  text-white "></i>
          </div>
          </div>
            <div class="absolute bg-white text-black px-15 py-5 text-center top-90 left-10 shadow-2xl z-2">
      <h1 class="text-xl mb-2 font-medium">{{ title }}</h1>
      <p class="font-light">{{ description }}</p>
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
