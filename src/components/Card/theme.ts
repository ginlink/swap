import { darkColors, kleinColors, lightColors } from '../../theme/colors'
import { shadows } from '../../theme/base'
import { CardTheme } from './types'

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    blue: lightColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: lightColors.gradients.violet,
  },
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    blue: darkColors.gradients.blue,
    bubblegum: lightColors.gradients.bubblegum,
    violet: darkColors.gradients.violet,
  },
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}

export const klein: CardTheme = {
  background: kleinColors.backgroundAlt,
  boxShadow: shadows.level1,
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: kleinColors.gradients.cardHeader,
    blue: kleinColors.gradients.blue,
    bubblegum: kleinColors.gradients.bubblegum,
    violet: kleinColors.gradients.violet,
  },
  dropShadow: 'drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))',
}
