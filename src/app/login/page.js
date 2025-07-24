"use client"

import { useState, useEffect } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase/config"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { onAuthStateChanged } from "firebase/auth"
import "./Login.css"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // Don't push here — wait for auth state to confirm
    } catch (err) {
      setError("Login failed. Check your credentials.")
      setLoading(false)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("/")
      }
    })
    return () => unsubscribe()
  }, [router])

  return (
    <div className="auth-container">
      <form onSubmit={handleLogin} className="auth-form">
        <h2>Login to XChain</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        {error && <div className="error">{error}</div>}
        <button type="submit" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
        <p>
          Don't have an account? <Link href="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}
