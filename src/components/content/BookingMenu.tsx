import * as React from 'react'

import { MenuItem } from '@mui/material'

interface Props {
  handleClose: () => void
}

export const BookingMenu: React.FC<Props> = ({ handleClose }) => {
  return (
    <>
      <MenuItem onClick={handleClose}>Vytvořit další rezervaci</MenuItem>
      <MenuItem onClick={handleClose}>Přidat do kalendáře</MenuItem>
      <MenuItem onClick={handleClose}>Přidat do kontaktů</MenuItem>
    </>
  )
}

