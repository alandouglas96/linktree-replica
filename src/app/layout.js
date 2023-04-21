import './globals.css'

export const metadata = {
  title: 'Linktree Replica',
  description: 'Linktree Replica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
