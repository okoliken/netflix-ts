<template>
  <div class="ntf-bg">
    <div class="container mx-auto">
      <img
      class="w-32 lg:w-[12rem] transform -translate-y-5 translate-x-4 block absolute mt-12 lg:mt-0"
      src="../assets/netflix-logo-png-2584.png"
      alt="logo"
    />
    </div>
    <slot></slot>
  </div>
</template>

<style>
.ntf-bg {
  background-image: none;
}

@media (min-width: 800px) {
  .ntf-bg{
    background-image: linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)),
    url('../assets/netflix-s.avif');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  }
}
</style>
