"use client"

import dynamic from "next/dynamic"

const CryptoChart = dynamic(() => import("../CryptoChart/CryptoChart"), { ssr: false })

export default function ChartSection({ data }) {
  return (
    <div style={{ marginTop: "3rem" }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>7-Day Price Chart</h2>
      <CryptoChart data={data} />
    </div>
  )
}
