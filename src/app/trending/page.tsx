import { getMoviesPopular, getMoviesTrending } from '@/lib/getData'
import MovieList from '@/components/MovieList'

export default async function TrandingPage() {
  const getDataMovies: Promise<Movies> = getMoviesTrending()
  const getDataTv: Promise<Movies> = getMoviesPopular()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <MovieList movies={dataMovies.results} tv={dataTvs.results} />
    </section>
  )
}
