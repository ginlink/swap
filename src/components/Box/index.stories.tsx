import React, { useEffect, useMemo } from 'react'
import BoxComponent from './Box'
import FlexComponent from './Flex'
import GridComponent from './Grid'
import { Box as BoxComponent111 } from '../../plugins/dist'

export default {
  title: 'Components/Primitives',
  component: BoxComponent,
  argTypes: {},
}

export const Box: React.FC = () => {
  const a = useMemo(() => 123, [])

  useEffect(() => {
    console.log('[a]:', a)
  }, [a])

  return (
    <div>
      <BoxComponent as="p">Contains background, border, layout, position, and space from </BoxComponent>
    </div>
  )
}

export const Flex: React.FC = () => {
  return (
    <div>
      <p>Based on the Box component. You can apply any flexbox properties on the Flex component.</p>
      <FlexComponent justifyContent="space-between" mt="40px">
        <span>Left</span>
        <span>right</span>
      </FlexComponent>
      <FlexComponent justifyContent="center" mt="8px">
        <span>center</span>
      </FlexComponent>
    </div>
  )
}

export const Grid: React.FC = () => {
  return (
    <GridComponent
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      style={{ backgroundColor: '#7645D9' }}
    >
      <BoxComponent style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
      <BoxComponent style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
    </GridComponent>
  )
}

export const Box111: React.FC = () => {
  return (
    <GridComponent
      justifyItems="center"
      alignContent="center"
      gridTemplateColumns="1fr 1fr"
      gridColumnGap="16px"
      style={{ backgroundColor: '#7645D9' }}
    >
      <BoxComponent111 style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
      <BoxComponent111 style={{ backgroundColor: '#1fc7d4', width: '300px', height: '300px' }} />
    </GridComponent>
  )
}
