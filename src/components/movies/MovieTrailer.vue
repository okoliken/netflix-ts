<script setup lang="ts">
import YouTube from "vue3-youtube";
import ModalLogo from "../ModalLogo.vue";
import { ref, computed } from "vue";
// import { loading } from '../../composables/index'

const youtube = ref<any>(null);
const selectedTrailer = ref("");


//gets random trailers from api response
selectedTrailer.value =
  trailer.state.trailers[Math.floor(Math.random() * trailer.state.trailers.length)];
// end


// selects random trailers 
const setRandomTrailer = () => {
  selectedTrailer.value =
    trailer.state.trailers[Math.floor(Math.random() * trailer.state.trailers.length)];

  return selectedTrailer.value;
};
// end

// play youtube trailer api call is complete
const onReady = () => {
  youtube.value?.playVideo();
};
// end

// return random trailer
const getRandomTrailer = computed(() => {
  return selectedTrailer.value;
});
// end
const errorWhileTryingTOPlay = () => {
  alert("an error occurred while trying to get movie trailer");
};

    // return all data needed in template

</script>

<template>
  <Teleport to=".movie--trailer">
    <div class="bg-black bg-opacity-50 blur-2xl fixed top-0 h-full z-50 w-full flex items-center justify-center">
      <div class="bg-black bg-opacity-90 w-full max-w-2xl h-auto p-4 rounded-lg">
        <ModalLogo />
        <template v-if="getRandomTrailer !== null">
          <div class="flex items-center justify-between">
            <h2 class="text-white text-3xl font-medium my-3">
              {{ getRandomTrailer?.name }}
            </h2>
            <button v-if="trailer.state.trailers.length >= 1" @click="setRandomTrailer"
              class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700">
              Shuffle trailer
            </button>
          </div>
          <div>
            <YouTube v-if="getRandomTrailer !== null" :src="`https://www.youtube.com/watch?v=${getRandomTrailer?.key}`"
              @ready="onReady" @error="errorWhileTryingTOPlay" ref="youtube" style="max-width: 42rem;" width="100%" />
          </div>
        </template>
        <template v-else>
          <div class="p-12">
            <p class="text-white text-xl lg:text-3xl text-center">
              No Trailer Found For this Movie
            </p>
          </div>
        </template>
      </div>
    </div>
  </Teleport>
</template>
  
