import { FC } from 'react'
import cn from 'classnames'
import { BiLoaderAlt } from 'react-icons/bi'

import styles from './loader.module.scss'

interface LoaderProps {
  className?: string
  size?: string | number
}

const Loader: FC<LoaderProps> = ({ className, size }) => {
  return (
    <div className={cn(className, styles.wrapper)}>
      <BiLoaderAlt size={size} className={styles.loader} />
    </div>
  )
}

export default Loader
