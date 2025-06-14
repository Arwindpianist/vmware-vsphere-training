import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Layout from './components/Layout'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'VMware vSphere Training Program',
  description: 'A comprehensive training program covering VMware vSphere administration, virtualization, and cloud infrastructure management.',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  )
} 