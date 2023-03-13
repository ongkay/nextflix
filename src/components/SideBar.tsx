'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import {
  LayoutGrid,
  Library,
  ListMusic,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  Radio,
  User,
} from 'lucide-react'

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const menuBar = {
  menuOne: [
    {
      title: 'Listen Now',
      href: '/',
      icon: PlayCircle,
    },
    {
      title: 'Browse',
      href: '/',
      icon: LayoutGrid,
    },
    {
      title: 'Radio',
      href: '/',
      icon: Radio,
    },
  ],
  menuTwo: [
    {
      title: 'Playlists',
      href: '/',
      icon: ListMusic,
    },
    {
      title: 'Songs',
      href: '/',
      icon: Music2,
    },
    {
      title: 'Made for You',
      href: '/',
      icon: User,
    },
    {
      title: 'Artists',
      href: '/',
      icon: Mic2,
    },
  ],
  menuThree: [
    {
      title: 'Recently Added',
      href: '/',
      icon: ListMusic,
    },
    {
      title: 'Recently Played',
      href: '/',
      icon: ListMusic,
    },
    {
      title: 'Top Songs',
      href: '/',
      icon: ListMusic,
    },
    {
      title: 'Top Albums',
      href: '/',
      icon: ListMusic,
    },
    {
      title: 'Logic Discography',
      href: '/',
      icon: ListMusic,
    },
  ],
}

interface Prop {
  children: ReactNode
}

export function SideBar({ children }: Prop) {
  return (
    // <div className="px-5 py-3">
    <div className="grid grid-cols-4 xl:grid-cols-6 ">
      <aside className="sticky top-0 self-start col-span-1">
        <div className="px-8 py-6 ">
          <p className="flex items-center text-2xl font-semibold tracking-tight">
            <Music className="mr-2" />
            Music
          </p>
        </div>
        <div className="space-y-4">
          <div className="px-6 py-2">
            <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
              {menuBar.menuOne.map((item, index) => (
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start w-full"
                  key={index}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="px-6 py-2">
            <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
              Library
            </h2>
            <div className="space-y-1">
              {menuBar.menuTwo.map((item, index) => (
                <Button
                  variant="ghost"
                  size="sm"
                  className="justify-start w-full"
                  key={index}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.title}
                </Button>
              ))}
            </div>
          </div>
          <div className="py-2">
            <h2 className="relative px-8 text-lg font-semibold tracking-tight">
              Playlists
            </h2>
            <ScrollArea className="h-[300px] px-4 ">
              <div className="p-2 space-y-1">
                {menuBar.menuThree.map((item, index) => (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="justify-start w-full font-normal"
                    key={index}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </aside>
      <main className="col-span-3 border-l border-l-slate-200 dark:border-l-slate-700 xl:col-span-5">
        {children}
      </main>
    </div>
    // </div>
  )
}
