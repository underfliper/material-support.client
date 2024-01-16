import Link from 'next/link'
import Container from '@/components/Container/Container'
import { FaVk } from 'react-icons/fa6'
import { FaTelegram } from 'react-icons/fa'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className={styles.contacts}>
          <h3>Контакты службы поддержки</h3>
          <Link title="Электронная почта" href="mail:example@mail.ru">
            example@mail.ru
          </Link>

          <Link title="Номер телефона" href="tel:+71234567890">
            +7 (123) 456-78-90
          </Link>
        </div>
        <div className={styles.social}>
          <h3>Социальные сети</h3>
          <Link
            title="Вконтакте"
            href="https://vk.com/knitu_official"
            target="_blank">
            <FaVk size={28} />
          </Link>

          <Link
            title="Телеграм"
            href="https://t.me/knitu_official"
            target="_blank">
            <FaTelegram size={28} />
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
