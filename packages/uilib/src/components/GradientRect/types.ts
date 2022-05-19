import { SpaceProps } from 'styled-system'

export const variants = {
  GREEN_VOILENT: 'greenVoilent',
  BLUE_VOILENT: 'blueVoilent',
} as const

export type Variant = typeof variants[keyof typeof variants]

export interface GradientRectProps extends SpaceProps {
  variant: Variant
}
