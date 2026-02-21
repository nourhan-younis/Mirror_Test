<template>
  <div>
    <Swiper
      :modules="[Autoplay]"
      :space-between="0"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :breakpoints="{
        0: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 }
      }"
      class="mySwiper"
    >
      <SwiperSlide v-for="client in clients" :key="client._id">
        <img
          :src="`${imageUrl}${client.logo}`"
          alt="client logo"
          class="w-24 h-15 md:w-40 md:h-20 rounded-lg shadow-md opacity-50 hover:opacity-100 cursor-pointer"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

type Client = { _id: string; logo: string }

const clients = ref<Client[]>([])

const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

const loadClients = async () => {
  try {
    clients.value = await $fetch<Client[]>(`${apiUrl}/ourClients`)
  } catch (err) {
    console.error('Failed to load clients:', err)
  }
}

onMounted(() => {
  loadClients()
})
</script>