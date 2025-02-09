import * as React from 'react'

import { Routes as ReactRouterRoutes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'
import { MyBookingsPage } from './pages/MyBookingsPage'
import { PersonalDataPage } from './pages/PersonalDataPage'

export const Routes: React.FC = () => (
  <ReactRouterRoutes>
    <Route path="/" element={<HomePage />} />
    <Route path="my-bookings" element={<MyBookingsPage />} />
    <Route path="personal-data" element={<PersonalDataPage />} />
  </ReactRouterRoutes>
)
