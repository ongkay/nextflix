import { Inter as FontSans } from '@next/font/google'

import '@/styles/globals.css'
import { Toaster } from '@/ui/toaster'

import { cn } from '@/lib/utils'
import Providers from '@/components/providers'
import { SideBar } from '../components/SideBar'
import { SiteHeader } from '../components/site-header'
import { TooltipProvider } from '../components/ui/tooltip'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-inter',
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            'min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-50',
            fontSans.variable
          )}
        >
          <Providers>
            <Toaster />
            <SideBar>
              {/* <main>{children}</main> */}
              {children}
            </SideBar>
          </Providers>
        </body>
      </html>
    </>
  )
}
