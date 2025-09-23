<template>
  <Swiper
    :modules="[Autoplay]"
    :space-between="10"
    :loop="true"
    :autoplay="{ delay: 3000 }"
    :breakpoints="{
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 1,
      }
    }"
    class="mySwiper"
  >
    <SwiperSlide
      v-for="(comment, index) in comments"
      :key="index"
      class="h-full"
    >
      <div class="flex flex-col justify-between h-full bg-white p-6 md:p-8 rounded-xl w-full max-w-[95%] mx-auto text-center lg:text-left">
        <p class="font-light break-words text-sm md:text-base grow mb-5">
          {{ comment.message }}
        </p>
        <div class="flex justify-around  items-center mt-auto gap-4 lg:gap-[30%] lg:justify-start">
          <div class="flex gap-4 items-center">
            <img
              :src="comment.images?.[0] ? `${imageUrl}${comment.images[0]}` : '/images/persons/default.png'"
              alt="slide image"
              class="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full shadow-lg"
            />
            <div>
              <h2 class="text-sm font-semibold text-gray-800 lg:text-lg">
                {{ comment.name }}
              </h2>
              <p class="text-sm text-gray-600 mt-1 max-w-xs">
                {{ comment.position }}
              </p>
            </div>
          </div>
          <i class="fa-solid fa-comments text-[#BC9565] text-xl md:text-2xl"></i>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { useRuntimeConfig } from '#app'

const config = useRuntimeConfig()
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

defineProps({
  comments: {
    type: Array,
    required: true
  }
})
</script>

<style>
.mySwiper .swiper-slide {
  display: flex;
  height: auto !important;
}
</style>
