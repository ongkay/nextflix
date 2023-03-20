'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { HiArrowSmLeft, HiPlay, HiStar } from 'react-icons/hi'
import Youtube from 'react-youtube'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { AspectRatio } from './ui/aspect-ratio'
import { Button } from './ui/button'

type PropPlayMovie = {
  data: MoviesById
}

export function PlayMovie({ data }: PropPlayMovie) {
  const router = useRouter()
  let trailerid = data.videos.results.find(
    (vid) => vid.name === 'Official Trailer'
  )

  if (!trailerid) {
    trailerid = data.videos.results[0]
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <Button onClick={() => router.back()} variant="outline">
        <HiArrowSmLeft className="w-5 h-5 mr-2" />
        Back to page
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="destructive">
            <HiPlay className="w-6 h-6 mr-1" />
            Play
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[850px] p-8 dark:bg-transparent bg-transparent">
          <AspectRatio
            ratio={16 / 9}
            className="overflow-hidden border-2 rounded-2xl border-slate-800 bg-slate-800"
          >
            <>
              <Youtube
                videoId={trailerid?.key}
                className="w-full aspect-video"
                opts={{
                  width: '100%',
                  height: '100%',
                  playerVars: {
                    autoplay: 1,
                  },
                }}
                loading={'lazy'}
              />
            </>
          </AspectRatio>
        </DialogContent>
      </Dialog>
    </div>
  )
}
