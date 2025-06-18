import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  numberOfColumns: 2 | 3 | 4
}

export default function GridLayout({ children, numberOfColumns }: Props) {
  const grids = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }

  return <div className={'grid grid-gap-4' + grids[numberOfColumns]}>{children}</div>
}
