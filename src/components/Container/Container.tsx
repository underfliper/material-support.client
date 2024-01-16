import React, { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './container.module.scss'

interface ContainerProps extends PropsWithChildren {
  className?: string
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container
