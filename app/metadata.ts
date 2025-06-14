import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'VMware vSphere Training',
    template: '%s | VMware vSphere Training'
  },
  description: 'A comprehensive training program for VMware vSphere, covering virtualization concepts, ESXi, vCenter Server, networking, storage, and more.',
  keywords: [
    'VMware',
    'vSphere',
    'ESXi',
    'vCenter Server',
    'virtualization',
    'training',
    'course',
    'education'
  ],
  authors: [
    {
      name: 'Your Organization',
      url: 'https://your-organization.com'
    }
  ],
  creator: 'Your Organization',
  publisher: 'Your Organization',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'VMware vSphere Training',
    description: 'A comprehensive training program for VMware vSphere, covering virtualization concepts, ESXi, vCenter Server, networking, storage, and more.',
    siteName: 'VMware vSphere Training'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VMware vSphere Training',
    description: 'A comprehensive training program for VMware vSphere, covering virtualization concepts, ESXi, vCenter Server, networking, storage, and more.',
    creator: '@your-organization'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ]
} 