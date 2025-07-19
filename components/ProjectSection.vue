<template>
  <div id="projects" class="mt-16 lg:mt-24 px-4 lg:px-16">
    <div class="text-center mb-10">
      <h1 class="font-semibold text-3xl mb-5 uppercase md:text-4xl">Latest Projects</h1>
      <p class="text-base font-light max-w-2xl mx-auto">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind
        texts.
      </p>
    </div>
    <div class="flex flex-wrap justify-center gap-4 mb-10 uppercase text-base md:text-lg font-medium list-none ">
      <li class="cursor-pointer px-4 py-2 rounded-full  hover:bg-black hover:text-white">All</li>
      <li class="cursor-pointer px-4 py-2 rounded-full  hover:bg-black hover:text-white">Residential</li>
      <li class="cursor-pointer px-4 py-2 rounded-full  hover:bg-black hover:text-white">Corporate</li>
      <li class="cursor-pointer px-4 py-2 rounded-full  hover:bg-black hover:text-white">Restaurant</li>
      <li class="cursor-pointer px-4 py-2 rounded-full  hover:bg-black hover:text-white">Commercial</li>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FilterCard v-for="(project, index) in [...row1, ...row2]" :key="index" :imgsrc="project.imgsrc"
        :title="project.title" :description="project.description" />
    </div>
  </div>
</template>

<script setup>
const row1 = [
  {
    imgsrc: "/images/projects/pro1.png",
    title: "TRIPLE BAY MARINA VILLAGE BOUTIQUE HOTEL",
    description: "Red Sea , KSA"
  },
  {
    imgsrc: "/images/projects/pro2.png",
    title: "RADIANT SQUARE TOWERS",
    description: "Reem Island , Abu Dhabi, UEA"
  },
  {
    imgsrc: "/images/projects/pro3.png",
    title: "RESIDENTIAL VILLA FOR THE MD OF SOBHA",
    description: "Sobha Heart Land II, Dubai, UEA"
  }
]

const row2 = [
  {
    imgsrc: "/images/projects/pro4.png",
    title: "SHURA ISLAND",
    description: "Red Sea , KSA"
  },
  {
    imgsrc: "/images/projects/pro5.png",
    title: "CENTRE OF CURIOSITY",
    description: "Saadiyat Island , Abu Dhabi, UEA"
  },
  {
    imgsrc: "/images/projects/pro6.png",
    title: "GUGGENHIEM ABU DHABI",
    description: "Saadiyat Island , Abu Dhabi, UEA"
  }
]
</script>
