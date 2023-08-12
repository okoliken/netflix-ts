<script setup lang="ts">

import  { loading, state } from '../composable/index'
import MovieRow from "../components/movies/MovieRow.vue";
import MovieBanner from "../components/movies/MovieBanner.vue";
import requests from "../request";
import MovieTrailer from "../components/movies/MovieTrailer.vue";
// @ts-ignore
import Loading from "../components/movies/Loading.vue";
</script>

<template>
  <MovieBanner />
  <div
    v-if="loading"
    class="w-full h-full fixed z-50 top-0 bg-black bg-opacity-60 flex items-center justify-center flex-col space-y-5"
  >
    <Loading />
    <div class="text-center text-white">loading trailer....</div>
  </div>
  <div class="container mx-auto">
    <MovieRow title="NETFLIX ORIGINALS" :requests="requests.fetchNetflixOriginals" />
    <MovieRow title="Trending Now" :requests="requests.fetchingTrending" />
    <MovieRow title="Top Rated" :requests="requests.fetchTopRated" />
    <MovieRow title="Action Movies" :requests="requests.fetchActionMovies" />
    <MovieRow title="Comedy Movies" :requests="requests.fetchComedyMovies" />
    <MovieRow title="Horror Movies" :requests="requests.fetchHorrorMovies" />
    <MovieRow title="Romantic Movies" :requests="requests.fetchRomanceMovies" />
    <MovieRow title="Documentaries" :requests="requests.fetchDocumentaries" />

    <transition name="slide-up">
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