<script setup lang="ts">
import axios from 'axios'

import MoviePoster from './MoviePoster.vue'
import { useQuery } from "vue-query";
import  {fetchTmdbMovies} from '../../composable/index'
const { title, requests } = defineProps(['title', 'requests'])



const  { data } = useQuery(title,()=> fetchTmdbMovies(requests))


</script>
 
<template>
  <p class="text-white font-semibold px-4 md:px-2 leading-5 text-2xl md:text-2xl pt-5">
    {{ title }}
  </p>
  <div class="py-5 px-4 md:px-2">
    <MoviePoster :title="title" :movie="data" />
  </div>
</template>
