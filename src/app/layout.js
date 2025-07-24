import "./globals.css"
import Navbar from "../components/Navbar/Navbar"
import { AuthProvider } from "@/lib/AuthContext"

export const metadata = {
  title: "XChain Crypto Tracker",
  description: "Track your crypto assets",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="page-content">{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
