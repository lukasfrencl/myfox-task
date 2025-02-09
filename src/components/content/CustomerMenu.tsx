import * as React from 'react'
import { Link } from 'react-router'
import { useAtomValue } from 'jotai'

import { Avatar, Box, Divider, MenuItem, Typography } from '@mui/material'

import { customerAtom } from '../../state/customerAtom'

const stringAvatar = (name: string): string => `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`

interface Props {
  handleClose: () => void
}

export const CustomerMenu: React.FC<Props> = ({ handleClose }) => {
  const customer = useAtomValue(customerAtom)

  if (customer.loading) return <p>Loading...</p>
  if (customer.error) return <p>Error : {customer.error.message}</p>

  const fullName = `${customer.data?.name} ${customer.data?.surname}`
  return (
    <>
      <MenuItem component={Link} to="/" onClick={handleClose}>
        <Avatar>{stringAvatar(fullName)}</Avatar>
        <Box sx={{ ml: 1 }}>
          <Typography variant="body2" component="div" fontWeight="bold">{fullName}</Typography>
          <Typography variant="body2" component="div">{customer.data?.email}</Typography>
        </Box>
      </MenuItem>
      <Divider variant="middle" />
      <MenuItem component={Link} to="/my-bookings" onClick={handleClose}>Moje rezervace</MenuItem>
      <MenuItem component={Link} to="/personal-data" onClick={handleClose}>Osobní údaje</MenuItem>
      <MenuItem onClick={handleClose}>Odhlásit</MenuItem>
    </>
  )
}

