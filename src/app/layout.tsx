import './globals.css'
import type { Metadata } from 'next'
import localFont from "next/font/local"
// import { Nunito } from 'next/font/google'

// const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const TrapFont = localFont({
  src: [
    {
      path:"../../public/fonts/Trap_v1.1/Trap-Regular.otf",
      style: "normal"
    },{
      path:"../../public/fonts/Trap_v1.1/Trap-Medium.otf",
      style: "normal"
    },{
      path:"../../public/fonts/Trap_v1.1/Trap-SemiBold.otf",
      style: "normal"
    },{
      path:"../../public/fonts/Trap_v1.1/Trap-Bold.otf",
      style: "normal"
    }, {
      path:"../../public/fonts/Trap_v1.1/Trap-ExtraBold.otf",
      style: "normal"
    }, {
      path:"../../public/fonts/Trap_v1.1/Trap-Black.otf",
      style: "normal"
    }
  ]}
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={TrapFont.className}>{children}</body>
    </html>
  )
}
