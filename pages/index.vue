<template>

    <!-- section 1 -->
    <div id="home" class="text-white">
        <div class="absolute lg:top-5 top-0 z-2 flex w-full">
            <NavBar />
        </div>
        <div class="relative">
            <Slider />
        </div>

        <div class="flex mt-20 lg:mt-50 px-2 absolute lg:top-50 top-25 lg:left-50 left-10 z-1  gap-[15%] w-[90%] ">
            <div>
                <h1 class="lg:text-5xl font-bold uppercase text-2xl">Innovative ideas <br>
                    stylish designs</h1>
                <P class="lg:text-xl text-base  lg:my-10 my-5">Far far away, behind the word mountains, far from the
                    countries Vokalia <br>
                    and
                    Consonantia, there live the blind texts.</P>
                <button
                    class="lg:px-10 lg:py-5 px-5 py-3 border-1 cursor-pointer font-medium text-white border-white  hover:bg-white hover:border-1 hover:text-black ">VIEW
                    PORTFOLIO</button>
            </div>
            <div class="content-center cursor-pointer">
                <i class="fa-solid fa-circle-play lg:text-6xl text-4xl "></i>
            </div>
        </div>
    </div>

    <!-- section 2 -->
<!-- xl:mx-50 lg:mx-10 md:mx-5 -->
    <div id="aboutUs"
        class=" md:mt-2 lg:mb-80 md:mb-35  mb-10  flex flex-col xl:mx-50 lg:mx-10 md:mx-5 mx-0 w-full justify-center mt-8 py-5 ">
        <div class="md:absolute w-full ">

            <img src="/images/architectural-house-interior-1-e1603435656905.jpg" alt="" width="530vw">
        </div>
        <div class="md:relative shadow-2xl xl:w-130 md:w-90  md:left-125 md:top-10 text-center  bg-white px-10 my-20 py-10">
            <h4 class="uppercase md:mb-8 mb-3 text-[#BC9565] text-xl font-medium">/ Welcome to Inner</h4>
            <h1 class="xl:text-5xl text-xl font-medium mb-1 md:mb-15 mt-0 md:py-15 py-5 md:text-3xl">STYLISH DESIGNS, INNOVATIVE IDEAS</h1>
            <p class="mb-8 font-light">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the
                blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language
                ocean.
            </p>
            <Button>READ MORE</Button>
        </div>
        <div class="relative md:top-50 md:right-130 bg-white flex gap-8 h-5 md:h-20 px-7 py-8 bottom-130 md:bottom-0 items-center ">
            <i class="fa-solid fa-circle-play text-5xl  content-center cursor-pointer animate-pulse  opacity-75 "></i>
            <p class="text-xl content-center">Watch VIdeo</p>
        </div>
        <div class="flex gap-10 md:relative md:left-65 md:top-8 text-center items-center justify-center lg:left-10">

            <div class="flex flex-col  gap-3  ">
                <p class="font-medium text-2xl">20 +
                </p>
                <p class="font-light text-[18px]">Years of Experience
                </p>
            </div>
            <div class="flex flex-col gap-3  ">
                <p class=" font-medium text-2xl">1,375 +</p>
                <p class="font-light text-[18px]">Projects Completed</p>
            </div>
        </div>
    </div>

    <!-- section 3 -->
    <div id="services" class="bg-gray-100 py-5 lg:py-30 flex flex-col  gap-2 lg:gap-5 ">
        <div class="flex flex-col lg:flex-row gap-4 justify-center">
            <div class="w-full lg:w-96 h-55 lg:h-70 p-5 lg:p-10 text-center lg:text-left">
                <h1 class="font-bold text-3xl mb-4 lg:mb-8">Our Services</h1>
                <p class="mb-5 lg:mb-8 font-light">Far far away behind the word mountains far from the countries Vokalia
                    and Consonantia
                    there live the blind texts.</p>
                <Button>VIEW ALL</Button>
            </div>
            <CardIcon icon="fa-solid fa-house" title="Residential Design"
                description="We bring the right people together to challenge established thinking and drive transform in 2020" />
            <CardIcon icon="fa-solid fa-wine-glass-empty" title="Restaurant Design"
                description="We bring the right people together to challenge established thinking and drive transform in 2020" />
        </div>
        <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 justify-center">
            <CardIcon icon="fa-solid fa-computer" title="Corporate Design"
                description="We bring the right people together to challenge established thinking and drive transform in 2020" />
            <CardIcon icon="fa-solid fa-hand-holding-dollar" title="Commercial Design"
                description="We bring the right people together to challenge established thinking and drive transform in 2020" />
            <CardIcon icon="fa-solid fa-screwdriver-wrench" title="Industrial Design"
                description="We bring the right people together to challenge established thinking and drive transform in 2020" />
        </div>
    </div>

    <!-- section 4 -->

    <div id="projects" class="mt-16 lg:mt-24">

        <!-- <div class=" text-center mb-16">
            <p class="relative opacity-0 text-9xl text-center mb-10 lg:opacity-5">PORTFOLIO</p>
            <h1 class="uppercase font-medium text-4xl mb-6 absolute lg:top-670 lg:right-115 top-660 z-1">Latest Projects</h1>
            <p class="text-m font-light">Far far away behind the word mountains far from the countries Vokalia <br> and
                Consonantia there live the blind texts.</p>
        </div> -->
        <div class="w-full   h-40  p-3 lg:h-50 text-center font-light ">
            <h1 class="font-semibold text-3xl mb-5 uppercase md:text-4xl">Latest Projects</h1>
            <p class="mb-8 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts.</p>
        </div>
        <div>
            <ul
                class="UPPERCASE md:text-xl text-lg flex flex-col gap-6 md:gap-10 text-center justify-center font-normal items-center md:flex-row">
                <div class="flex gap-8">
                    <li class=" cursor-pointer active:px-8 active:py-4 active:bg-black active:text-white">ALL</li>
                    <li>Residential</li>
                    <li>Corporate</li>
                </div>
                <div class="flex gap-8">
                    <li>Restaurant</li>
                    <li>Commercial</li>
                </div>
            </ul>
        </div>
        <div class="flex flex-col justify-center content-center md:mt-24 mt-10">
            <div class="flex justify-center content-center flex-col lg:flex-row">
                <FilterCard imgsrc="/images/1.png" title="Residential Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/Radaint%20Square%20Tower%20Al%20Reem%20Island/1.png" title="Corporate Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/Mr.%20Francis%20Alfred%20The%20G.M%20of%20Sobha%20Developments/1.png" title="Commercial Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
            </div>
            <div class="flex justify-center content-center flex-col lg:flex-row">

                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/Shura%20Island%20Project%20Red%20Sea/1.png" title="Restaurant Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/Al%20Saadiyat%20Island%20Center%20Of%20Curiosity/1.png" title="Residential Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/Guggenheim%20Museum/1.png" title="Residential Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
            </div>
            <div class="flex justify-center content-center flex-col lg:flex-row">
                <FilterCard imgsrc="https://mirroreng.netlify.app/Property/King%20Salman%20Park/1.png" title="Restaurant Design"
                    description="Far far away behind the word mountains far from the countries Vokalia and Consonantia there live the blind texts." />
            </div>
        </div>
    </div>
    <!-- section 5 -->
    <div class="flex gap-25 justify-center mt-8  flex-col xl:flex-row w-full items-center md:gap-10 xl:my-24 ">

        <div class="w-full xl:w-100 xl:text-left h-45 lg:h-70 p-2 lg:p-5 text-center font-light ">
            <h1 class="font-semibold text-3xl mb-5 uppercase md:text-4xl">Meet our team</h1>
            <p class="mb-8 ">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                large language ocean.</p>
            <Button>VIEW ALL</Button>
        </div>
        <div class="flex flex-col md:flex-row gap-25 xl:gap-10 ">

            <div class="w-full flex  justify-center ">
                <PersonCard imgsrc="/images/aa.jpg" title="Adora Montminy" description="Project Manager" />
            </div>
            <div class="w-full justify-center flex">

                <PersonCard imgsrc="/images/bb.jpg" title="Adeline Palmerston" description="Interior Designer" />
            </div>
        </div>
    </div>

    <!-- section 6 -->

    <div class="mt-32 w-full bg-gray-50 py-8 pl-20 pr-10 md:pl-45 md:py-15S ">
        <div>
            <SliderIcon />
        </div>
    </div>

    <!-- section 7 -->

    <div class=" text-center my-14">
        <h1 class="uppercase font-medium text-2xl mb-6 md:text-4xl ">How We work</h1>
        <p class="text-m font-light">Far far away behind the word mountains far from the countries <br>Vokalia and
            Consonantia there live the blind texts.</p>
    </div>
    <div class="flex flex-col  justify-center gap-10  items-center mb-24 md:flex-row">
        <Num number="01" title="Concept"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />

        <Num number="02" title="Design"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />

        <Num number="03" title="Development"
            description="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
    </div>


    <!-- section 8 -->
    <div class="mt-24 flex flex-col lg:flex-row w-full items-center">
        <div class="w-full lg:w-[50%]">
            <img src=public/images/testimonials.jpg alt="">
        </div>
        <div class="flex flex-col w-full justify-center text-center lg:w-[50%] lg:text-left ">
            <div class=" flex flex-col ml-8 mt-10 w-full lg:w-full items-center lg:items-start lg:ml-12">
                <h1 class="uppercase font-medium text-2xl mb-3 lg:text-4xl ">Testimonials</h1>
                <p class="text-base font-light text">Far far away behind the word mountains far from the countries
                    <br>Vokalia
                    and
                    Consonantia there live the blind texts.</p>
            </div>
            <div class="w-full">
                <SliderPhoto />
            </div>
        </div>
    </div>

    <!-- section 9 -->
    <div id="contact" class="flex flex-col justify-around  gap-5 items-center py-15 bg-black text-white md:flex-row md:px-20">
        <div class=" flex flex-col gap-5 px-15 md:px-5">
            <div>
                <h1 class="font-bold text-xl mb-5 lg:text-3xl">GET IN TOUCH</h1>
                <P class="font-light text-gray-400">Far far away behind the word mountains far from the countries <br>
                    Vokalia and
                    Consonantia
                    there live the blind texts.</P>
            </div>
            <div>
                <h1 class="font-bold text-xl mb-6 lg:text-3xl">Ubud, Bali</h1>
                <ul class=" text-gray-400">
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-phone text-white text-sm mr-1"></i> (+62) 81 2345 1234</li>
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-envelope text-white text-sm mr-1"></i> Contact@domain.com</li>
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-location-dot text-white text-sm mr-1"></i> Jl. Seminyak No.19, Badung,
                        Bali</li>
                </ul>
            </div>
            <div>
                <h1 class="font-bold text-xl mb-6 lg:text-3xl">Denpasar, Bali</h1>
                <ul class=" text-gray-400 ">
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-phone text-white text-sm mr-1"></i> (+62) 81 2345 1234</li>
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-envelope text-white text-sm mr-1"></i> Contact@domain.com</li>
                    <li class="mb-2 hover:text-white cursor-pointer"> <i
                            class="fa-solid fa-location-dot text-white text-sm mr-1"></i>
                        Jl. Niti Mandala, Renon, Bali</li>
                </ul>
            </div>
        </div>

        <div class=" bg-white px-5 py-10 w-[90%] h-130 md:w-150">
            <form action="" class=" flex flex-col gap-5 ">
                <input type="text" placeholder="Your Name"
                    class=" text-black outline-gray-300 outline-1 px-7 py-3 font-light text-left focus:outline-black">
                <input type="text" placeholder="Your Email"
                    class=" text-black outline-gray-300 outline-1 px-7 py-3 font-light focus:outline-black">
                <input type="text" placeholder="Your Subject"
                    class=" text-black outline-gray-300 outline-1 px-7 py-3 font-light focus:outline-black">
                <input type="text" placeholder="Your Message"
                    class=" text-black outline-gray-300 outline-1 pt-5 pl-7 pr-10 pb-30 font-light focus:outline-black">
            </form>
            <button
                class="px-8 py-3 border-1 cursor-pointer font-medium bg-black text-white border-none  hover:bg-white hover:outline-1 hover:border-black hover:text-black mt-5">Send
                Message</button>

        </div>

    </div>
</template>
<script setup>
import CardIcon from '@/components/CardIcon.vue';
import Slider from '@/components/Slider.vue';
import FilterCard from '@/components/FilterCard.vue';
import PersonCard from '@/components/PersonCard.vue';
import SliderIcon from '@/components/SliderIcon.vue';
</script>
<style>
html, body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}

</style>