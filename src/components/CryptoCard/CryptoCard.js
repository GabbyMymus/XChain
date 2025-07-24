"use client"

import Link from "next/link"
import { useAuth } from "../../lib/AuthContext"
import { useRouter } from "next/navigation"
import { doc, setDoc, getDoc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from "@/firebase/config"
import { useState } from "react"
import { AiOutlineStar, AiFillStar } from "react-icons/ai"
import "./CryptoCard.css"

export default function CryptoCard({ crypto }) {
  const { user } = useAuth()
  const router = useRouter()
  const [favourited, setFavourited] = useState(false)

  const toggleFavourite = async (e) => {
    e.preventDefault()
    if (!user) {
      router.push("/login")
      return
    }

    const favRef = doc(db, "favourites", user.uid)
    const snapshot = await getDoc(favRef)

    if (!snapshot.exists()) {
      await setDoc(favRef, { coins: [crypto.id] })
    } else {
      await updateDoc(favRef, {
        coins: arrayUnion(crypto.id),
      })
    }

    setFavourited(true)
  }

  return (
    <Link href={`/crypto/${crypto.id}`} className="crypto-card">
      <button className="fav-button" onClick={toggleFavourite}>
        {favourited ? <AiFillStar color="#facc15" size={20} /> : <AiOutlineStar size={20} />}
      </button>

      <div className="card-header">
        <img src={crypto.image} alt={crypto.name} width={40} height={40} />
        <div>
          <div className="crypto-name">{crypto.name}</div>
          <div className="crypto-symbol">{crypto.symbol}</div>
        </div>
      </div>

      <div className="crypto-price">
        {crypto.price !== undefined ? `$${crypto.price.toFixed(2)}` : "Price N/A"}
      </div>
    </Link>
  )
}
