<script setup lang="ts">
import axios from 'axios'

import { ref, reactive } from 'vue'

import MoviePoster from './MoviePoster.vue'

const { title, requests } = defineProps(['title', 'requests'])

let tmdbMovie = reactive<any>([])

const errMessage = ref('')

const fetchTmdbMovies = async () => {
  try {
    const res = await axios.get(requests)
    tmdbMovie = res.data
    return res
  } catch (error) {
    errMessage.value = `No ${title} available... check your Internet Connection.`
  }
}

fetchTmdbMovies()
</script>

<template>
  <p class="text-white font-semibold px-4 md:px-2 leading-5 text-2xl md:text-2xl pt-5">
    {{ title }}
  </p>
  <div v-if="tmdbMovie?.results" class="py-5 px-4 md:px-2">
    <MoviePoster :movie="tmdbMovie.results" />
  </div>
</template>

<style scoped>
.poster {
  max-height: 300px;
  margin-right: 10px;
  transition: transform 450ms;
}

.poster:hover {
  transform: scale(1.08);
  cursor: pointer;
}

.scroll-hidden::-webkit-scrollbar {
  display: none;
}

@media (min-width: 500px) {
  .scroll-hidden::-webkit-scrollbar {
    display: block;
    background-color: #333;
    height: 14px;
    border-radius: 50px;
  }

  .scroll-hidden::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 50px;
  }
}

.lazy--img {
  animation: fade-in 1s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
