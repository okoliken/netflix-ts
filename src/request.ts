const API_KEY = "1282393e3b1d1174618a5f9824d4ec9c";

const request = {
  fetchingNowPlaying: `movie/now_playing?api_key=${API_KEY}language=en-US&page=1'`,
  fetchingTrending: `trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchNetflixOriginals: `discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `movie/top_rated?api_key=${API_KEY}&languages=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchVideos: (movie_id:string) => {
    return `movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`
  }
};

export default request;