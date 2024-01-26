import { FC } from 'react'
import cn from 'classnames'
import { BiLoaderAlt } from 'react-icons/bi'

import styles from './loader.module.scss'

interface LoaderProps {
  className?: string
}

const Loader: FC<LoaderProps> = ({ className }) => {
  return <BiLoaderAlt className={cn(className, styles.loader)} />
}

export default Loader
