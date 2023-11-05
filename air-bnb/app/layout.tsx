import './globals.css'
import { Nunito } from "next/font/google";


export const metadata: Metadata = {
  title: 'Air Bbn',
  description: 'Air bnb clone',
}

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
