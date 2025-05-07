import { CryptoList } from "@/components/crypto-list"
import  HeroSection from "@/components/hero-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container">
        <h2 className="page-title">Top Cryptocurrencies</h2>
        <CryptoList />
      </div>
    </main>
  )
}
