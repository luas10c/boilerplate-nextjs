import './globals.css'

export default function AppLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
