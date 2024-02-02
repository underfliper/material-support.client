import type { LinkProps } from 'next/link'
import type { UrlObject } from 'url'
import { FC, ButtonHTMLAttributes, ComponentType } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Loader from '../Loader/Loader'

import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string | UrlObject
  as?: ComponentType<LinkProps>
  variant?: 'primary' | 'light'
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  as,
  href,
  variant = 'primary',
  isLoading = false,
  ...props
}) => {
  if (as === Link) {
    if (!href) {
      throw new Error('The "href" prop is required when using Link component.')
    }

    return (
      <Link className={cn(className, styles.link, styles[variant])} href={href}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={cn(className, styles.button, styles[variant])}
      {...props}>
      {isLoading ? (
        <>
          Загрузка <Loader className={styles.loader} />
        </>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
