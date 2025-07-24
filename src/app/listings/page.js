"use client"
import { useEffect, useState } from "react"
import CryptoCard from "../../components/CryptoCard/CryptoCard"

export default function ListingsPage() {
  const [cryptos, setCryptos] = useState([])
  const [searchText, setSearchText] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const cryptosPerPage = 20

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
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

  const totalPages = Math.ceil(filtered.length / cryptosPerPage)
  const startIndex = (currentPage - 1) * cryptosPerPage
  const currentCryptos = filtered.slice(startIndex, startIndex + cryptosPerPage)

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
        {currentCryptos.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: currentPage === 1 ? "#eee" : "white",
            cursor: currentPage === 1 ? "not-allowed" : "pointer"
          }}
        >
          Prev
        </button>
        <span style={{ alignSelf: "center" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            background: currentPage === totalPages ? "#eee" : "white",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer"
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
