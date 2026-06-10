import { useState, useRef } from 'react'

export default function MapRJ(){
  const [scale, setScale] = useState(1)
  const wrapperRef = useRef(null)

  function zoomIn(){ setScale(s => Math.min(2, Math.round((s+0.1)*10)/10)) }
  function zoomOut(){ setScale(s => Math.max(0.5, Math.round((s-0.1)*10)/10)) }

  // marker positions use percentages relative to the image dimensions
  const markers = [
    { id: 1, left: '25%', top: '56%', size: 36 },
    { id: 2, left: '40%', top: '42%', size: 30 },
    { id: 3, left: '58.75%', top: '66%', size: 32 }
  ]

  return (
    <div className="map-wrapper" ref={wrapperRef} style={{transform:`scale(${scale})`,transformOrigin:'center'}}>
      <div className="map-controls" style={{position:'absolute',top:12,right:12,zIndex:3,display:'flex',flexDirection:'column',gap:8}}>
        <button onClick={zoomIn} aria-label="Zoom in">+</button>
        <button onClick={zoomOut} aria-label="Zoom out">−</button>
      </div>

      {/* Load the PNG from the project `images/` folder via API route */}
      <img src="/api/map-rio" alt="Mapa do Rio de Janeiro" className="map-image" />

      <div className="map-overlay" aria-hidden>
        {markers.map(m => (
          <div
            key={m.id}
            className="map-marker"
            style={{
              left: m.left,
              top: m.top,
              width: m.size + 'px',
              height: m.size + 'px',
              marginLeft: `-${m.size/2}px`,
              marginTop: `-${m.size/2}px`
            }}
          />
        ))}
      </div>
    </div>
  )
}
