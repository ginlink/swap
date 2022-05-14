export type Breakpoints = string[]

export type MediaQueries = {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string

  xsUp: string
  xsDown: string
  smUp: string
  smDown: string
  mdUp: string
  mdDown: string
  lgUp: string
  lgDown: string
  xlUp: string
  xlDown: string
}

export type Spacing = number[]

export type Radii = {
  small: string
  medium: string
  default: string
  card: string
  circle: string
}

export type Shadows = {
  level1: string
  level10: string
  active: string
  success: string
  warning: string
  focus: string
  inset: string
  tooltip: string
}

export type Gradients = {
  bubblegum: string
  inverseBubblegum: string
  cardHeader: string
  blue: string
  violet: string
  violetAlt: string
  violetAlt2: string
  gold: string
}

export type Color = string

export type Colors = {
  primary: string
  primaryBright: string
  primaryDark: string
  secondary: string
  tertiary: string
  success: string
  failure: string
  warning: string
  cardBorder: string
  contrast: string
  dropdown: string
  dropdownDeep: string
  invertedContrast: string
  input: string
  inputSecondary: string
  bg6: string
  background: string
  bg0: string
  bg1: string
  bg2: string
  bg3: string
  bg4: string
  bg5: string
  backgroundDisabled: string
  backgroundAlt: string
  backgroundAlt2: string
  text: string
  text1: string
  text2: string
  text3: string
  text4: string
  text5: string
  textDisabled: string
  textSubtle: string
  disabled: string

  // Gradients
  gradients: Gradients

  // Additional colors
  binance: string
  overlay: string
  gold: string
  silver: string
  bronze: string
  blue: string
  darkGray: string
  white: string
  black: string
}

export type ZIndices = {
  ribbon: number
  dropdown: number
  modal: number
}
