<script lang="ts" setup>
import RootLayout from './layouts/rootLayout.vue'

import {  type ProgressFinisher, useProgress } from '@marcoschulte/vue3-progress';
import { useRouter } from 'vue-router'
const progresses = [] as ProgressFinisher[];
const router = useRouter()

router.beforeEach((to, from, next) => {
  progresses.push(useProgress().start());

  next()
})

router.afterEach(() => {
  progresses.pop()?.finish();
})



</script>

<template>
  <vue3-progress-bar></vue3-progress-bar>
  <RootLayout>
    <router-view />
  </RootLayout>
</template>



<style>
body {
  font-family: 'Merriweather Sans', sans-serif;
}

body::-webkit-scrollbar {
  display: block;
  background-color: #333;
  width: 5px;
}

body::-webkit-scrollbar-thumb {
  background-color: #b91c1c;
  border-radius: 50px;
}

.my-custom-class {
  background-color: #b91c1c;
  color: #fff;
}
</style>