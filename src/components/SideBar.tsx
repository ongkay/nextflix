'use client'

import { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  CreditCard,
  Keyboard,
  LayoutGrid,
  ListMusic,
  LogOut,
  Mail,
  MessageSquare,
  Mic2,
  Music,
  Music2,
  PlayCircle,
  PlusCircle,
  Radio,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react'

// import { siteConfig } from '@/config/site'
// import { Icons } from '@/components/icons'
// import { MainNav } from '@/components/main-nav'
// import { ThemeToggle } from '@/components/theme-toggle'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '../lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

interface Prop {
  children: ReactNode
}

export function SideBar({ children }: Prop) {
  const [thisPage, setThisPage] = useState<String | null>(null)

  return (
    <>
      <div className="grid grid-cols-4 xl:grid-cols-6">
        <aside className="sticky top-0 self-start h-screen col-span-1 pl-5 border-r border-r-slate-700">
          <div className="p-8 py-8 ">
            <Link href="/">
              <p className="text-lg font-bold text-red-500 md:text-4xl">
                Nextflix
              </p>
            </Link>
          </div>

          <div className="space-y-4">
            <div className="px-6 py-2">
              <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                Discover
              </h2>
              <div className="space-y-1">
                {Object.values(menuBar)[0].map((item, index) => {
                  const isPath = thisPage === item.path
                  return (
                    <ul key={index}>
                      <Link
                        onClick={() => {
                          setThisPage(item.path)
                        }}
                        href={item.path}
                        key={index}
                        className={cn(
                          buttonVariants({
                            size: 'sm',
                            variant: isPath ? 'subtle' : 'ghost',
                            className:
                              'justify-start w-full outline-none ring-0 focus:ring-0 focus:ring-offset-0',
                          })
                        )}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </ul>
                  )
                })}
              </div>
            </div>
            <div className="px-6 py-2">
              <h2 className="px-2 mb-2 text-lg font-semibold tracking-tight">
                Moviemu
              </h2>
              <div className="space-y-1">
                {Object.values(menuBar)[1].map((item, index) => {
                  const isPath = thisPage === item.path
                  return (
                    <ul key={index}>
                      <Link
                        onClick={() => {
                          setThisPage(item.path)
                        }}
                        href={item.path}
                        key={index}
                        className={cn(
                          buttonVariants({
                            size: 'sm',
                            variant: isPath ? 'subtle' : 'ghost',
                            className:
                              'justify-start w-full outline-none ring-0 focus:ring-0 focus:ring-offset-0',
                          })
                        )}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </ul>
                  )
                })}
              </div>
            </div>
            <div className="py-2">
              <h2 className="relative px-8 text-lg font-semibold tracking-tight">
                Playlists
              </h2>
              <ScrollArea className="h-[300px] px-4 ">
                <div className="p-2 space-y-1">
                  {Object.values(menuBar)[2].map((item, index) => {
                    const isPath = thisPage === item.path
                    return (
                      <ul key={index}>
                        <Link
                          onClick={() => {
                            setThisPage(item.path)
                          }}
                          href={item.path}
                          key={index}
                          className={cn(
                            buttonVariants({
                              size: 'sm',
                              variant: isPath ? 'subtle' : 'ghost',
                              className:
                                'justify-start w-full outline-none ring-0 focus:ring-0 focus:ring-offset-0',
                            })
                          )}
                        >
                          <item.icon className="w-4 h-4 mr-2" />
                          {item.title}
                        </Link>
                      </ul>
                    )
                  })}
                </div>
              </ScrollArea>
            </div>
          </div>
        </aside>
        <main className="col-span-3 xl:col-span-5">
          <>
            <ProfileTab />
            {children}
          </>
        </main>
      </div>
    </>
  )
}

const menuBar = {
  menuOne: [
    {
      title: 'Trending Now',
      path: '/?genre=trending',
      icon: PlayCircle,
    },
    {
      title: 'Best Rate',
      path: '/?genre=rated',
      icon: LayoutGrid,
    },
    {
      title: 'upcoming',
      path: '/?genre=upcoming',
      icon: Radio,
    },
    {
      title: 'hot',
      path: '/?genre=hot',
      icon: Radio,
    },
  ],
  menuTwo: [
    {
      title: 'Playlists',
      path: '/',
      icon: ListMusic,
    },
    {
      title: 'Songs',
      path: '/',
      icon: Music2,
    },
    {
      title: 'Made for You',
      path: '/',
      icon: User,
    },
    {
      title: 'Artists',
      path: '/',
      icon: Mic2,
    },
  ],
  menuThree: [
    {
      title: 'Action',
      path: '/?filter=28',
      icon: ListMusic,
    },
    {
      title: 'Adventure',
      path: '/?filter=12',
      icon: ListMusic,
    },
    {
      title: 'Comedy',
      path: '/?filter=35',
      icon: ListMusic,
    },
    {
      title: 'Animation',
      path: '/?filter=16',
      icon: ListMusic,
    },
    {
      title: 'Crime',
      path: '/?filter=80',
      icon: ListMusic,
    },
    {
      title: 'Documentary',
      path: '/?filter=99',
      icon: ListMusic,
    },
    {
      title: 'Drama',
      path: '/?filter=18',
      icon: ListMusic,
    },
    {
      title: 'Family',
      path: '/?filter=10751',
      icon: ListMusic,
    },
    {
      title: 'Fantasy',
      path: '/?filter=14',
      icon: ListMusic,
    },
    {
      title: 'History',
      path: '/?filter=36',
      icon: ListMusic,
    },
    {
      title: 'Horror',
      path: '/?filter=27',
      icon: ListMusic,
    },
    {
      title: 'Music',
      path: '/?filter=10402',
      icon: ListMusic,
    },
    {
      title: 'Mystery',
      path: '/?filter=9648',
      icon: ListMusic,
    },
    {
      title: 'Romance',
      path: '/?filter=10749',
      icon: ListMusic,
    },
    {
      title: 'Science Fictio',
      path: '/?filter=878',
      icon: ListMusic,
    },
    {
      title: 'TV Movie ',
      path: '/?filter=10770',
      icon: ListMusic,
    },
    {
      title: 'War',
      path: '/?filter=10752',
      icon: ListMusic,
    },
    {
      title: 'Western',
      path: '/?filter=37',
      icon: ListMusic,
    },
    {
      title: 'Thriller',
      path: '/?filter=53',
      icon: ListMusic,
    },
  ],
}

function ProfileTab() {
  return (
    <div className="absolute top-0 right-0 z-50 flex items-center px-10 pt-8">
      <div className="ml-auto mr-4 ">
        <h3 className="lg:text-sm lg:font-semibold">MyName</h3>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative w-10 h-10 rounded-full">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              <span>Profile</span>
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCard className="w-4 h-4 mr-2" />
              <span>Billing</span>
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="w-4 h-4 mr-2" />
              <span>Settings</span>
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Keyboard className="w-4 h-4 mr-2" />
              <span>Keyboard shortcuts</span>
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Users className="w-4 h-4 mr-2" />
              <span>Team</span>
            </DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <UserPlus className="w-4 h-4 mr-2" />
                <span>Invite users</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent forceMount>
                  <DropdownMenuItem>
                    <Mail className="w-4 h-4 mr-2" />
                    <span>Email</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <MessageSquare className="w-4 h-4 mr-2" />
                    <span>Message</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <PlusCircle className="w-4 h-4 mr-2" />
                    <span>More...</span>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOut className="w-4 h-4 mr-2" />
            <span>Log out</span>
            <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
