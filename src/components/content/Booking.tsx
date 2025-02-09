import * as React from 'react'

import { Box, Button, Card, Typography, ButtonOwnProps } from '@mui/material'

import { grey } from '@mui/material/colors'

import { Calendar } from '@gql-types'

import { Menu } from '../layout/Menu'
import { BookingMenu } from './BookingMenu'

interface BookingActionButtonProps extends ButtonOwnProps {
  label: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

const BookingActionButton: React.FC<BookingActionButtonProps> = ({label, ...other}) => (
  <Button variant="contained" size="small" {...other} sx={{textTransform: 'none', bgcolor: grey['300'], color: grey['800'], ...(other?.sx ?? {})}}>{label}</Button>
)

interface BookingMenuButtonProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

const BookingMenuButton: React.FC<BookingMenuButtonProps> = ({  handleClick }) => (
  <BookingActionButton label="..." onClick={handleClick} sx={{ minWidth: 'initial' }} />
)

interface Props {
  data: Calendar
}

export const Booking: React.FC<Props> = ({ data }) => {
  return (
    <Card>
      <Box sx={{display: 'flex', flexDirection: 'row', p: 2}}>
        <Box>
          <Box sx={{width: '84px', height: '84px', backgroundColor: grey[400]}}>
            {/* TODO: image */}
          </Box>
        </Box>
        <Box sx={{ml: 2, flexGrow: 1}}>
          <Box sx={{mb: 2}}>
            <Typography variant="body1" fontWeight="bold">{data.shop?.name}</Typography>
            <Typography variant="body2" sx={{ color: grey['500'] }}>{data.shop?.address?.street}, {data.shop?.address?.city}</Typography>
            <Typography variant="body2" sx={{ color: grey['500'] }}>{data.shop?.phone}</Typography>
          </Box>
          <Box sx={{mb: 2}}>
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '14px' }}>{data.carts?.[0]?.name}</Typography>
            <Typography variant="body1" sx={{ fontSize: '14px' }}>{data.from.toLocaleTimeString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</Typography>
            <Typography variant="body2" sx={{ color: grey['500'] }}>{/* TODO: datetime diff in local */}60 minut, {data.carts?.[0]?.price} Kč</Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <BookingActionButton label="Trasa" />
            <Box flexGrow={1}/>
            <BookingActionButton label="Zavolat" />
            <Box flexGrow={1}/>
            <Menu Content={BookingMenu} Button={BookingMenuButton}/>
          </Box>
        </Box>
      </Box>
    </Card>
  )
}
