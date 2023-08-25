<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Navbar from '../components/Navbar.vue'
// @ts-ignore
import Play from '../assets/netflix-logo-png-2584.png'
const isSticky = ref(false)

onMounted(()=> {
    window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      isSticky.value = true
    } else isSticky.value = false
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', () => (isSticky.value = false))
})
</script>

<template>
  <div class="relative">
    <header
    class="absolute w-full z-[9999999]"
     
    >
      <Navbar>
        <template #movieBanner>
          <img :src="Play" alt="" class="w-32 object-contain" />

          <ul>
            <li>
           
              <button class="btn btn-primary text-white normal text-xs lg:text-lg">Log out</button>
            </li>
          </ul>
        </template>
      </Navbar>
    </header>
    <slot></slot>
  </div>
</template>

