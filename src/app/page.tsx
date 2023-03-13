// 'use client'

import CartMovieList from '../components/CardMovieList'
import { getMoviesPopular, getMoviesTrending } from '../lib/getData'

export default async function HomePage() {
  const getDataMovies: Promise<Movies> = getMoviesPopular()
  const getDataTv: Promise<Movies> = getMoviesTrending()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])
  // const data = [...dataMovies.results, ...dataTvs.results]
  // console.log(data)

  return (
    <section className="">
      {/* <CartMovieList movies={data} /> */}
      <CartMovieList movies={dataMovies.results} tv={dataTvs.results} />
    </section>
  )
}
