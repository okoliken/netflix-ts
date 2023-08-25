<template>
  <div class="ntf-bg">
    <img
      class="w-24 lg:w-[13rem] transform -translate-y-5 translate-x-4 hidden md:block absolute"
      src="../assets/netflix-logo-png-2584.png"
      alt="logo"
    />
    <slot></slot>
  </div>
</template>

<style>
.ntf-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.53), rgba(0, 0, 0, 0.53)),
    url('../assets/netflix-s.avif');
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
