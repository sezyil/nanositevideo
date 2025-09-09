import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NANO Studio - Premium AI Video Production'
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #8b5cf6 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #ffffff, #f0f9ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            NANO Studio
          </h1>
          <p
            style={{
              fontSize: '28px',
              margin: '0',
              opacity: 0.95,
              maxWidth: '700px',
              lineHeight: 1.3,
            }}
          >
            AI Video Production for Global Brands
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
