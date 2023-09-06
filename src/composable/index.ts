import { reactive, computed } from 'vue'
// import axios from "axios";
import request from '@/request'; 
import {api} from '../axios' 
export const state = reactive({
  isLoading: false,
  ShowTrailerModal: false,
  trailers: []
})



export const loading = computed(() => state.isLoading)


export const fetchTmdbMovies = async (requests:string) => {
  const res = await api.get(requests)

  return res.data?.results
}

export const getMovieTrailer = async (id:string) => {

    const res = await api.get(
      `${request.fetchVideos(id)}`
    );

    state.ShowTrailerModal = true
    document.body.style.overflow = 'hidden'
    const data = res.data

    state.trailers = data?.results
}
