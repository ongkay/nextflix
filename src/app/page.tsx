import { FC } from 'react'

import MovieList from '../components/MovieList'
import { getData } from '../lib/getData'

// export const revalidate = 60
export const dynamic = 'force-dynamic' // this is the fix

type Props = {
  searchParams?: {
    genre?: string
    filter?: string
  }
}

type PageProps = {
  params?: {
    id: string
  }
  searchParams?: {
    search?: string
  }
}

export default async function HomePage({ searchParams }: Props) {
  const genre = searchParams?.genre || 'trending'
  // const getDataMovies: Promise<Movies> = getData.moviePopular()

  const getDatanya = (genre: string): Promise<Movies> => {
    switch (genre) {
      case 'trending':
        return getData.movieTrending()
      case 'rated':
        return getData.movieTop_Rated()
      case 'hot':
        return getData.movieHot()
      case 'upcoming':
        return getData.movieUpcoming()

      default:
        return getData.moviePopular()
    }
  }
  const data = await getDatanya(genre)

  return (
    <section className="">
      <MovieList data={data.results} />
    </section>
  )
}
