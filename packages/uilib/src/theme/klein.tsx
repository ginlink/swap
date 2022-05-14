import { DefaultTheme } from 'styled-components'
import base from './base'
import { kleinColors } from './colors'

import { klein as kleinAlert } from '../components/Alert/theme'
import { klein as kleinCard } from '../components/Card/theme'
import { klein as kleinRadio } from '../components/Radio/theme'
import { klein as kleinNav } from '../widgets/Menu/theme'
import { klein as kleinModal } from '../widgets/Modal/theme'
import { klein as kleinPancakeToggle } from '../components/PancakeToggle/theme'

const kleinTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: kleinColors,

  modal: kleinModal,
  alert: kleinAlert,
  card: kleinCard,
  nav: kleinNav,
  radio: kleinRadio,
  pancakeToggle: kleinPancakeToggle,
}

export default kleinTheme
