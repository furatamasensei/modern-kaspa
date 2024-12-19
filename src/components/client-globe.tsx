'use client'

import Globe from './ui/globe'

export default function ClientGlobe() {
  return (
    <Globe
      className="absolute top-72 inset-x-0 opacity-30 lg:top-1/3 lg:scale-150"
      config={{
        width: 800,
        height: 800,
        onRender: () => {},
        devicePixelRatio: 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: 0.4,
        mapSamples: 16000,
        mapBrightness: 1.2,
        baseColor: [1, 1, 1],
        markerColor: [45 / 255, 212 / 255, 191 / 255],
        glowColor: [45 / 255, 212 / 255, 191 / 255],
        markers: [
          { location: [14.5995, 120.9842], size: 0.03 },
          { location: [19.076, 72.8777], size: 0.1 },
          { location: [23.8103, 90.4125], size: 0.05 },
          { location: [30.0444, 31.2357], size: 0.07 },
          { location: [39.9042, 116.4074], size: 0.08 },
          { location: [-23.5505, -46.6333], size: 0.1 },
          { location: [19.4326, -99.1332], size: 0.1 },
          { location: [40.7128, -74.006], size: 0.1 },
          { location: [34.6937, 135.5022], size: 0.05 },
          { location: [41.0082, 28.9784], size: 0.06 },
        ],
      }}
    />
  )
}
