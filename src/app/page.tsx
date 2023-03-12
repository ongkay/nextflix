'use client'

import { FC } from 'react'
import { Button, buttonVariants } from '@/ui/button'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { AppleMusicDemo } from '../components/music-demo'
import Spinner from '../components/ui/spinner'
import { Switch } from '../components/ui/switch'

export const metadata = {
  title: 'ImageToAlt - Home',
}

const page: FC = () => {
  return (
    // <section className="container">
    <AppleMusicDemo />
    // </section>
  )
}

export default page
