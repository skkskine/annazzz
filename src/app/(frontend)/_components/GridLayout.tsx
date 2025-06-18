import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  numberOfColumns: number
}

export default function GridLayout({ children, numberOfColumns }: Props) {
  const gridSpan = numberOfColumns || 4

  return <div className={`grid grid-cols-4 gap-4`}>{children}</div>
}
