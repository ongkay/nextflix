'use client'

import Image from 'next/image'
import Link from 'next/link'

import apiTmdb from '../config/apiTmdb'
import { AspectRatio } from './ui/aspect-ratio'

type Props = {
  movies: MoviesResults[]
  tv?: MoviesResults[]
}

export default function CardMovieList({ movies, tv }: Props) {
  let clickLinkTo = '#'

  return (
    <div className="px-10 py-6 ">
      <ul className="grid grid-cols-2 py-16 pt-10 gap-x-6 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3">
        {movies?.map((movie) => {
          const image = movie?.poster_path
            ? apiTmdb.w500Image(movie.poster_path)
            : 'https://raw.githubusercontent.com/CodingByGopal/React-MovieNuggets/master/src/images/male.png'

          return (
            <li key={movie.id}>
              <Link href={`${clickLinkTo}${movie?.id}`}>
                <AspectRatio
                  ratio={3 / 4}
                  className="overflow-hidden rounded-md bg-slate-800"
                >
                  <Image
                    src={image}
                    alt={movie.original_title}
                    // fill
                    className="object-cover transition-all hover:scale-105 hover:opacity-50"
                    // placeholder="blur"
                    // blurDataURL={imageBlur}
                    quality={70}
                    width={370}
                    height={520}
                  />
                </AspectRatio>
                <div className="mt-3 space-y-1 text-sm">
                  <h3 className="font-medium leading-none truncate">
                    {movie.original_title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {movie.release_date}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
