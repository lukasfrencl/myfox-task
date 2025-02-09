import * as React from 'react'

import { Container, Typography } from '@mui/material'
import Grid from '@mui/material/Grid2'

import { useQueryWithFallback } from '../../hooks/useQueryWithFallback'

import { getCalendars, getCalendarsMock } from '../../api/getCalendars'

import { DEFAULT_CUSTOMER_ID } from '../../config'

import { Booking } from '../content/Booking'

const Bookings: React.FC = () => {
  const { loading, error, data } = useQueryWithFallback(getCalendars, getCalendarsMock, {
    variables: {
      customerId: DEFAULT_CUSTOMER_ID,
    },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <Grid container spacing={2}>
      {data?.map((booking) => (
        <Grid key={booking.id} size={{ xs: 12, sm: 8, md: 6, lg: 4 }}>
          <Booking data={booking} />
        </Grid>
      ))}
    </Grid>
  )
}

export const MyBookingsPage: React.FC = () => (
  <Container sx={{ my: 2 }}>
    <Typography variant="h5" sx={{ mb: 1 }}>Moje rezervace</Typography>
    <Bookings />
  </Container>
)
