import { apiMovie, apiTv, endPointURL, endPointURLVideo } from '@/config/apiTmdb'

export const fetcher = async (url: string, option?: object) => {
  try {
    console.log(`fetch --> ${url}`)

    const response = option
      ? await fetch(endPointURL(url), option)
      : await fetch(endPointURL(url))

    if (!response.ok) undefined

    return response.json()
  } catch (err) {
    console.log('fetching Erorrrrrrr gais')
    console.log(url)
  }
}



export const getData = {
  // moviePopular: async () => await fetcher('/movie/popular', { next: { revalidate: 60 } }),
  moviePopular: async () => await fetcher('/movie/popular'),
  movieTrending: async () => await fetcher('/trending/movie/day'),
  movieTop_Rated: async () => await fetcher('/movie/top_rated'),
  movieUpcoming: async () => await fetcher('/movie/upcoming'),
  movieHot: async () => await fetcher('/trending/movie/day?page=2'),
}

export const getMovieById = async (movieId: string) => {
  console.log(`get Id --> ${movieId}`)
  const res = await fetch(endPointURLVideo(`/movie/${movieId}`))

  if (!res.ok) undefined

  return res.json()
}
