import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { MdErrorOutline } from 'react-icons/md'
import cn from 'classnames'

import styles from './field.module.scss'

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Field = forwardRef<HTMLInputElement, FieldProps>(
  ({ name, label, type, className, error, onChange, ...props }, ref) => {
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [isEmpty, setIsEmpty] = useState<boolean>(
      props.value || props.defaultValue ? false : true,
    )

    return (
      <div className={cn(className, styles.wrapper)}>
        <div className={cn(styles.field, error && styles.error)}>
          <input
            className={styles.input}
            id={name}
            name={name}
            type={visiblePassword ? 'text' : type}
            ref={ref}
            onChange={(e) => {
              setIsEmpty(e.target.value === '')
              onChange && onChange(e)
            }}
            {...props}
          />
          <label
            className={cn(styles.label, !isEmpty && styles.notEmpty)}
            htmlFor={name}>
            {label}
          </label>
          {type === 'password' && (
            <button
              className={styles.showPassword}
              type="button"
              onClick={() => setVisiblePassword((prev) => !prev)}>
              {visiblePassword ? (
                <IoEyeOffOutline title="Скрыть пароль" />
              ) : (
                <IoEyeOutline title="Показать пароль" />
              )}
            </button>
          )}
        </div>
        {error && (
          <div className={styles.errorMessage}>
            <MdErrorOutline />
            <span>{error}</span>
          </div>
        )}
      </div>
    )
  },
)

export default Field
