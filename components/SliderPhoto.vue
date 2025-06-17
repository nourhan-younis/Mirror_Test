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
    <SwiperSlide v-for="(item, index) in images" :key="index">
      <div class="flex lg:ml-8 bg-white p-8  rounded-xl flex-col  lg:w-FULL text-left items-center  lg:items-start w-[90%] ml-15">
        <p class=" font-light mb-5 ">{{ item.description }}</p>
        <div>
<div class="flex gap-25 items-center">
            <div class="flex gap-5 items-center">
                <div>
                    <img
                      :src="item.src"
                      alt="slide image"
                      class="w-15 h-15 object-cover rounded-full shadow-lg "
                    />

                </div>
<div >

    <h2 class="text-sm font-semibold  text-gray-800 lg:text-lg">{{ item.name }}</h2>
    <p class="text-sm text-gray-600 mt-1 max-w-xs">
      {{ item.title }}
    </p>
</div>
  </div>
  <div>

      <i class="fa-solid fa-comments text-[#BC9565] text-2xl"></i>
  </div>
  </div>
               
    
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

const images = [
  {
    src: '/images/baily.png',
    name: 'Bailey Dupont',
    title: 'Designer',
    description: 'My soul is filled with a beautiful tranquility, reminiscent of the gentle mornings of spring that I embrace wholeheartedly, awakening a profound sense of contentment within me.'
  },
  {
    src: '/images/lars.jpg',
    name: 'Lars Peeters',
    title: 'CEO',
    description:'An overwhelming sense of peace has enveloped my being, akin to the blissful mornings of spring where every moment is cherished with utmost sincerity and joy.'
  },
  {
    src: '/images/hae won.png',
    name: 'Hae-won Jeon',
    title: 'Manager',
    description:'My soul is filled with a beautiful tranquility, reminiscent of the gentle mornings of spring that I embrace wholeheartedly, awakening a profound sense of contentment within me.'
  },
  {
    src: '/images/harper.png',
    name: 'Harper Russo',
    title: 'Manager.',
    description:'An overwhelming sense of peace has enveloped my being, akin to the blissful mornings of spring where every moment is cherished with utmost sincerity and joy.'
  },
]
</script>
