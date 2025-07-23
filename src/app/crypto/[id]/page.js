import { fetchCryptoById, fetchCryptoChartData } from "@/lib/crypto-data"
import ChartSection from "@/components/ChartSection/ChartSection"

export default async function CryptoDetail({ params }) {
  const crypto = await fetchCryptoById(params.id)
  const chartData = await fetchCryptoChartData(params.id)

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <img src={crypto.image} alt={crypto.name} width={64} height={64} />
        <div>
          <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>{crypto.name}</h1>
          <div style={{ fontSize: "1.2rem", color: "#666" }}>{crypto.symbol}</div>
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Market Info</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
          <div>Price: ${crypto.price.toLocaleString()}</div>
          <div>24h Change: {crypto.change24h.toFixed(2)}%</div>
          <div>Market Cap: ${crypto.marketCap.toLocaleString()}</div>
          <div>Rank: #{crypto.rank}</div>
          <div>Volume (24h): ${crypto.volume24h.toLocaleString()}</div>
          <div>Circulating Supply: {crypto.circulatingSupply.toLocaleString()}</div>
          <div>ATH: ${crypto.ath.toLocaleString()}</div>
          <div>ATL: ${crypto.atl.toLocaleString()}</div>
        </div>
      </div>

      <ChartSection data={chartData} />

      {crypto.description && (
        <div style={{ marginTop: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Description</h2>
          <div style={{ lineHeight: "1.6" }} dangerouslySetInnerHTML={{ __html: crypto.description }} />
        </div>
      )}
    </div>
  )
}
