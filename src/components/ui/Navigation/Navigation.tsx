import type { FC, PropsWithChildren, ReactNode } from 'react'
import cn from 'classnames'
import NavigationItem from './NavigationItem/NavigationItem'

import styles from './navigation.module.scss'

interface NavigationProps extends PropsWithChildren {
  startContent?: ReactNode
  endContent?: ReactNode
  className?: string
  listClassName?: string
}

const Navigation: FC<NavigationProps> = ({
  className,
  listClassName,
  startContent,
  endContent,
  children,
}) => {
  return (
    <nav className={cn(className, styles.wrapper)}>
      {startContent}
      <ul className={cn(listClassName, styles.list)}>{children}</ul>
      {endContent}
    </nav>
  )
}

export default Object.assign(Navigation, { Item: NavigationItem })
