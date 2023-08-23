<template>
  <div class="flex items-center justify-between">
    <router-link to="/">
      <img src="../assets/netflix-logo-png-2584.png" alt="" class="w-24 hidden md:block" />
    </router-link>
    <router-link to="/">
      <img src="../assets/netflix-logo-png-2616.png" alt="" class="w-14 block md:hidden" />
    </router-link>
    <!-- <span class="material-symbols-sharp"> close </span> -->
    <button class="text-white" @click="$emit('close')">Close</button>
  </div>
</template>
