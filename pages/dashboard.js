import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import MapRJ from '../components/MapRJ'
import EventCard from '../components/EventCard'

export default function Dashboard(){
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const raw = localStorage.getItem('siren_user')
    if(!raw){
      router.replace('/')
      return
    }
    setUser(JSON.parse(raw))
  },[router])

  if(!user) return null

  return (
    <>
      <Head>
        <title>SIREN — Painel</title>
      </Head>
      <Navbar user={user} />

      <main className="container">
        <section className="map-area">
          <div className="map-card">
            <MapRJ />
          </div>
        </section>

        <aside className="events-area">
          <h3>Eventos Ativos</h3>
          <EventCard title="Enchente — Zona Oeste" lines={["Chuva: 120 mm nas últimas 24h","Criticidade: Alto"]} />
          <EventCard title="Calor Extremo — Zona Norte" lines={["Temperatura: 39°C","Criticidade: Moderado"]} />
        </aside>
      </main>
    </>
  )
}
