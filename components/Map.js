import { useState } from 'react'
import ReactMapGL from 'react-map-gl'

export default function Map() {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 11
  })

  return (
    <ReactMapGL
      mapStyle={process.env.MAP_STYLE}
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
    </ReactMapGL>
  )
}
