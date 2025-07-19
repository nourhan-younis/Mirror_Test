<template>
  <div id="aboutUs" class="w-full px-4 py-10 bg-white flex flex-col lg:flex-row items-center justify-center gap-10">
  
    <div class="w-full lg:w-1/2 relative flex justify-center">
      <img
        src="/images/interior/40.jpg"
        alt="Interior"
        class="rounded-xl w-full max-w-[550px] h-auto object-cover shadow-lg"
      />
      <div class="absolute bottom-4 left-16 flex items-center gap-3 bg-white bg-opacity-90 px-4 py-2 rounded-lg shadow-md">
        <i class="fa-solid fa-circle-play text-2xl text-black animate-pulse cursor-pointer opacity-80"></i>
        <p class="text-sm font-medium text-black">Watch Video</p>
      </div>
    </div>
    <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <div class="bg-white shadow-xl rounded-xl px-6 py-8 sm:px-10 sm:py-10 max-w-[600px]">
        <h4 class="uppercase text-[#BC9565] text-sm sm:text-base font-medium mb-3">/ Welcome to mirror</h4>
        <h1 class="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-6">
          Where Innovation Reflects Precision
        </h1>
        <p class="text-sm sm:text-base font-light mb-6 whitespace-pre-line">
          {{ showMore ? fulltext : shortText }}
        </p>

        <button
          @click="toggleText"
          class="px-6 py-2 border border-black text-white bg-black hover:bg-white hover:text-black transition-all text-sm sm:text-base rounded-full"
        >
          {{ showMore ? 'READ LESS' : 'READ MORE' }}
        </button>
      </div>
      <div class="flex flex-col sm:flex-row gap-6 justify-center text-center mt-10">
        <div>
          <p class="text-2xl font-semibold">10+</p>
          <p class="text-sm md:text-base font-light">Years of Experience</p>
        </div>
        <div>
          <p class="text-2xl font-semibold">135</p>
          <p class="text-sm md:text-base font-light">Projects Completed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fulltext = `At MIRROR, we don’t just model structures — we engineer the future.
Rooted in the heart of the Middle East, we are a forward-thinking Engineering and BIM solutions company dedicated to transforming how projects are designed, delivered, and experienced.
With a focus on smart technology, accuracy, and speed, we provide integrated BIM services and structural engineering support tailored to meet the demands of today’s fast-paced construction landscape. Whether it’s a high-rise in Dubai, an industrial plant in Riyadh, or a mixed-use development across the GCC, our team brings deep regional knowledge, global standards, and a tech-first mindset to every project.
We specialize in:
Advanced BIM Modeling: From concept to construction, we create intelligent 3D models that ensure clarity, coordination, and clash-free execution.
Structural Engineering: Precision-driven designs for resilient, efficient, and code-compliant structures.
Project Optimization: Saving time, reducing waste, and enabling better decision-making through data-rich digital workflows.
At MIRROR, sustainability isn’t an afterthought — it’s part of the process. Our solutions help stakeholders reduce rework, optimize materials, and build smarter with long-term value in mind.
Let’s build tomorrow — faster, smarter, and more sustainably.
Welcome to MIRROR — your partner in next-generation engineering and BIM excellence.`

const shortText = `At MIRROR, we don’t just model structures — we engineer the future.
Rooted in the heart of the Middle East, we are a forward-thinking Engineering and BIM solutions company...`

const showMore = ref(false)
const toggleText = () => (showMore.value = !showMore.value)
</script>
