import * as React from 'react'

import { Box } from '@mui/material'

import { AppBar } from './AppBar'
import { HeaderSpacer } from './HeaderSpacer'

interface Props {
  children?: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <Box component="main" sx={{ width: '100%', height: '100%' }}>
        <HeaderSpacer />
        {children}
      </Box>
    </Box>
  )
}
