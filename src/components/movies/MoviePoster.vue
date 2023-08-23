<script setup lang="ts">
import { useQuery } from "vue-query";
import { reactive } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

import {getMovieTrailer} from '../../composable/index'
import 'vue3-carousel/dist/carousel.css'
// @ts-ignore

const { movie, title } = defineProps(['movie', 'title'])
const base_url = 'https://image.tmdb.org/t/p/original/'

const breakpoints = reactive({
  300: {
    itemsToShow: 2
  },
  400: {
    itemsToShow: 4.5,
    snapAlign: 'center'
  },
  700: {
    itemsToShow: 5,
    snapAlign: 'center'
  },
  1024: {
    itemsToShow: 6.90,
    snapAlign: 'center'
  }
})

// function fetchData(id:string) {
//   const queryKey = [title, id];
//   const result = useQuery(queryKey, () => getMovieTrailer(id));

//   console.log(result)
// }

</script>
<template>
  <Carousel
    :breakpoints="breakpoints"    
    :transition="800"
    :wrapAround="true"
  >
    <Slide v-for="slide in movie" :key="slide.id">
      <div
        class="carousel__item relative hover--show__overlay flex flex-col items-center justify-center h-full"
      >
        <v-lazy-image
          @click="getMovieTrailer(slide.id)"
          class="w-full object-contain cursor-pointer bg-black lazy--img rounded-md"
          :src="`${base_url}${slide.poster_path}`"
          :alt="slide.name"
        />
        <div
          @click="getMovieTrailer(slide.id)"
          class="absolute cursor-pointer z-40 w-full play-overlay h-full bg-black bg-opacity-30 flex items-center justify-center"
        >
        </div>
      </div>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

