
<script setup lang="ts">
import { useAuth } from '../composable/auth'
import Button from '../components/Button.vue'
import { ref, computed } from 'vue'
const { email, password, signup, loading, name } = useAuth()

const offOn = ref(false)
const iconType = computed(() => {
  return offOn.value === true ? 'ri-eye-line' : 'ri-eye-off-line'
})
</script>


<template>
  <div class="flex items-center justify-center h-screen lg:h-full w-full  lg:pt-0 bg-black lg:bg-transparent">
    <div class="bg-black  lg:bg-opacity-80 w-full max-w-md h-screen lg:h-[80vh] lg:py-4 lg:px-8 lg:rounded-lg">
      <form @submit.prevent="signup(email, password, name)" class="p-4 lg:p-8 mt-32 lg:mt-0 !w-full">
        <h3 class="text-[32px] font-medium lg:mb-[28px] text-white">Sign Up</h3>

        <div class="mt-12">
          <div class="mb-6">
            <input v-model="name" type="text" required placeholder="Enter username"
              class="input input-bordered w-full max-w-full !outline-none !bg-[#333] !rounded !border-none" />
          </div>
          <div class="mb-6">
            <input v-model="email" type="email" required placeholder="Email address"
              class="input input-bordered w-full max-w-full !outline-none !bg-[#333] !rounded !border-none" />
          </div>
          <div class="mb-4 relative">
            <input v-model="password" required :type="offOn ? 'text' : 'password'" placeholder="Password"
              class="input input-bordered w-full max-w-full !outline-none !bg-[#333] !rounded !border-none" />
            <i @click="offOn = !offOn" :class="iconType" class="absolute right-5 top-3 cursor-pointer"></i>
          </div>
        </div>
        <Button :loading="loading">
          Sign Up
        </Button>

        <div class="mt-16 text-center">
          <p class="!font-light text-[#737373] text-[16px]">Already have an account?
            <router-link to="/auth/login">
              <span class="text-white hover:underline">Sign In</span>
            </router-link>
          </p>

          <p class="text-center mt-7 text-[#737373] text-xs">
            This endeavor aimed to replicate the beloved features of the popular streaming platform, while also adding some unique touches.
          </p>
        </div>
      </form>
    </div>
  </div>
</template>
