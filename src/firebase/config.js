import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-6T7WCwe5GF_ZeKWVADeXGvBDqU-WHB8",
  authDomain: "xchain-15a16.firebaseapp.com",
  projectId: "xchain-15a16",
  storageBucket: "xchain-15a16.appspot.com",
  messagingSenderId: "740240382914",
  appId: "1:740240382914:web:1a189c8cd82963d5df145b",
  measurementId: "G-27H5J9JPY9",
}

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
