


<template>
    <div class="bg-black bg-opacity-50 fixed top-0 h-screen z-50 w-full flex items-center justify-center">
        <p class="loader"></p>
    </div>
</template>


<style scoped>
.loader {
  width: 68px !important;
  height: 68px !important;
  border-radius: 50%;
  border-top: 3px solid #8f1e1a !important;
  border-right: 3px solid transparent;
  box-sizing: border-box;
  animation: rotation 0.90s linear infinite;
  position: absolute !important;
  z-index: 1 !important;
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