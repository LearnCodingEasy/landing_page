<!-- <script setup>
import { ref, onMounted } from 'vue'

const features = [
  {
    title: 'Feature One',
    icon: 'pi pi-check-circle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Feature Two',
    icon: 'pi pi-bolt',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'Feature Three',
    icon: 'pi pi-lock',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
]

const animated = ref(false)

onMounted(() => {
  animated.value = true
})
</script>

<template>
  <section class="py-16 px-4 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <prime_card
          v-for="(feature, index) in features"
          :key="feature.title"
          class="animate__animated"
          data-aos="fade-up"
        >
          <template #header>
            <i
              :class="[feature.icon, 'text-4xl text-center text-blue-500 my-4']"
              style="display: flex; justify-content: center; font-size: 30px"
            ></i>
          </template>
          <template #title>{{ feature.title }}</template>
          <template #content>
            <p class="text-gray-600">{{ feature.description }}</p>
          </template>
        </prime_card>
      </div>
    </div>
  </section>
</template> -->

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const features = [
  {
    title: 'Feature One',
    icon: 'pi pi-check-circle',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Feature Two',
    icon: 'pi pi-bolt',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore.',
  },
  {
    title: 'Feature Three',
    icon: 'pi pi-lock',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
  },
]

onMounted(() => {
  AOS.init({
    once: false,
    duration: 800,
    offset: 120,
  })
})
</script>

<template>
  <section class="py-16 px-4 bg-gray-50">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">Key Features</h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <prime_card
          v-for="(feature, index) in features"
          :key="feature.title"
          class="shadow-lg rounded-lg"
          data-aos="fade-up"
          :data-aos-delay="index * 200"
        >
          <template #header>
            <i
              :class="[feature.icon, 'text-4xl text-center text-blue-500 my-4']"
              style="display: flex; justify-content: center; font-size: 30px"
            ></i>
          </template>
          <template #title>{{ feature.title }}</template>
          <template #content>
            <p class="text-gray-600">{{ feature.description }}</p>
          </template>
        </prime_card>
      </div>
    </div>
  </section>
</template>
