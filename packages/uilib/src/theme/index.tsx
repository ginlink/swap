import { FlattenSimpleInterpolation } from 'styled-components'
import { AlertTheme } from '../components/Alert/types'
import { CardTheme } from '../components/Card/types'
import { PancakeToggleTheme } from '../components/PancakeToggle/types'
import { RadioTheme } from '../components/Radio/types'
import { NavThemeType } from '../widgets/Menu/theme'
import { ModalTheme } from '../widgets/Modal/types'
import { Breakpoints, Colors, MediaQueries, Radii, Shadows, Spacing, ZIndices } from './types'

export interface MyTheme {
  siteWidth: number
  isDark: boolean
  colors: Colors

  alert: AlertTheme
  card: CardTheme
  nav: NavThemeType
  modal: ModalTheme
  radio: RadioTheme
  pancakeToggle: PancakeToggleTheme

  breakpoints: Breakpoints
  mediaQueries: MediaQueries
  spacing: Spacing
  shadows: Shadows
  radii: Radii
  zIndices: ZIndices

  // css snippets
  flexColumnNoWrap: FlattenSimpleInterpolation
  flexRowNoWrap: FlattenSimpleInterpolation
}

export { darkColors, lightColors } from './colors'
export { default as dark } from './dark'
export { default as light } from './light'
export { default as klein } from './klein'
export * from './base'
export * from './text'
export * from './types'
export * from './globalStyle'
