<script setup lang="ts">
import axios from 'axios'
import { ref, onMounted, onUnmounted } from 'vue'
import request from '../../request'
import Navbar from '../Navbar.vue'
//   import LoadingGif from "./LoadingGif.vue";
interface Movie {
    backdrop_path: string
    name: string
    original_name: string
    overview: string
}
const isSticky = ref(false)
const randomBannerMovieImage = ref<Movie>()
const base_url = 'https://image.tmdb.org/t/p/original'
const getRandomBannerMovieImage = async () => {
    try {
        const res = await axios.get(request.fetchNetflixOriginals)
        randomBannerMovieImage.value =
            res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
        return res
    } catch (error) {
        console.log(error)
    }
}

onMounted(() => {
    getRandomBannerMovieImage()

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            isSticky.value = true
        } else isSticky.value = false
    })
})

onUnmounted(() => {
    window.removeEventListener('scroll', () => (isSticky.value = false))
})
</script>

<template>
    <div class="absolute w-full" style="z-index: 1">
        <header :class="{
            'bg-black w-full fixed bg-opacity-90 transition-all duration-300 ease-in': isSticky
        }">
            <Navbar>
                <template #movieBanner>
                    <img src="../assets/netflix-logo-png-2584.png" alt="" class="w-32 object-contain" />

                    <ul>
                        <li>
                            <router-link :to="{ name: 'popularMovies' }"
                                class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700">
                                Popular Movies</router-link>
                        </li>
                    </ul>
                </template>
            </Navbar>
        </header>
    </div>
    <div v-if="randomBannerMovieImage"
        :style="`background-image:linear-gradient( rgba(0,0,0,.3),rgba(0,0,0,.3)),url(${base_url}${randomBannerMovieImage?.backdrop_path})`"
        class="banner-img relative">
        <div class="container mx-auto px-4 md:px-5 py-24 md:py-16 mb-5 md:mb-0">
            <h1 class="font-bold text-3xl md:text-6xl text-white md:py-6">
                {{ randomBannerMovieImage?.name || randomBannerMovieImage?.original_name }}
            </h1>
            <p class="text-white text-lg md:text-xl font-medium w-full md:w-1/2">
                {{ randomBannerMovieImage.overview }}
            </p>
        </div>

        <div class="dark-bottom"></div>
    </div>
</template>

<style scoped>
.banner-img {
    width: 100%;
    height: 400px;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}

.dark-bottom {
    height: 5.3rem;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
}
</style>
