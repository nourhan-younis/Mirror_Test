<template>
  <div
    id="contact"
    class="flex flex-col justify-around gap-5 items-center py-15 bg-black text-white md:flex-row md:px-20"
  >
    <!-- Contact Info -->
    <div class="flex flex-col gap-5 px-15 md:px-5">
      <div>
        <h1 class="font-bold text-xl mb-5 lg:text-3xl">GET IN TOUCH</h1>
        <p class="font-light text-gray-400">
          Connect with MIRROR — Your Next Smart Project Starts Here.
        </p>
      </div>
      <div>
        <h1 class="font-bold text-xl mb-6 lg:text-3xl">DUBAI, UAE</h1>
        <ul class="text-gray-400">
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-phone text-white text-sm mr-1"></i>
            +971567482367
          </li>
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-envelope text-white text-sm mr-1"></i>
            cs@mirrorengineering.com
          </li>
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-location-dot text-white text-sm mr-1"></i>
            Burj Al Salam – 12nd Floor – Sheikh Zayed Rd – Trade Centre 1 - Dubai
          </li>
        </ul>
      </div>
      <div>
        <h1 class="font-bold text-xl mb-6 lg:text-3xl">Cairo, Egypt</h1>
        <ul class="text-gray-400">
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-phone text-white text-sm mr-1"></i>
            +20 1019484248
          </li>
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-envelope text-white text-sm mr-1"></i>
            cs@mirrorengineering.com
          </li>
          <li class="mb-2 hover:text-white cursor-pointer">
            <i class="fa-solid fa-location-dot text-white text-sm mr-1"></i>
            S Teseen, New Cairo 1, Cairo Governorate 4730401, Egypt
          </li>
        </ul>
      </div>
    </div>

    <!-- Contact Form -->
    <div class="bg-white px-5 py-10 w-[90%] md:w-[500px] rounded-lg shadow-md">
      <form @submit.prevent="handleSubmit" class="flex flex-col gap-5">
        <input
          v-model="form.name"
          type="text"
          placeholder="Your Name"
          class="text-black border border-gray-300 px-7 py-3 font-light focus:border-black"
        />
        <input
          v-model="form.email"
          type="email"
          placeholder="Your Email"
          class="text-black border border-gray-300 px-7 py-3 font-light focus:border-black"
        />
        <input
          v-model="form.subject"
          type="text"
          placeholder="Your Subject"
          class="text-black border border-gray-300 px-7 py-3 font-light focus:border-black"
        />
        <textarea
          v-model="form.message"
          placeholder="Your Message"
          rows="5"
          class="text-black border border-gray-300 px-7 py-3 font-light focus:border-black"
        ></textarea>

        <button
          type="submit"
          :disabled="loading"
          class="px-8 py-3 border border-black font-medium bg-black text-white hover:bg-white hover:text-black transition-colors"
        >
          {{ loading ? 'Sending...' : 'Send Message' }}
        </button>

        <!-- Success/Error Messages -->
        <p v-if="success" class="text-green-600 font-medium mt-2">
          ✅ Message sent successfully!
        </p>
        <p v-if="error" class="text-red-600 font-medium mt-2">
          ⚠️ {{ error }}
        </p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const loading = ref(false)
const success = ref(false)
const error = ref('')

const config = useRuntimeConfig()
const apiUrl = process.dev ? config.public.apiBaseLocal : config.public.apiBaseProd

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

const handleSubmit = async () => {
  error.value = ''
  success.value = false

  if (!form.value.name || !form.value.email || !form.value.subject || !form.value.message) {
    error.value = 'Please fill in all fields.'
    return
  }

  if (!validateEmail(form.value.email)) {
    error.value = 'Please enter a valid email address.'
    return
  }

  loading.value = true

  try {
    const response = await fetch(`${apiUrl}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    })

    if (!response.ok) throw new Error('Failed to send message')

    success.value = true
    form.value = { name: '', email: '', subject: '', message: '' }
  } catch (err) {
    error.value = 'Something went wrong. Please try again.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// ✅ INDIVIDUAL FIELD WATCHERS
watch(() => form.value.name, () => {
  if (form.value.name && error.value === 'Please fill in all fields.') error.value = ''
})

watch(() => form.value.subject, () => {
  if (form.value.subject && error.value === 'Please fill in all fields.') error.value = ''
})

watch(() => form.value.message, () => {
  if (form.value.message && error.value === 'Please fill in all fields.') error.value = ''
})

watch(() => form.value.email, () => {
  if (form.value.email && error.value === 'Please fill in all fields.') {
    error.value = ''
  }
  if (validateEmail(form.value.email) && error.value === 'Please enter a valid email address.') {
    error.value = ''
  }
})


</script>
