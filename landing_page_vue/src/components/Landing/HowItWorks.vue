<script setup>
const steps = [
  {
    number: '1',
    title: 'Sign Up',
    description: 'Create your account in just 30 seconds',
  },
  {
    number: '2',
    title: 'Configure',
    description: 'Set up your preferences and settings',
  },
  {
    number: '3',
    title: 'Enjoy',
    description: 'Start using our product immediately',
  },
]
</script>

<template>
  <section class="py-16 px-4">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>

      <div class="flex flex-col md:flex-row items-center justify-between gap-8">
        <div v-for="(step, index) in steps" :key="step.number">
          <div
            class="flex flex-col items-center text-center max-w-xs"
            :data-aos="'fade-up'"
            :data-aos-delay="index * 200"
          >
            <div
              class="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold mb-4"
            >
              {{ step.number }}
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ step.title }}</h3>
            <p class="text-gray-600">{{ step.description }}</p>
          </div>

          <div
            v-if="index < steps.length - 1"
            class="hidden md:block"
            style="display: flex; width: 100%; justify-content: center"
          >
            <i class="pi pi-arrow-right text-2xl text-gray-400"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
