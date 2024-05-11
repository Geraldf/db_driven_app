import "@/styles/globals.css"

import { Viewport } from "next"
import { Inter } from "next/font/google"
import { auth } from "@/auth"
import { getLocale } from "@/i18n/server"
import { Toaster as DefaultToaster } from "@/registry/default/ui/toaster"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { LocaleProvider } from "@/hooks/locale-provider"
import { ThemeProvider } from "@/components/providers"
import SessionWrapper from "@/components/SessionWrapper"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeSwitcher } from "@/components/theme-switcher"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})
/*  */

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = getLocale()
  return (
    <SessionWrapper>
      <html lang={locale} suppressHydrationWarning className={inter.className}>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.className
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div vaul-drawer-wrapper="">
              <div className="relative flex min-h-screen flex-col bg-background font-sans">
                <LocaleProvider value={locale}>
                  <SiteHeader />
                  <main className="flex-1">{children}</main>
                  <SiteFooter />
                </LocaleProvider>
              </div>
            </div>
            <TailwindIndicator />
            <ThemeSwitcher />

            <DefaultToaster />
          </ThemeProvider>
        </body>
      </html>
    </SessionWrapper>
  )
}
