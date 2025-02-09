import * as React from 'react'

import { Toolbar, Typography } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { styled } from '@mui/material/styles'
import { green } from '@mui/material/colors'

import { Menu } from './Menu'

import { CustomerMenu } from '../content/CustomerMenu'

import { LOGO_URL } from '../../config'

const StyledAppBar = styled(MuiAppBar)(({ theme }) => ({
  background: theme.palette.grey['100'],
  color: theme.palette.grey['800'],
  borderBottomStyle: 'solid',
  borderBottomWidth: '4px',
  borderBottomColor: green['500'],
}))

const StyledLogo = styled('img')(({ theme }) => ({
  height: '18px',
}))

export const AppBar: React.FC = () => {
  return (
    <StyledAppBar position="fixed" elevation={0}>
      <Toolbar>
        <StyledLogo src={LOGO_URL} alt="logo" />
        <Typography variant="body2" component="div" fontWeight="bold" sx={{ flexGrow: 1, ml: 1, textTransform: 'uppercase' }}>Rezervační systém</Typography>
        <Menu Content={CustomerMenu} />
      </Toolbar>
    </StyledAppBar>
  )
}
