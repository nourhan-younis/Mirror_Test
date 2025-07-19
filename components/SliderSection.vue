<template>
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
                <P class="lg:text-xl text-base  lg:my-10 my-5">
                    Accelerating Construction with smart BIM & Fast-Track Engineering - Built for Accuracy, Designed for progress .
                </P>
                <NuxtLink to="/portfolio"
                    class="lg:px-10 lg:py-5 px-5 py-3 border-1 cursor-pointer font-medium text-white border-white  hover:bg-white hover:border-1 hover:text-black ">VIEW
                    PORTFOLIO</NuxtLink>
            </div>
            <div class="content-center cursor-pointer">
                <i class="fa-solid fa-circle-play lg:text-6xl text-4xl "></i>
            </div>
        </div>
    </div>
</template>