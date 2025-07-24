// src/app/crypto/[id]/page.js

import { fetchCryptoById, fetchCryptoChartData } from "@/lib/crypto-data"
import ChartSection from "@/components/ChartSection/ChartSection"
import styles from "./cryptoDetail.module.css"

export default async function CryptoDetail({ params }) {
  const id = params.id

  const crypto = await fetchCryptoById(id)
  const chartData = await fetchCryptoChartData(id)

  return (
    <div className={`container ${styles.detailWrapper}`}>
      <div className={styles.header}>
        <img src={crypto.image} alt={crypto.name} width={64} height={64} />
        <div>
          <h1 className={styles.name}>{crypto.name}</h1>
          <div className={styles.symbol}>{crypto.symbol}</div>
        </div>
      </div>

      <div className={styles.marketInfo}>
        <h2>Market Info</h2>
        <div className={styles.grid}>
          {[
            `Price: $${crypto.price.toLocaleString()}`,
            `24h Change: ${crypto.change24h.toFixed(2)}%`,
            `Market Cap: $${crypto.marketCap.toLocaleString()}`,
            `Rank: #${crypto.rank}`,
            `Volume (24h): $${crypto.volume24h.toLocaleString()}`,
            `Circulating Supply: ${crypto.circulatingSupply.toLocaleString()}`,
            `ATH: $${crypto.ath.toLocaleString()}`,
            `ATL: $${crypto.atl.toLocaleString()}`
          ].map((text, i) => (
            <div key={i}>{text}</div>
          ))}
        </div>
      </div>

      <ChartSection data={chartData} />

      {crypto.description && (
        <div className={styles.description}>
          <h2>Description</h2>
          <div dangerouslySetInnerHTML={{ __html: crypto.description }} />
        </div>
      )}
    </div>
  )
}
