import { reactive, computed } from 'vue'
import axios from "axios";
import request from '@/request'; 

export const state = reactive({
  isLoading: false,
  ShowTrailerModal: false,
  trailers: []
})



export const loading = computed(() => state.isLoading)


export const fetchTmdbMovies = async (requests:string) => {
  state.isLoading = true
  const res = await axios.get(requests)
  state.isLoading = false
  return res.data?.results
}

export const getMovieTrailer = async (id:string) => {
    state.isLoading = true
    const res = await axios.get(
      `${request.fetchVideos(id)}`
    );
    state.isLoading = false
    state.ShowTrailerModal = true
    const data = res.data

    state.trailers = data?.results
}
