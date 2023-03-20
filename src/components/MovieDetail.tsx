// 'use client'

import Image from 'next/image'
import { HiArrowSmLeft, HiPlay, HiStar } from 'react-icons/hi'

import { PlayMovie } from './PlayMovie'
import { AspectRatio } from './ui/aspect-ratio'

type Prop = {
  data: MoviesById
}
export default function MovieDetail1({ data }: Prop) {
  return (
    <div className="h-screen mb-4">
      <div className="relative h-[90vh]">
        <div className="">
          <div className="absolute w-full h-[60vh] bg-gradient-to-r from-slate-900 z-10" />
          <div className="absolute w-full h-[60vh] bg-gradient-to-t from-slate-900 z-10" />

          <div className="relative w-full h-[60vh]">
            <AspectRatio ratio={16 / 6} className=" h-[60vh] overflow-hidden ">
              <Image
                src={`https://image.tmdb.org/t/p/original${
                  data.backdrop_path || data.poster_path
                }`}
                alt=""
                className="object-cover object-top opacity-50"
                quality={40}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="z-50 flex justify-center">
          <div className="flex flex-col items-center md:flex-row md:max-w-2xl lg:max-w-3xl absolute xl:max-w-4xl md:mt-[-300px] mt-[-200px] text-white z-50">
            <div className=" lg:w-[30%] h-auto md:h-[400px] w-[70%]">
              <AspectRatio
                ratio={2 / 3}
                className="overflow-hidden rounded-md bg-slate-800"
              >
                <Image
                  src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                  alt={data.original_title}
                  // fill
                  className="object-cover transition-all "
                  quality={50}
                  width={400}
                  height={600}
                />
              </AspectRatio>
            </div>
            <div className="float-left w-[70%] md:pl-12 ">
              <p className="mt-3 mb-3 text-3xl md:text-5xl md:mt-0">
                {data.title || data.original_title}{' '}
              </p>
              <div className="flex flex-row items-center ">
                <div className="flex flex-row items-center justify-center pb-2 mr-5">
                  <HiStar className="mr-2 text-3xl" />
                  <p className="text-4xl ">{data?.vote_average?.toFixed(1)} </p>
                </div>
                <div className="flex flex-col">
                  <div className="grid grid-flow-col gap-4 auto-cols-max ">
                    <p className="text-sm text-cyan-600 md:text-base">
                      Released: {data?.release_date}{' '}
                    </p>
                    <p className="text-sm text-cyan-600 md:text-base">
                      {data?.runtime} min
                    </p>
                  </div>

                  <div className="grid grid-flow-col gap-4 mb-3 auto-cols-max">
                    {data.genres &&
                      data.genres.slice(0, 5).map((genre, i) => (
                        <span key={i} className="text-sm md:text-base">
                          {genre.name}
                        </span>
                      ))}
                  </div>
                </div>
              </div>

              <p className="mb-8 text-gray-300">{data.overview} </p>
              <PlayMovie data={data} />
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
