import * as React from 'react'

import { IconButton, Menu as MuiMenu } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const MenuPaperConfiguration = {
  paper: {
    elevation: 0,
    sx: {
      overflow: 'visible',
      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
      mt: 1.5,
      '& .MuiAvatar-root': {
        width: 32,
        height: 32,
        ml: -0.5,
        mr: 1,
      },
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        right: 14,
        width: 10,
        height: 10,
        bgcolor: 'background.paper',
        transform: 'translateY(-50%) rotate(45deg)',
        zIndex: 0,
      },
    },
  },
}

interface Props {
  Content: React.FC<{ handleClose: () => void }>
  Button?: React.FC<{ handleClick: (event: React.MouseEvent<HTMLElement>) => void }>
}

export const Menu: React.FC<Props> = ({ Content, Button }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <React.Fragment>
      {Button ? (
        <Button handleClick={handleClick} />
      ) : (
        <IconButton onClick={handleClick}>
          <MenuIcon />
        </IconButton>
      )}
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={MenuPaperConfiguration}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Content handleClose={handleClose} />
      </MuiMenu>
    </React.Fragment>
  )
}
