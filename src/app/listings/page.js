"use client"

import { useEffect, useState } from "react"
import CryptoCard from "@/components/CryptoCard/CryptoCard"

export default function ListingsPage() {
  const [cryptos, setCryptos] = useState([])
  const [searchText, setSearchText] = useState("")

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false"
      )
      const data = await res.json()

      const cleaned = data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        marketCap: coin.market_cap,
        change24h: coin.price_change_percentage_24h,
        image: coin.image,
      }))

      setCryptos(cleaned)
    }

    fetchData()
  }, [])

  const filtered = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(searchText.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>All Listings</h1>

      <div style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Search cryptocurrency..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "0.75rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ddd",
            fontSize: "1rem"
          }}
        />
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {filtered.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  )
}
