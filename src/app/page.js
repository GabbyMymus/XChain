// import { CryptoList } from "@/components/crypto-list"
// import HeroSection from "@/components/hero-section"

// // import Navbar from "../components/navbar"

// export default function Home() {
//   return (
//     <main>
//       {/* <Navbar /> */}
//       <HeroSection />
//       <div className="container">
//         <h2 className="page-title">Top Cryptocurrencies</h2>
//         <CryptoList />
//       </div>
//     </main>
//   )
// }







// import { fetchTopCryptos } from "@/lib/crypto-data";

// export default async function CryptoList() {
//   const cryptos = await fetchTopCryptos(10);

//   return (
//     <div className="crypto-grid">
//       {cryptos.map((coin) => (
//         <div key={coin.id} className="crypto-card">
//           <img src={coin.image} alt={coin.name} />
//           <h3>{coin.name} ({coin.symbol})</h3>
//           <p>Price: ${coin.price.toLocaleString()}</p>
//           <p>24h Change: {coin.change24h.toFixed(2)}%</p>
//           <p>Market Cap: ${coin.marketCap.toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// }




import styles from "./page.module.css";
import { fetchTopCryptos } from "@/lib/crypto-data";
import HeroSection from "@/components/hero-section";

export default async function Home() {
  const cryptos = await fetchTopCryptos(5);

  return (
    <div className={styles.page}>
      <HeroSection />

      <main className={styles.main}>
        <div className={styles.cryptoListContainer}>
          <ol className={styles.cryptoList}>
            {cryptos.map((crypto, index) => (
              <li key={crypto.id} className={index % 2 === 0 ? styles.itemEven : styles.itemOdd}>
                <div className={styles.cryptoItem}>
                  <div className={styles.cryptoTitle}>
                    <img src={crypto.image} alt={crypto.name} className={styles.cryptoIcon} />
                    <strong>{crypto.name} ({crypto.symbol})</strong>
                  </div>
                  <p>Price: <code>${crypto.price.toLocaleString()}</code></p>
                  <p>24h Change: <code>{crypto.change24h.toFixed(2)}%</code></p>
                  <p>Market Cap: <code>${crypto.marketCap.toLocaleString()}</code></p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </main>
    </div>
  );
}


