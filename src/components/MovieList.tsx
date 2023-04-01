// 'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import apiTmdb from '../config/apiTmdb'
import { AspectRatio } from './ui/aspect-ratio'

type Props = {
  data: MoviesResults[]
  searchParams?: { genre?: string; filter?: string }
}

export default function MovieList({ data, searchParams }: Props) {
  const filter = searchParams?.filter
  // console.log(data)

  if (filter) {
    data = data.filter((movie) => movie.genre_ids.includes(Number(filter)))
    console.log('ini adalah hasil filter --> ' + data.length)
  }

  return (
    <>
      <div className="px-10 py-8">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Listen Now
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Top picks for you. Updated daily.
            </p>
          </div>
        </div>
        {/* <Separator className="my-4" /> */}
        <div className="relative">
          <ul className="grid grid-cols-2 py-16 pt-10 gap-x-6 gap-y-8 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3">
            {data?.map((movie) => (
              <CardMovieList data={movie} key={movie.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

function CardMovieList({ data }: { data: MoviesResults }) {
  const image = data?.poster_path
    ? apiTmdb.w500Image(data.poster_path)
    : 'https://raw.githubusercontent.com/CodingByGopal/React-MovieNuggets/master/src/images/male.png'

  return (
    <li key={data.id}>
      <Link href={`/moviedetail/${data?.id}`}>
        <AspectRatio
          ratio={3 / 4}
          className="overflow-hidden rounded-md bg-slate-800 "
        >
          <Image
            src={image}
            alt={data.original_title}
            className="object-cover transition-all hover:scale-105 hover:opacity-50 "
            quality={70}
            width={370}
            height={520}
          />
        </AspectRatio>
        <div className="mt-3 space-y-1 text-sm">
          <h3 className="font-medium leading-none truncate">
            {data.original_title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {data.release_date}
          </p>
        </div>
      </Link>
    </li>
  )
}
