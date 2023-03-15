const apiTmdb = {
  baseUrl: 'https://api.themoviedb.org/3',
  apiKey: '?api_key=df7934f249ad19ef751a3c7ae05883e7',
  originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
  w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}


export const endPointURL = (endpoints: string) => apiTmdb.baseUrl + endpoints + apiTmdb.apiKey
export const endPointURLVideo = (endpoints: string) => apiTmdb.baseUrl + endpoints + apiTmdb.apiKey + "&append_to_response=videos"

export const apiMovie = {
  trending: endPointURL('/trending/movie/day'),
  popular: endPointURL('/movie/popular'),
  top_Rated: endPointURL('/movie/top_rated'),
  upcoming: endPointURL('/movie/upcoming'),
  hot: endPointURL('/trending/movie/day?page=2'),
}

export const apiTv = {
  trending: endPointURL('/trending/tv/day'),
  popular: endPointURL('/tv/popular'),
  top_Rated: endPointURL('/tv/top_rated'),
  hot: endPointURL('/tv/on_the_air'),
}


export default apiTmdb


// const endpoints = {
//   trending: '/trending/movie/day',
//   popular: '/movie/popular',
//   top_tated: '/movie/top_rated',
//   hot: '/trending/movie/day?page=2',
//   upcoming: '/movie/upcoming',
// };

// const endpoints2: { [key: string]: string } = {
//   Trending: "/trending/tv/day",
//   Popular: "/tv/popular",
//   "Top Rated": "/tv/top_rated",
//   Hot: "/trending/tv/day?page=2",
//   "On the air": "/tv/on_the_air",
// };
