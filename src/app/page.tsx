import MovieList from '../components/MovieList'
import { getMoviesPopular, getMoviesTrending } from '../lib/getData'

export default async function HomePage() {
  const getDataMovies: Promise<Movies> = getMoviesPopular()
  const getDataTv: Promise<Movies> = getMoviesTrending()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <MovieList movies={dataMovies.results} tv={dataTvs.results} />
    </section>
  )
}
