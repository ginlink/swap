import { DefaultTheme } from 'styled-components'
import base from './base'
import { darkColors } from './colors'

import { dark as darkAlert } from '../components/Alert/theme'
import { dark as darkCard } from '../components/Card/theme'
import { dark as darkRadio } from '../components/Radio/theme'
import { dark as darkNav } from '../widgets/Menu/theme'
import { dark as darkModal } from '../widgets/Modal/theme'
import { dark as darkPancakeToggle } from '../components/PancakeToggle/theme'

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  colors: darkColors,

  modal: darkModal,
  alert: darkAlert,
  card: darkCard,
  nav: darkNav,
  radio: darkRadio,
  pancakeToggle: darkPancakeToggle,
}

export default darkTheme
