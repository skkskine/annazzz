import Link from 'next/link'

export default async function Navbar() {
  return (
    <nav className="flex justify-between p-4">
      <Link href="/">Annazzz</Link>
      <div>
        <Link href="/illustrazioni" className="mr-3">
          Illustrazioni
        </Link>
        <Link href="/about">Contatti</Link>
      </div>
    </nav>
  )
}
