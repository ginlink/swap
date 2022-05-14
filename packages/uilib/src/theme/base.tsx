import { css } from 'styled-components'
import { MediaQueries, Breakpoints, Spacing, Shadows, Radii, ZIndices } from './types'

export const breakpointMap: { [key: string]: number } = {
  xs: 0,
  sm: 500,
  md: 720,
  lg: 960,
  xl: 1280,
}

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`)

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,

  xsUp: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  smUp: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  mdUp: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lgUp: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xlUp: `@media screen and (min-width: ${breakpointMap.xl}px)`,

  xsDown: `@media screen and (max-width: ${breakpointMap.xs}px)`,
  smDown: `@media screen and (max-width: ${breakpointMap.sm}px)`,
  mdDown: `@media screen and (max-width: ${breakpointMap.md}px)`,
  lgDown: `@media screen and (max-width: ${breakpointMap.lg}px)`,
  xlDown: `@media screen and (max-width: ${breakpointMap.xl}px)`,
}

export const shadows: Shadows = {
  level1: '0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)',
  level10: '0px 4px 30px 0px rgba(204, 210, 231, 0.5)',
  active: '0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)',
  success: '0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)',
  warning: '0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)',
  focus: '0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)',
  inset: 'inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)',
  tooltip: '0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)',
}

const spacing: Spacing = [0, 4, 8, 16, 24, 32, 48, 64]

const radii: Radii = {
  small: '4px',
  medium: '8px',
  default: '16px',
  card: '24px',
  circle: '50%',
}

const zIndices: ZIndices = {
  ribbon: 9,
  dropdown: 10,
  modal: 100,
}

export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  zIndices,

  flexColumnNoWrap: css`
    display: flex;
    flex-flow: column nowrap;
  `,
  flexRowNoWrap: css`
    display: flex;
    flex-flow: row nowrap;
  `,
}
