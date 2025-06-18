import Link from 'next/link'

export default async function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">Annazzz</Link>
      <Link href="/illustrazioni">Illustrazioni</Link>
    </nav>
  )
}
