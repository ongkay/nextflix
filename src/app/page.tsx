import MovieList from '../components/MovieList'
import { getData } from '../lib/getData'

export const revalidate = 60

export default async function HomePage() {
  const getDataMovies: Promise<Movies> = getData.moviePopular()
  const getDataTv: Promise<Movies> = getData.movieTrending()
  // const data = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <MovieList movies={dataMovies.results} tv={dataTvs.results} />
    </section>
  )
}
