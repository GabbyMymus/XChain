"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ]

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          XChain
        </Link>

        <nav className="nav-links">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {menuOpen && (
        <nav className="mobile-menu">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
