<script setup>
const links = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
]

const socialIcons = [
  { icon: 'pi pi-facebook', href: '#' },
  { icon: 'pi pi-twitter', href: '#' },
  { icon: 'pi pi-instagram', href: '#' },
  { icon: 'pi pi-linkedin', href: '#' },
]
</script>

<template>
  <footer class="bg-gray-800 text-white py-12 px-4">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-2" data-aos="fade-right" data-aos-delay="200">
          <h3 class="text-2xl font-bold mb-4">Your Brand</h3>
          <p class="text-gray-400">
            Making the world a better place through technology and innovation.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in links" :key="link.name">
              <a :href="link.href" class="text-gray-400 hover:text-white transition">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div data-aos="fade-left" data-aos-delay="600">
          <h4 class="text-lg font-semibold mb-4">Connect With Us</h4>
          <div class="flex space-x-4">
            <a
              v-for="social in socialIcons"
              :key="social.icon"
              :href="social.href"
              class="text-gray-400 hover:text-white transition text-xl"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Your Brand. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
