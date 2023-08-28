<script setup lang="ts">
// @ts-ignore

import { loading, state } from '../composable/index'
import MovieRow from '../components/movies/MovieRow.vue'
import MovieBanner from '../components/movies/MovieBanner.vue'
import requests from '../request'
import MovieTrailer from '../components/movies/MovieTrailer.vue'
// @ts-ignore

import Spinner from '../components/spinner.vue'



</script>

<template>
  <MovieBanner />
  <Spinner v-if="loading" />

  <div class="container mx-auto">
    <!-- <MovieRow title="Now Playing" :requests="requests.fetchingNowPlaying" /> -->
    <MovieRow title="NETFLIX ORIGINALS" :requests="requests.fetchNetflixOriginals" />
    <MovieRow title="Trending Now" :requests="requests.fetchingTrending" />
    <MovieRow title="Top Rated" :requests="requests.fetchTopRated" />
    <MovieRow title="Action Movies" :requests="requests.fetchActionMovies" />
    <MovieRow title="Comedy Movies" :requests="requests.fetchComedyMovies" />
    <MovieRow title="Horror Movies" :requests="requests.fetchHorrorMovies" />
    <MovieRow title="Romantic Movies" :requests="requests.fetchRomanceMovies" />
    <MovieRow title="Documentaries" :requests="requests.fetchDocumentaries" />

    <transition  name="slide-up">
      <MovieTrailer v-if="state.ShowTrailerModal" />
    </transition>
  </div>
</template>

<style>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
