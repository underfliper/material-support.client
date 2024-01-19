import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/Container/Container'
import { MdKeyboardArrowRight } from 'react-icons/md'
import background from '@/assets/img/apply_background.svg'

import styles from './home.module.scss'

const Home = () => {
  return (
    <Container className={styles.home}>
      <h1 className={styles.title}>
        Система для электронной подачи заявлений на выделение материальной
        помощи
      </h1>
      <div className={styles.content}>
        <div className={styles.information}>
          <div className={styles['information-login']}>
            <p>
              Для того чтобы пользоваться данной системой, Вам необходимо войти
              в свой личный кабинет.
            </p>
            <Link className={styles['login-link']} href="/">
              Войти
            </Link>
          </div>
          <div className={styles['useful-links']}>
            <h2>Полезные ссылки</h2>
            <ul>
              <li>
                <Link href="https://www.kstu.ru/" target="_blank">
                  <MdKeyboardArrowRight /> <span>Официальный сайт КНИТУ</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.kstu.ru/article.jsp?id_e=20015"
                  target="_blank">
                  <MdKeyboardArrowRight />
                  <span>Информация о стипендиальном обеспечении</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.kstu.ru/1leveltest.jsp?idparent=1240"
                  target="_blank">
                  <MdKeyboardArrowRight />
                  <span>Профсоюзная организация (Профком)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.image}>
          <Image src={background} alt="Фоновое изображение" />
        </div>
      </div>
    </Container>
  )
}

export default Home
