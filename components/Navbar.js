import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar({ user }){
  const router = useRouter()

  function logout(){
    localStorage.removeItem('siren_user')
    router.push('/')
  }

  return (
    <header className="topbar">
      <div className="logo">SIREN</div>
      <nav className="menu">
        <Link href="#">Painel de Controle</Link>
        <Link href="#">Eventos</Link>
        <Link href="#">Forças</Link>
        <Link href="#">Relatórios</Link>
        <button className="btn-ghost" onClick={logout}>Sair</button>
      </nav>
    </header>
  )
}
