 <script setup lang="ts">
import YouTube from "vue3-youtube";
import ModalLogo from "../ModalLogo.vue";
import { ref, computed } from "vue";
import { state } from '../../composable/index'

const youtube = ref<any>(null);
const selectedTrailer = ref<any>("");


//gets random trailers from api response
selectedTrailer.value =
  state.trailers[Math.floor(Math.random() * state.trailers.length)];
// end


// selects random trailers 
const setRandomTrailer = () => {
  selectedTrailer.value =
    state.trailers[Math.floor(Math.random() * state.trailers.length)];

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
  alert("An error occurred while trying to get movie trailer");
};

</script>

<template>
  <Teleport to=".movie__trailer">
    <div class="bg-black bg-opacity-50  fixed top-0 h-screen z-50 w-full flex items-center justify-center">
      <div class="bg-black bg-opacity-90 w-full max-w-xl h-full py-4 px-8 rounded-lg">
        <ModalLogo @close="state.ShowTrailerModal = false" />
        <template v-if="getRandomTrailer !== null">
          <div >
            <h2 class="text-white text-xl font-medium my-3">
              {{ getRandomTrailer?.name }}
            </h2>
            <button v-if="state.trailers.length >= 1" @click="setRandomTrailer"
              class="text-white uppercase hover:bg-red-600 rounded-sm text-xs lg:text-md px-2 md:px-3 py-2 bg-red-700">
              Shuffle trailer
            </button>
          </div>
          <div class="mt-8">
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



