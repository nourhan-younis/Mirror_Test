<template>
  <Swiper
    :modules="[Autoplay]"
    :slides-per-view="1"
    :space-between="100"
    :loop="true"
    :autoplay="{ delay: 2000 }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(slide, index) in slides" :key="index">
      <img :src="slide" class="w-full lg:h-250 h-120  object-cover zoom-animation" />
       <div
        class="absolute inset-0  flex items-center justify-center"
      >
     
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const slides = [
  '/images/interior/35.jpg',
  '/images/interior/40.jpg',
  '/images/interior/41.jpg',
  '/images/interior/39.jpg',
]
</script>

<style scoped>
@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1); 
  }
}

.zoom-animation {
  animation: zoomInOut 40s ease-in-out infinite ;
}
</style>
