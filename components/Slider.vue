<!-- components/ImageSlider.vue -->
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
      <img :src="slide" class="w-full lg:h-250 h-120 object-cover zoom-animation" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const slides = [
  '/images/39R5PQB.jpg',
  '/images/3d-rendering-luxury-and-modern-living-room-with-good-design-leather-sofa.jpg',
  '/images/modern-living-room-with-black-leather-sofa-in-front-of-a-wooden-panel.jpg',
]
</script>

<style scoped>
@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Zoom in */
  }
  100% {
    transform: scale(2); /* Zoom out */
  }
}

.zoom-animation {
  animation: zoomInOut 10s ease-in-out ;
  transition: transform 20s ease-in-out;
}
</style>
