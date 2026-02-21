<template>
  <div class="relative w-full md:w-[85%] mx-auto">

    <Swiper
      :modules="[Navigation]"
      navigation
      class="rounded-3xl overflow-hidden shadow-xl"
      style="height: fit-content;"
    >
      <SwiperSlide
        v-for="(img, index) in images"
        :key="index"
      >
        <div class="slide-wrapper">
          <img
            :src="img"
            class="slide-image"
            loading="lazy"
          />
        </div>
      </SwiperSlide>
    </Swiper>

  </div>
</template>

<script  setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const props = defineProps<{
  images: string[]
}>()

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
