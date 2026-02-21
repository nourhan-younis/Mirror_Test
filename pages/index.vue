<template>
    <!-- section 1 -->
    <SliderSection />

    <!-- section 2 -->
    <AboutSection />

    <!-- section 3 -->
    <ServicesSection />

    <!-- section 4 -->
    <ProjectSection />

    <!-- section 5 -->
       <div class="w-full mt-24 text-center  px-4">
    <h1 class="font-semibold text-3xl mb-5 uppercase text-center">Meet our team</h1>
    <p class="mb-8">
      Our People Are Our Strength — Meet the Passionate Professionals at MIRROR.
    </p>
  </div>
  <div class="flex flex-col xl:flex-row justify-center mt-8 gap-10 xl:my-24 w-full items-center">

  <!-- Intro Text -->


  <!-- Team Cards -->
  <div class="">
    <div v-if="isLoading" class="text-center py-10 w-full">
      <svg class="animate-spin h-8 w-8 mx-auto text-black" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" />
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 000 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z" />
      </svg>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6  w-full">
      <PersonCard
        v-for="(person, index) in team"
        :key="index"
        :imgsrc="person.images?.[0] ? `${imageUrl}${person.images[0]}` : '/images/persons/default.png'"
        :title="person.name"
        :description="person.description"
        :linkedIn="person.linkedIn"
        :whatsapp="person.whatsapp"
        :email="person.email"
      />
    </div>
  </div>

</div>

   <div class="text-center max-w-4xl mx-auto mt-32 mb-4">
     <h1 class="uppercase font-medium text-2xl md:text-4xl">Our Clients</h1>
   </div>
    <!-- section 6 -->
    <div class=" w-full bg-gray-50 py-8 pl-20 pr-10 md:pl-45 md:py-15S ">
        <div>
            <SliderIcon />
        </div>
    </div>

    <!-- section 7 -->
    <HowSection />


    <!-- section 8 -->
    <div class="mt-24 flex flex-col lg:flex-row w-full items-center">
        <div class="w-full lg:w-[50%]">
            <img src=/images/interior/24.jpg alt="">
        </div>
        <div class="flex flex-col w-full justify-center text-center lg:w-[50%] lg:text-left ">
            <div class=" flex flex-col mt-10 w-full lg:w-full items-center lg:items-start lg:ml-12">
                <h1 class="uppercase font-medium text-2xl mb-3 lg:text-4xl ">Testimonials</h1>
                <p class="text-base font-light text">Far far away behind the word mountains far from the countries
                    <br>Vokalia
                    and
                    Consonantia there live the blind texts.
                </p>
            </div>
            <div v-if="comments && comments.length" class="w-full my-10">
                <SliderPhoto 
                  :comments="comments"
                />
            </div>
        </div>
    </div>

    <!-- section 9 -->
    <ContactSection />
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRuntimeConfig } from '#app'
const team = ref([])
const comments = ref([])
const isLoading = ref(true)


const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd


const fetchTeam = async () => {
    try {
        const data = await $fetch(`${apiUrl}/team-members`)
        team.value = data || []
    } catch (err) {
        console.error('Failed to load team:', err)
    } finally {
        isLoading.value = false
    }
}

const fetchComments = async () => {
    try {
        const data = await $fetch(`${apiUrl}/peapole-comments`)
        comments.value = data || []
    } catch (err) {
        console.error('Failed to load comments:', err)
    } finally {
        isLoading.value = false
    }
}

onMounted(async () => {
    await fetchTeam()
    await fetchComments()
})


</script>

<style>
html,
body {
    overflow-x: hidden;
    scroll-behavior: smooth;
}
</style>