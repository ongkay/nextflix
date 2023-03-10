import { Inter as FontSans } from '@next/font/google'

import '@/styles/globals.css'
import { Toaster } from '@/ui/toaster'

import { cn } from '@/lib/utils'
import Providers from '@/components/providers'
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
      <html
        lang="en"
        className={cn(
          'dark bg-white font-sans text-slate-900 antialiased',
          fontSans.variable
        )}
      >
        <body className="min-h-screen font-sans antialiased bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-50">
          <Providers>
            <Toaster />
            <SiteHeader />
            <TooltipProvider>
              <main>{children}</main>
            </TooltipProvider>
          </Providers>
        </body>
      </html>
    </>
  )
}
