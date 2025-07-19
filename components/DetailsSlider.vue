<template>
  <Swiper
    :modules="[Navigation]"
    navigation
    class="mySwiper w-full h-80 md:w-[80%] md:h-100"
  >
    <SwiperSlide v-for="(img, index) in images" :key="index">
      <img :src="img" class="w-full h-full object-cover rounded-4xl" />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const images = [
  '/images/projects/hov1.png',
  '/images/projects/hov2.png',
  '/images/projects/hov4.png',
]
</script>
<style>
.swiper-button-prev,
.swiper-button-next {
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 9999px;
  padding: 16px;
  width: 65px;
  height: 65px;
  transition: 0.3s ease;
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
}

</style>
