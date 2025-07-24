// "use client"

// import { useEffect, useState } from "react"
// import { doc, getDoc } from "firebase/firestore"
// import { db } from "../../firebase/config"
// import { useAuth } from "../../lib/AuthContext"
// import { useRouter } from "next/navigation"
// import CryptoCard from "../../components/CryptoCard/CryptoCard"
// import { fetchCryptoById } from "../../lib/crypto-data"
// import "./favourites.css"

// export default function FavouritesPage() {
//   const { user } = useAuth()
//   const [favourites, setFavourites] = useState([])
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   useEffect(() => {
//     if (user === null) {
//       router.push("/login")
//     } else if (user) {
//       fetchFavourites()
//     }
//   }, [user])

//   const fetchFavourites = async () => {
//     try {
//       const favRef = doc(db, "favourites", user.uid)
//       const favSnap = await getDoc(favRef)

//       if (favSnap.exists()) {
//         const { coins = [] } = favSnap.data()

//         const favDetails = await Promise.all(
//           coins.map(async (id) => {
//             try {
//               return await fetchCryptoById(id)
//             } catch (err) {
//               console.error("Error fetching coin:", id, err)
//               return null
//             }
//           })
//         )

//         setFavourites(favDetails.filter(Boolean))
//       } else {
//         setFavourites([])
//       }
//     } catch (err) {
//       console.error("Failed to fetch favourites:", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="favourites-container">
//       <h1>My Favourites</h1>
//       <div className="favourites-grid">
//         {loading && <p style={{ opacity: 0.6 }}>Loading...</p>}
//         {!loading && favourites.length === 0 && <p style={{ opacity: 0.6 }}>No favourites yet.</p>}
//         {!loading && favourites.map((crypto) => (
//           <CryptoCard key={crypto.id} crypto={crypto} />
//         ))}
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
import { useAuth } from "../../lib/AuthContext"
import { useRouter } from "next/navigation"
import CryptoCard from "../../components/CryptoCard/CryptoCard"
import { fetchCryptoById } from "../../lib/crypto-data"
import "./favourites.css"

export default function FavouritesPage() {
  const { user } = useAuth()
  const [favourites, setFavourites] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const favRef = doc(db, "favourites", user.uid)
        const favSnap = await getDoc(favRef)

        if (favSnap.exists()) {
          const { coins = [] } = favSnap.data()

          const favDetails = await Promise.all(
            coins.map(async (id) => {
              try {
                return await fetchCryptoById(id)
              } catch (err) {
                console.error("Error fetching coin:", id, err)
                return null
              }
            })
          )

          setFavourites(favDetails.filter(Boolean))
        } else {
          setFavourites([])
        }
      } catch (err) {
        console.error("Failed to fetch favourites:", err)
      } finally {
        setLoading(false)
      }
    }

    if (user === null) {
      router.push("/login")
    } else if (user) {
      fetchFavourites()
    }
  }, [user, router])

  return (
    <div className="favourites-container">
      <h1>My Favourites</h1>
      <div className="favourites-grid">
        {loading && <p style={{ opacity: 0.6 }}>Loading...</p>}
        {!loading && favourites.length === 0 && <p style={{ opacity: 0.6 }}>No favourites yet.</p>}
        {!loading && favourites.map((crypto) => (
          <CryptoCard key={crypto.id} crypto={crypto} />
        ))}
      </div>
    </div>
  )
}
