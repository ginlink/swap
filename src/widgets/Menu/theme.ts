import { darkColors, kleinColors, lightColors } from '../../theme/colors'

export interface NavThemeType {
  background: string
}

export const light: NavThemeType = {
  background: lightColors.backgroundAlt,
}

export const dark: NavThemeType = {
  background: darkColors.backgroundAlt,
}

export const klein: NavThemeType = {
  background: kleinColors.backgroundAlt,
}
