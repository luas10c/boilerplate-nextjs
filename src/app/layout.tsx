import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  display: 'swap'
})

function AppLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>{props.children}</body>
    </html>
  )
}

export default AppLayout
