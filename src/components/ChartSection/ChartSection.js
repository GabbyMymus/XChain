"use client"

import dynamic from "next/dynamic"

const CryptoChart = dynamic(() => import("../CryptoChart/CryptoChart"), { ssr: false })

// export default function ChartSection({ data }) {
//   return (
//     <div style={{ marginTop: "3rem" }}>
//       <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>7-Day Price Chart</h2>
//       <CryptoChart data={data} />
//     </div>
//   )
// }


export default function ChartSection({ data }) {
  return (
    <div style={{
      marginTop: "2rem",
      padding: "1.5rem",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 16px rgba(0,0,0,0.05)"
    }}>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>7-Day Price Chart</h2>
      <CryptoChart data={data} />
    </div>
  )
}
