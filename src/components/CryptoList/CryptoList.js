"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import "./cryptoList.css"

export function CryptoList({ cryptos = [] }) {
  const [searchText, setSearchText] = useState("")
  const [sortBy, setSortBy] = useState("marketCap")
  const [sortOrder, setSortOrder] = useState("down")
  const [allCryptos, setAllCryptos] = useState([])

  useEffect(() => {
    async function fetchAll() {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false")

      const data = await res.json()
      const mapped = data.map((coin) => ({
        id: coin.id,
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h,
        marketCap: coin.market_cap,
        volume24h: coin.total_volume,
      }))
      setAllCryptos(mapped)
    }

    fetchAll()
  }, [])

  const baseCryptos = searchText.trim() ? allCryptos : cryptos

  const filteredCryptos = baseCryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(searchText.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchText.toLowerCase())
  )

  const sortedCryptos = [...filteredCryptos].sort((a, b) => {
    if (sortOrder === "up") {
      return a[sortBy] - b[sortBy]
    } else {
      return b[sortBy] - a[sortBy]
    }
  })

  function handleSort(field) {
    if (sortBy === field) {
      setSortOrder(sortOrder === "down" ? "up" : "down")
    } else {
      setSortBy(field)
      setSortOrder("down")
    }
  }

  function getSortArrow(field) {
    if (sortBy !== field) return null
    return sortOrder === "up" ? "↑" : "↓"
  }

  return (
    <div className="crypto-list">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search cryptocurrency..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div style={{ overflowX: "auto" }}>
        <table className="crypto-table">
          <thead className="table-header">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th style={{ textAlign: "right" }}>
                <button className="sort-button" onClick={() => handleSort("price")}>Price {getSortArrow("price")}</button>
              </th>
              <th style={{ textAlign: "right" }}>
                <button className="sort-button" onClick={() => handleSort("change24h")}>24h % {getSortArrow("change24h")}</button>
              </th>
              <th style={{ textAlign: "right" }}>
                <button className="sort-button" onClick={() => handleSort("marketCap")}>Market Cap {getSortArrow("marketCap")}</button>
              </th>
              <th style={{ textAlign: "right" }}>
                <button className="sort-button" onClick={() => handleSort("volume24h")}>Volume (24h) {getSortArrow("volume24h")}</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedCryptos.map((crypto, index) => (
              <tr key={crypto.id} className="crypto-row">
                <td className="crypto-cell" style={{ color: "#000000" }}>{index + 1}</td>
                <td className="crypto-cell">
                  <Link href={`/crypto/${crypto.id}`} className="crypto-name-cell">
                    <div className="crypto-icon">
                      <span className="crypto-symbol">{crypto.symbol.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="crypto-name">{crypto.name}</div>
                      <div className="crypto-symbol-small">{crypto.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="crypto-cell" style={{ textAlign: "right", fontWeight: "500", color: "#10b981" }}>
                  ${crypto.price.toFixed(2)}
                </td>
                <td className="crypto-cell" style={{ textAlign: "right", fontWeight: "500", color: crypto.change24h >= 0 ? "#10b981" : "#ef4444" }}>
                  {crypto.change24h >= 0 ? "+" : ""}{crypto.change24h.toFixed(2)}%
                </td>
                <td className="crypto-cell" style={{ textAlign: "right", color: "#10b981" }}>${(crypto.marketCap / 1000000000).toFixed(2)}B</td>
                <td className="crypto-cell" style={{ textAlign: "right", color: "#10b981" }}>${(crypto.volume24h / 1000000000).toFixed(2)}B</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
