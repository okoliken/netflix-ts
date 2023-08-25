<script lang="ts" setup>
import RootLayout from './layouts/rootLayout.vue'
</script>

<template>
  <RootLayout>
     <router-view />
  </RootLayout> 
</template>


<style>

body::-webkit-scrollbar {
  display: block;
  background-color: #333;
  width: 5px;
}
body::-webkit-scrollbar-thumb {
  background-color: #b91c1c;
  border-radius: 50px;
}
.my-custom-class{
  background-color: #b91c1c;
  color: #fff; 
}
</style>