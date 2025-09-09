import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'NANO Studio - Premium AI Video Production for Global Brands'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
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
              fontSize: '64px',
              fontWeight: 'bold',
              margin: '0 0 20px 0',
              background: 'linear-gradient(45deg, #ffffff, #e0e7ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            NANO Studio
          </h1>
          <p
            style={{
              fontSize: '32px',
              margin: '0',
              opacity: 0.9,
              maxWidth: '800px',
              lineHeight: 1.2,
            }}
          >
            Premium AI Video Production for Global Brands
          </p>
          <p
            style={{
              fontSize: '20px',
              margin: '20px 0 0 0',
              opacity: 0.8,
              maxWidth: '600px',
            }}
          >
            Advanced Neural Rendering • Custom Model Training • Production-Grade AI Video Synthesis
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
