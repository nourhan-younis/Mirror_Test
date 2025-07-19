<template>
  <section class="py-20 px-4 md:px-20 bg-gray-100">
    <div class="mb-12">
      <DetailsSlider />
    </div>

    <!-- Details Box -->
    <div class="bg-white rounded-3xl shadow-md p-6 md:p-12 w-full max-w-5xl mx-auto">
      <div class="mb-6">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-[#BC9565]">{{ title }}</h1>
        <p class="text-base md:text-lg text-gray-600">{{ description }}</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p class="font-semibold text-lg mb-1">📍 Location</p>
          <p class="text-gray-700">{{ location }}</p>
        </div>
        <div>
          <p class="font-semibold text-lg mb-1">🏷️ Client</p>
          <p class="text-gray-700">{{ client }}</p>
        </div>
        <div>
          <p class="font-semibold text-lg mb-1">💰 Cost</p>
          <p class="text-gray-700">{{ cost }}</p>
        </div>
        <div>
          <p class="font-semibold text-lg mb-1">🕒 Time</p>
          <p class="text-gray-700">{{ time }}</p>
        </div>
        <div class="md:col-span-2">
          <p class="font-semibold text-lg mb-1">📌 Scope</p>
          <p class="text-gray-700">{{ scope }}</p>
        </div>
                <div class="md:col-span-2">
          <p class="font-semibold text-lg mb-1">📌 Description</p>
          <p class="text-gray-700">{{ description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: String,
  location: String,
  description: String,
  client: String,
  cost: String,
  time: String,
  scope: String,
  description: String
})
</script>

<style scoped>
body {
  background-color: rgb(233, 235, 235);
}
</style>
