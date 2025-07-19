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
    <div class="flex gap-25 justify-center mt-8  flex-col xl:flex-row w-full items-center md:gap-10 xl:my-24 ">

        <div class="w-full xl:w-100 xl:text-left h-45 lg:h-70 p-2 lg:p-5 text-center font-light ">
            <h1 class="font-semibold text-3xl mb-5 uppercase md:text-4xl">Meet our team</h1>
            <p class="mb-8 ">Our People Are Our Strength — Meet the Passionate Professionals at MIRROR.
</p>
            <!-- <Button>VIEW ALL</Button> -->
        </div>
        <div class="flex flex-col md:flex-row gap-25 xl:gap-10 ">

            <div class="w-full flex  justify-center ">
                <PersonCard 
                 v-for="(person,index) in person1"
                :key="index"
                :imgsrc="person.imgsrc"
                :title="person.title"
                :description="person.description"
                />
            </div>
            <div class="w-full justify-center flex">

              <PersonCard 
                v-for="(person,index) in person2"
                :key="index"
                :imgsrc="person.imgsrc"
                :title="person.title"
                :description="person.description"
                />
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
<HowSection/>


    <!-- section 8 -->
    <div class="mt-24 flex flex-col lg:flex-row w-full items-center">
        <div class="w-full lg:w-[50%]">
            <img src=/images/interior/24.jpg alt="">
        </div>
        <div class="flex flex-col w-full justify-center text-center lg:w-[50%] lg:text-left ">
            <div class=" flex flex-col ml-8 mt-10 w-full lg:w-full items-center lg:items-start lg:ml-12">
                <h1 class="uppercase font-medium text-2xl mb-3 lg:text-4xl ">Testimonials</h1>
                <p class="text-base font-light text">Far far away behind the word mountains far from the countries
                    <br>Vokalia
                    and
                    Consonantia there live the blind texts.
                </p>
            </div>
            <div class="w-full my-10">
                <SliderPhoto />
            </div>
        </div>
    </div>

    <!-- section 9 -->
    <ContactSection />
</template>

<script setup>
const person1=[
    {
        imgsrc:"/images/persons/Picture1.jpg",
        title:"Mostafa Etman",
        description:"BIM Manager"
    }
]

const person2=[
    {
        imgsrc:"/images/persons/Picture2.png",
        title:"Amr Mohamed",
        description:"Technical Manager"
    }
]

</script>

<style>
html,
body {
    overflow-x: hidden;
    scroll-behavior: smooth;
}
</style>