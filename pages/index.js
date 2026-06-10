import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home(){
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('gestor')

  function onSubmit(e){
    e.preventDefault()
    localStorage.setItem('siren_user', JSON.stringify({ email, role }))
    router.push('/dashboard')
  }

  return (
    <>
      <Head>
        <title>SIREN — Login</title>
      </Head>

      <div className="split left">
        <div className="centered">
          <h1 className="brand">SIREN</h1>
          <p className="tag">Sistema Integrado de Resposta a Eventos Naturais</p>
        </div>
      </div>

      <div className="split right">
        <div className="login-card">
          <h2>Login</h2>
          <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />

            <label htmlFor="password">Senha</label>
            <input id="password" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />

            <label htmlFor="role">Logar como</label>
            <select id="role" value={role} onChange={e=>setRole(e.target.value)}>
              <option value="gestor">Gestor</option>
              <option value="bombeiro">Bombeiro</option>
              <option value="defesa_civil">Defesa Civil</option>
              <option value="prefeitura">Prefeitura</option>
            </select>

            <button type="submit" className="btn">Entrar</button>
          </form>
        </div>
      </div>
    </>
  )
}
