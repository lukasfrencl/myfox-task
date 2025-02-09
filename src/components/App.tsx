import * as React from 'react'
import { BrowserRouter } from 'react-router'
import { useSetAtom } from 'jotai'

import { useQueryWithFallback } from '../hooks/useQueryWithFallback'

import { getCustomer, getCustomerMock } from '../api/getCustomer'

import { DEFAULT_CUSTOMER_ID } from '../config'

import { Layout } from './layout/Layout'
import { Routes } from './Routes'

import { customerAtom } from '../state/customerAtom'

export const App: React.FC = () => {
  const setCustomer = useSetAtom(customerAtom)
  const { loading, error, data } = useQueryWithFallback(getCustomer, getCustomerMock, {
    variables: {
      id: DEFAULT_CUSTOMER_ID,
    }
  })

  React.useEffect(() => {
    setCustomer({ loading, error, data })
  }, [loading, error, data])

  return (
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>
  )
}
