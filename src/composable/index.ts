import { reactive, computed } from 'vue'
import axios from "axios";

export const state = reactive({
  popularMovies: [],
  movieDetails: [],
  isLoading: false,
  ShowTrailerModal: false,
  trailers: []
})


export const movieData = computed(() => state.popularMovies)
export const movieDetails = computed(() => state.movieDetails)
export const loading = computed(() => state.isLoading)


export const getMovieData = async () => {
  try {
    const apiKey = "k_1fnld2bu";
    // commit("isLoading", true);
    state.isLoading = true
    const res = await axios.get(
      `https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`
    );

    const data = res.data

    state.popularMovies = data

    state.isLoading = false
  } catch (error) {

    state.isLoading = false
  }
}
export const getMovieDetails = async () => {
  const apiKey = "k_1fnld2bu";

  try {
    state.isLoading = true
    const res = await axios.get(
      `https://imdb-api.com/en/API/Title/${apiKey}/${id}/FullActor,FullCast,Posters,Images,Trailer,Ratings,Wikipedia`
    );

    const data = res.data


    state.movieDetails = data
    state.isLoading = false
  } catch (error) {
    state.isLoading = false
  }
}