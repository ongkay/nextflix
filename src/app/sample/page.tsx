import { Suspense } from 'react'
import LoadingPage from '@/src/components/LoadingPage'
import SampleList from '@/src/components/SampleList'

// import SampleList from '@/src/components/SampleList'

import { getData } from '@/lib/getData'

export const revalidate = 500

export default async function TrandingPage() {
  const getDataMovies: Promise<Movies> = getData.moviePopular()
  // const getDataTv: Promise<Movies> = getMoviesPopular()

  return (
    <section className="">
      {/* <Suspense fallback={<LoadingPage />}> */}
      <Suspense
        fallback={
          <h1>
            Ini Sedang Loading
            Gais.............................................................................................
          </h1>
        }
      >
        <SampleList promisenya={getDataMovies} />
      </Suspense>
    </section>
  )
}
