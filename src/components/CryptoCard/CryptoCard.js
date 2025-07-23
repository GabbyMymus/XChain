"use client"

import Link from "next/link"

export default function CryptoCard({ crypto }) {
  return (
    <Link
      href={`/crypto/${crypto.id}`}
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        textDecoration: "none",
        color: "#111"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
        <img src={crypto.image} alt={crypto.name} width={40} height={40} />
        <div>
          <div style={{ fontSize: "1.1rem", fontWeight: "600" }}>{crypto.name}</div>
          <div style={{ fontSize: "0.9rem", color: "#666" }}>{crypto.symbol}</div>
        </div>
      </div>

      <div style={{ fontSize: "1rem", fontWeight: "500", color: "#10b981" }}>
        {crypto.price !== undefined ? `$${crypto.price.toFixed(2)}` : "Price N/A"}
      </div>

    </Link>
  )
}
