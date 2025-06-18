import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  numberOfColumns: number
}

export default function GridLayout({ children, numberOfColumns }: Props) {
  const gridSpan = `grid-cols-${numberOfColumns}`

  return <div className={`grid gap-4` + gridSpan}>{children}</div>
}
