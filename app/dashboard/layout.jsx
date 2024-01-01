"use client"

// import Navigation from "../Navigation"

export default function RootLayout({ children }) {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="h-screen w-screen flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}
