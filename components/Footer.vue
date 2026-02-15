<template>
    <div class=" text-center mt-10 mb-6 flex flex-col items-center ">
        <img src="public/images/mirror logo black.png" class="w-35 lg:w-45 mb-0" alt="">
        <p class="text-m font-light">One day however a small line of blind text by the name of Lorem <br>Ipsum decided
            to leave for the far World of Grammar.</p>
    </div>


    <div class="text-center flex justify-center content-center cursor-pointer gap-3 mb-10 ">
        <!-- <div class="bg-black hover:bg-[#BC9565] rounded-full  px-3 py-2 text-center">

            <i class="fa-brands fa-facebook-f  text-white "></i>
        </div> -->
        <div class="bg-black hover:bg-[#BC9565] rounded-full px-3 py-2 text-center">

            <a href="https://www.instagram.com/mirror_/#" target="_blank"><i
                    class="fa-brands fa-instagram  text-white "></i></a>
        </div>
        <!-- <div class="bg-black hover:bg-[#BC9565] rounded-full px-3 py-2 text-center">

            <i class="fa-brands fa-twitter  text-white "></i>
        </div>
        <div class="bg-black hover:bg-[#BC9565] rounded-full px-3 py-2 text-center">

            <i class="fa-brands fa-linkedin-in text-white"></i>
        </div> -->
    </div>


    <div class="flex flex-col md:flex-row md:justify-around md:mr-50">
        <div class="flex  justify-around mb-8 md:gap-10 lg:gap-40 ">

            <div>
                <h1 class="text-xl mb-5 font-semibold md:text-2xl ">Other Pages</h1>
                <ul class="font-light text-[17px] flex flex-col">
                    <a href="#home" class="cursor-pointer hover:text-[#BC9565] mb-2">Home</a href="#">
                    <a href="#aboutUs" class="cursor-pointer hover:text-[#BC9565] mb-2">About Us</a href="#">
                    <a href="#services" class="cursor-pointer hover:text-[#BC9565] mb-2">Services</a href="#">
                    <a href="#contact" class="cursor-pointer hover:text-[#BC9565] mb-2">Contact</a href="#">
                    <a href="#projects" class="cursor-pointer hover:text-[#BC9565] mb-2">Project</a href="#">
                </ul>
            </div>
            <div>
                <h1 class="text-xl mb-5 font-semibold md:text-2xl">Quick Links</h1>
                <ul class="font-light text-[17px]">
                    <li class="cursor-pointer hover:text-[#BC9565] mb-2">Privacy Policy</li>
                    <li class="cursor-pointer hover:text-[#BC9565] mb-2">Term Of Service</li>
                    <li class="cursor-pointer hover:text-[#BC9565] mb-2">Disclaimer</li>
                    <li class="cursor-pointer hover:text-[#BC9565] mb-2">Credits</li>
                    <li class="cursor-pointer hover:text-[#BC9565] mb-2">FAQ</li>
                </ul>
            </div>
        </div>
        <!-- Latest Projects -->
        <div class="mb-1 flex flex-col sm:items-left ml-10 sm:ml-30 md:mx-5">
            <h1 class="text-xl mb-5 font-semibold md:text-2xl">Latest Projects</h1>

            <div v-if="isLoading" class="text-gray-400 text-sm">Loading...</div>

            <div v-else class="flex flex-col gap-2">
                <div class="flex gap-2 cursor-pointer">
                    <NuxtLink v-for="p in latestRow1" :key="p._id" :to="`/project/${p._id}`"
                        class="block overflow-hidden rounded">
                        <img :src="`${imageUrl}${p.images[0]}`"
                            class="w-25 h-15 object-cover hover:scale-110 transition duration-300" />
                    </NuxtLink>
                </div>

                <div class="flex gap-2">
                    <NuxtLink v-for="p in latestRow2" :key="p._id" :to="`/project/${p._id}`"
                        class="block overflow-hidden rounded">
                        <img :src="`${imageUrl}${p.images[0]}`"
                            class="w-25 h-15 object-cover hover:scale-110 transition duration-300" />
                    </NuxtLink>
                </div>
            </div>
        </div>



    </div>

    <hr class="text-gray-200 my-0">

    <div class="flex flex-col justify-around items-center font-light text-sm my-5 mb-10 gap-2 md:flex-row md:text-base">
        <p>Interior Design Template Kit by Jegtheme</p>
        <p>Copyright © 2024. All rights reserved.</p>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd
const imageUrl = process.dev ? config.public.imageUrlLocal : config.public.imageUrlProd

type Project = {
    _id: string
    images: string[]
}

const latestProjects = ref<Project[]>([])
const isLoading = ref(true)

const loadLatest = async () => {
    try {
        const data = await $fetch<{ projects: Project[] }>(
            `${apiUrl}/projects?page=1&limit=6`
        )
        latestProjects.value = data.projects
    } catch (err) {
        console.error(err)
    }
    isLoading.value = false
}

onMounted(loadLatest)

const latestRow1 = computed(() => latestProjects.value.slice(0, 3))
const latestRow2 = computed(() => latestProjects.value.slice(3, 6))
</script>