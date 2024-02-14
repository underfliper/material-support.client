import {
  IoFileTrayFullOutline,
  IoLogOutOutline,
  IoPersonAddOutline,
  IoPersonOutline,
  IoReaderOutline,
  IoSettingsOutline,
} from 'react-icons/io5'

export const studentSidebar = [
  {
    url: '/profile/about',
    content: (
      <>
        <IoPersonOutline size={20} />
        <span>Обо мне</span>
      </>
    ),
  },
  {
    url: '/profile/applications',
    content: (
      <>
        <IoFileTrayFullOutline size={20} />
        <span>Мои заявления</span>
      </>
    ),
  },
  {
    url: '/profile/settings',
    content: (
      <>
        <IoSettingsOutline size={20} />
        <span>Настройки</span>
      </>
    ),
  },
  {
    url: '/auth/signout',
    content: (
      <>
        <IoLogOutOutline size={20} />
        <span>Выйти</span>
      </>
    ),
  },
]

export const adminSidebar = [
  {
    url: '/manage/categories',
    content: (
      <>
        <IoReaderOutline size={20} />
        <span>Изменить категории</span>
      </>
    ),
  },
  {
    url: '/manage/support-types',
    content: (
      <>
        <IoReaderOutline size={20} />
        <span>Изменить виды поддержки</span>
      </>
    ),
  },
  {
    url: '/manage/add-employee',
    content: (
      <>
        <IoPersonAddOutline size={20} />
        <span>Добавить сотрудника</span>
      </>
    ),
  },
  {
    url: '/manage/add-student',
    content: (
      <>
        <IoPersonAddOutline size={20} />
        <span>Добавить студента</span>
      </>
    ),
  },
  {
    url: '/auth/signout',
    content: (
      <>
        <IoLogOutOutline size={20} />
        <span>Выйти</span>
      </>
    ),
  },
]
