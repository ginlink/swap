import { DefaultTheme } from 'styled-components'
import base from './base'
import { lightColors } from './colors'
import { light as lightAlert } from '../components/Alert/theme'
import { light as lightCard } from '../components/Card/theme'
import { light as lightRadio } from '../components/Radio/theme'
import { light as lightNav } from '../widgets/Menu/theme'
import { light as lightModal } from '../widgets/Modal/theme'
import { light as lightPancakeToggle } from '../components/PancakeToggle/theme'

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  colors: lightColors,

  modal: lightModal,
  alert: lightAlert,
  card: lightCard,
  nav: lightNav,
  radio: lightRadio,
  pancakeToggle: lightPancakeToggle,
}

export default lightTheme
