import { notFound } from 'next/navigation'
import MovieDetail from '@/src/components/MovieDetail'
import { getData, getMovieById } from '@/src/lib/getData'

export const revalidate = 150

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

// export async function generateStaticParams() {
//   const getAllData: Promise<Movies> = getData.movieTrending()
//   const data = await getAllData

//   return data.results.map((movie) => ({
//     movieId: movie.id.toString(),
//   }))
// }
