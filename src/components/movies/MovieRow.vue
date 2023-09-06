<script setup lang="ts">
import {watch} from 'vue'
import MoviePoster from './MoviePoster.vue'
import { useQuery } from "vue-query";
import  {fetchTmdbMovies, state} from '../../composable/index'
const { title, requests } = defineProps(['title', 'requests'])



const  { data, isLoading, isFetching } = useQuery(title,() => fetchTmdbMovies(requests))

watch(isLoading,() => {
 return state.isLoading = isFetching.value
})

</script>
 
<template>
  <p class="text-white font-semibold px-4 md:px-2 leading-5 text-2xl md:text-2xl pt-5">
    {{ title }}
  </p>
  <div class="py-5 px-4 md:px-2">
    <MoviePoster :title="title" :movie="data" />
  </div>
</template>
