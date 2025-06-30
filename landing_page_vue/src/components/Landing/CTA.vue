<script setup>
import { ref } from 'vue'

const email = ref('')
</script>

<!-- <template>
  <section class="py-16 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">Join thousands of satisfied customers today</p>

      <div class="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
        <prime_input_text
          v-model="email"
          placeholder="Enter your email"
          type="email"
          class=" flex-grow"
        />
        <prime_button
          label="Sign Up Free"
          class=" p-button-rounded"
        />
      </div>
    </div>
  </section>
</template> -->
<template>
  <section class="py-16 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
    <div class="container mx-auto text-center">
      <h2 class="text-3xl font-bold mb-4" data-aos="fade-down" data-aos-delay="200">
        Ready to Get Started?
      </h2>

      <p class="text-xl mb-8 max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay="400">
        Join thousands of satisfied customers today
      </p>

      <div
        class="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto"
        data-aos="zoom-in-up"
        data-aos-delay="600"
      >
        <prime_input_text
          v-model="email"
          placeholder="Enter your email"
          type="email"
          class="flex-grow"
        />
        <prime_button label="Sign Up Free" class="p-button-rounded" />
      </div>
    </div>
  </section>
</template>
