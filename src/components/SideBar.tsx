'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import {
  CreditCard,
  Keyboard,
  LayoutGrid,
  Library,
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

import { siteConfig } from '@/config/site'
import { Icons } from '@/components/icons'
import { MainNav } from '@/components/main-nav'
import { ThemeToggle } from '@/components/theme-toggle'
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
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

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
    <div className="grid grid-cols-4 xl:grid-cols-6">
      <aside className="sticky top-0 self-start h-screen col-span-1 border-r border-r-slate-700">
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
      <main className="col-span-3 xl:col-span-5">
        <>
          <ProfileTab />
          {children}
        </>
      </main>
    </div>
  )
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
