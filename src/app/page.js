import { fetchTopCryptos } from "@/lib/crypto-data"
import { CryptoList } from "@/components/CryptoList/CryptoList"
import HeroSection from "@/components/HeroSection/HeroSection"

export default async function Home() {
  const topCryptos = await fetchTopCryptos(5)

  return (
    <main>
      <HeroSection />
      <div className="container">
        <h2 className="page-title">Top Cryptocurrencies</h2>
        <CryptoList cryptos={topCryptos} />
      </div>
    </main>
  )
}





