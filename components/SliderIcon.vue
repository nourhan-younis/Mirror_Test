<template>
  <Swiper
    :modules="[Autoplay]"
    :space-between="20"
    :loop="true"
    :autoplay="{ delay: 3000 }"
     :breakpoints="{
      0: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      }
    }"
    class="mySwiper"
  >
    <SwiperSlide v-for="(img, index) in images" :key="index">
      <img :src="img" alt="slide image" class="w-24 h-15 md:w-w-40 md:h-20  rounded-lg shadow-md opacity-50 hover:opacity-100 cursor-pointer " />
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

const images = [
  '/images/Asset-1@2x-1-300x125.png',
  '/images/Asset-2@2x-300x116.png',
  '/images/Asset-3@2x-300x94.png',
  '/images/Asset-4@2x-300x93.png',
  '/images/Asset-5@2x-300x119.png'
]
</script>