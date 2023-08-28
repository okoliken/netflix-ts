<script setup lang="ts">
const { loading } = defineProps(['loading'])
</script>

<template>
  <div>
    <button class="btn btn-primary w-full mt-7 !font-bold !rounded !capitalize ">
    
        <span v-if="loading" class="loader"></span>
    
      <slot v-if="!loading"></slot>
    </button>
  </div>
</template>

<style>
.loader {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: inline-block;
  border-top: 3px solid #FFF;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>
