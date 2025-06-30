<script setup>
import HeroSection from '@/components/Landing/HeroSection.vue'
import FeaturesSection from '@/components/Landing/FeaturesSection.vue'
import HowItWorks from '@/components/Landing/HowItWorks.vue'
import CTA from '@/components/Landing/CTA.vue'
import Footer from '@/components/Landing/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeroSection />
    <FeaturesSection />
    <HowItWorks />
    <CTA />
    <Footer />
  </div>
</template>
