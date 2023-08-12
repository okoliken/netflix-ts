<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import request from '../../request'
import 'vue3-carousel/dist/carousel.css'

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
    v-if="movie.length !== 0"
    :breakpoints="breakpoints"
    :wrapAround="false"
    :transition="800"
  >
    <Slide v-for="slide in movie" :key="slide.id">
      <div
        class="carousel__item relative hover--show__overlay flex flex-col items-center justify-center"
      >
        <img
          class="w-full object-contain cursor-pointer bg-black lazy--img"
          v-lazy="`${base_url}${slide.poster_path}`"
          :alt="slide.name"
        />
        <div
          @click="getVideo(slide.id)"
          class="absolute cursor-pointer z-40 w-full play-overlay h-full bg-black bg-opacity-30 flex items-center justify-center"
        >
          <img
            class="w-28 mt-24 ml-8 lg:mt-28 lg:ml-10 xl:ml-16 xl:mt-32"
            src="../assets/YouTube-Icon-Full-Color-Logo.wine.png"
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

<!--   
  <script>
  
  export default {
    name: "Autoplay",
    data() {
      return {
        base_url: "https://image.tmdb.org/t/p/original/",
        api: requests.fetchVideos,
        breakpoints: {
          300: {
            itemsToShow: 2,
          },
          400: {
            itemsToShow: 3.5,
            snapAlign: "center",
          },
          700: {
            itemsToShow: 4,
            snapAlign: "center",
          },
          1024: {
            itemsToShow: 5,
          },
        },
      };
    },
    props: {
      movie: Array,
    },
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    methods: {
      async getVideo(id) {
        this.$store.commit("isLoading", true)
        await axios
          .get(this.api(id))
          .then((res) => {
            this.$store.commit("movieTrailers", res.data.results);
            this.$store.commit("showTrailer", true);
            this.$store.commit("isLoading", false)
          })
          .catch((err) => {
            console.log(err.response);
            this.$store.commit("isLoading", false)
          });
      },
    },
  };
  </script> -->

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2500px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  transition: 0.5s;
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}

.play-overlay {
  display: none;
}

.hover--show__overlay:hover .play-overlay {
  display: block;
}
</style>
