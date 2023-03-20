import { Suspense } from 'react'

import { getData } from '@/lib/getData'
import MovieList from '@/components/MovieList'

export const revalidate = 120

export default async function TrendingPage() {
  const getDataMovies: Promise<Movies> = getData.movieTrending()
  const getDataTv: Promise<Movies> = getData.moviePopular()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <Suspense fallback={<h2>Loading..............</h2>}>
        <MovieList
          movies={dataMovies.results}
          tv={dataTvs.results}
          path="/trending/detail/"
        />
      </Suspense>
    </section>
  )
}
