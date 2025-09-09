import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NANO Studio - Premium AI Video Production',
    short_name: 'NANO Studio',
    description: 'Advanced AI video production for global brands using neural rendering and custom model training',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/nano-logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
