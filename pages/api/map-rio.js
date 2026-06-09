import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  const imgPath = path.join(process.cwd(), 'images', 'map-rio.png')

  if (fs.existsSync(imgPath)) {
    const stat = fs.statSync(imgPath)
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Length', stat.size)
    const stream = fs.createReadStream(imgPath)
    stream.pipe(res)
  } else {
    // return a small SVG placeholder when image not found
    const svg = `<?xml version="1.0" encoding="UTF-8"?>
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="420">
        <rect width="100%" height="100%" fill="#e8eef8" />
        <text x="50%" y="50%" font-size="20" text-anchor="middle" fill="#334">Mapa não encontrado\nColoque images/map-rio.png</text>
      </svg>`
    res.setHeader('Content-Type', 'image/svg+xml')
    res.status(404).send(svg)
  }
}
