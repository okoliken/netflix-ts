<template>
  <div class="flex items-center justify-between">
    <router-link to="/">
      <img src="../assets/netflix-logo-png-2584.png" alt="" class="w-32 hidden md:block" />
    </router-link>
    <router-link to="/">
      <img src="../assets/netflix-logo-png-2616.png" alt="" class="w-16 block md:hidden" />
    </router-link>
    <!-- <span class="material-symbols-sharp"> close </span> -->
    <button class="text-white" @click="$emit('close', false)">Close</button>
  </div>
</template>
