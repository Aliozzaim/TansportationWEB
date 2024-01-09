import { DM_Sans } from "next/font/google"
const dmSansInit = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dmsans",
})
import "./globals.css"
import { PrimeReactProvider, PrimeReactContext } from "primereact/api"
import Header from "./components/Header"
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSansInit.variable}`}>
      <head></head>
      <body
        className={`pt-[23px] h-screen container flex flex-col mx-auto px-[2rem] bg-[#141414] dmsans`}
      >
        <Header />
        <main className="items-center mt-8">
          <PrimeReactProvider>{children}</PrimeReactProvider>
        </main>
      </body>
    </html>
  )
}
