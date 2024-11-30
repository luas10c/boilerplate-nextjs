import './globals.css'

function AppLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{props.children}</body>
    </html>
  )
}

export default AppLayout
