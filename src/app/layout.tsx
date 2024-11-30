import type { Metadata } from 'next/types'

import './globals.css'

export const metadata: Metadata = {
  title: 'Boilerplate Next.js'
}

function AppLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}

export default AppLayout
