import { getData } from '@/lib/getData'
import MovieList from '@/components/MovieList'

export default async function RatedPage() {
  const getDataMovies: Promise<Movies> = getData.movieTop_Rated()
  const getDataTv: Promise<Movies> = getData.moviePopular()
  // const dataMovies = await getDataMovies

  const [dataMovies, dataTvs] = await Promise.all([getDataMovies, getDataTv])

  return (
    <section className="">
      <MovieList
        movies={dataMovies.results}
        tv={dataTvs.results}
        path="/rated/"
      />
    </section>
  )
}
