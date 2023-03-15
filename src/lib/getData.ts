import { apiMovie, apiTv, endPointURL, endPointURLVideo } from '@/config/apiTmdb'

export const getMoviesPopular = async () => {
  const res = await fetch(apiMovie.popular, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getMoviesTrending = async () => {
  const res = await fetch(apiMovie.trending, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getMoviesRated = async () => {
  const res = await fetch(apiMovie.top_Rated, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getMoviesUpcoming = async () => {
  const res = await fetch(apiMovie.upcoming, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getMoviesHot = async () => {
  const res = await fetch(apiMovie.hot, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}


// Get TV
export const getTvPopular = async () => {
  const res = await fetch(apiTv.popular, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getTvTrending = async () => {
  const res = await fetch(apiTv.trending, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getTvRated = async () => {
  const res = await fetch(apiTv.top_Rated, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}

export const getTvUpcoming = async () => {
  const res = await fetch(apiTv.hot, { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}


// getMovie ID

export const getMovieById = async (movieId: string) => {
  const res = await fetch(endPointURLVideo(`/movie/${movieId}`), { next: { revalidate: 60 } })

  if (!res.ok) undefined

  return res.json()
}