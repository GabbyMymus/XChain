"use client"

import Link from "next/link"
import { useAuth } from "../../lib/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/config"
import { useRouter } from "next/navigation"
import "./Navbar.css"

export default function Navbar() {
  const { user } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut(auth)
    router.push("/login")
  }

  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Listings", path: "/listings" },
  { name: "Favourites", path: "/favourites" },
]


  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">XChain</Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}

          {user ? (
            <button onClick={handleLogout} className="nav-link logout-button">
              Logout
            </button>
          ) : (
            <Link href="/login" className="nav-link">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
