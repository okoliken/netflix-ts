<script setup lang="ts">
import axios from 'axios'
import { ref } from 'vue'
import MoviePoster from './MoviePoster.vue'
import { useQuery } from "vue-query";
const { title, requests } = defineProps(['title', 'requests'])

const fetchTmdbMovies = async () => {
    const res = await axios.get(requests)
    return res.data?.results
}

const  { data } = useQuery(title, fetchTmdbMovies)


</script>
 
<template>
  <p class="text-white font-semibold px-4 md:px-2 leading-5 text-2xl md:text-2xl pt-5">
    {{ title }}
  </p>
  <div class="py-5 px-4 md:px-2">
    <MoviePoster :movie="data" />
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
