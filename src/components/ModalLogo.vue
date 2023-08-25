<template>
  <div class="flex items-center justify-between">
    <router-link class="w-24 hidden md:block" to="/">
      <img src="../assets/netflix-logo-png-2584.png" alt="logo"  />
    </router-link>
    <router-link class="w-14 block md:hidden" to="/">
      <img src="../assets/netflix-logo-png-2616.png" alt="logo"  />
    </router-link>

    <button @click="$emit('close')" class="btn btn-circle btn-outline">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
