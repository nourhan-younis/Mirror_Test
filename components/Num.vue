<template>
    <div class="w-[90%] text-center md:w-80">
<p class="text-8xl opacity-10 border-black-1 mb-3">{{ number }}</p>
<h1 class="font-semibold text-2xl mb-3">{{ title }}</h1>
<p class="text-[15px] font-light ">{{ description }}</p>
    </div>
</template>
<script setup>
defineProps({
    number:String,
    title:String,
    description:String,
})
</script>