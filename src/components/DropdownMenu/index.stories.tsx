import { BrowserRouter } from 'react-router-dom'
import { Box } from '../Box'
import DropdownMenu from './DropdownMenu'
import ItemsMock from './mock'
import React from 'react'

export default {
  title: 'Components/Menu/DropdownMenu',
  component: DropdownMenu,
}

export const Default: React.FC = () => {
  return (
    <BrowserRouter>
      <Box width="300px">
        <DropdownMenu items={ItemsMock} activeItem="/swap">
          Wallet
        </DropdownMenu>
      </Box>
    </BrowserRouter>
  )
}
