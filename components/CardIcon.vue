<template>
    <div class="w-full h-60 lg:w-95 lg:h-70 bg-white p-12 hover:bg-[url('/images/SEGXBSE.jpg')] hover:bg-cover hover:bg-center group hover:text-white cursor-pointer">
        <div>
<i :class="['text-[#BC9565]','group-hover:text-white', 'text-3xl','xl:text-4xl', 'mb-6' ,'lg:mb-8', icon]"></i>

        </div>
        <div>
            <h1 class="font-medium text-xl xl:text-3xl  mb-6 lg:mb-8">{{title}}</h1>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    icon:String,
    title:String,
   description:String
})
</script>