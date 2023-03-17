import { getMoviesHot, getMoviesRated, getMoviesUpcoming } from '@/lib/getData'
import MovieList from '@/components/MovieList'

export default async function RatedPage() {
  const getDataMovies: Promise<Movies> = getMoviesRated()
  const getDataTv: Promise<Movies> = getMoviesUpcoming()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <MovieList movies={dataMovies.results} tv={dataTvs.results} />
    </section>
  )
}
