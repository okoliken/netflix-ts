<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import request from '../../request'

// @ts-ignore
import Play  from  '../../assets/YouTube-Icon-Full-Color-Logo.wine.png'
const { movie } = defineProps(['movie'])

const base_url = 'https://image.tmdb.org/t/p/original/'
const api = ref(request.fetchVideos)
const breakpoints = reactive({
  300: {
    itemsToShow: 2
  },
  400: {
    itemsToShow: 3.5,
    snapAlign: 'center'
  },
  700: {
    itemsToShow: 4,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 5
  }
})
</script>
<template>
  <Carousel
    :breakpoints="breakpoints"    
    :transition="800"
  >
    <Slide v-for="slide in movie" :key="slide.id">
      <div
        class="carousel__item relative hover--show__overlay flex flex-col items-center justify-center"
      >
        <v-lazy-image
          class="w-full object-contain cursor-pointer bg-black lazy--img"
          :src="`${base_url}${slide.poster_path}`"
          :alt="slide.name"
        />
        <div
          
          class="absolute cursor-pointer z-40 w-full play-overlay h-full bg-black bg-opacity-30 flex items-center justify-center"
        >
          <img
            class="w-28 mt-24 ml-8 lg:mt-28 lg:ml-10 xl:ml-16 xl:mt-32"
            :src="Play"
            alt=""
          />
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>


<style scoped>


</style>
