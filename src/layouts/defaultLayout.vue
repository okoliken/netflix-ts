<script lang="ts" setup>
import { useAuth } from '../composable/auth'
import Navbar from '../components/Navbar.vue'
// @ts-ignore
import Logo from '../assets/netflix-logo-png-2584.png'
const { logout } = useAuth()
</script>

<template>
  <div class="relative">
    <header class="absolute w-full z-[9999999]">
      <Navbar>
        <template #movieBanner>
          <img :src="Logo" alt="" class="w-32 object-contain" />
          <ul>
            <li>
              <button @click="logout" class="btn btn-primary text-white normal text-xs lg:text-lg">Log out</button>
            </li>
          </ul>
        </template>
      </Navbar>
    </header>
    <slot></slot>
  </div>
</template>

