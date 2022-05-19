import React from 'react'
import styled from 'styled-components'
import { space, variant as systemVariant } from 'styled-system'
import variants from './theme'
import { GradientRectProps } from './types'

const GradientRectWrapper = styled.div<GradientRectProps>`
  width: 2px;
  height: 20px;

  ${space}
  ${systemVariant({
    variants,
  })}
`

export default function GradientRect({ variant, ...props }: GradientRectProps) {
  return <GradientRectWrapper variant={variant} {...props} />
}
