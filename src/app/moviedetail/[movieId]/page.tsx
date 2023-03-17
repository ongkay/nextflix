import { notFound } from 'next/navigation'
import MovieDetail from '@/src/components/MovieDetail'
import { getMovieById } from '@/src/lib/getData'

type Params = {
  params: {
    movieId: string
  }
}
export default async function UserPage({ params: { movieId } }: Params) {
  const getDataMovies: Promise<MoviesById> = getMovieById(movieId)
  const data = await getDataMovies

  if (!data.id) return notFound()

  return (
    <>
      <MovieDetail data={data} />
    </>
  )
}
