import { gql } from '@apollo/client'

import { Customer } from '@gql-types'

export const getCustomer = gql`
  query GetCustomer($id: ID!) {
    customer(where: { id: $id }) {
      id
      name
      surname
      email
      phone
    }
  }
`

export const getCustomerMock = (variables: Record<string, any>): Customer => ({
  id: variables.id,
  name: 'Petr',
  surname: 'Zákazník',
  email: 'petr@gmail.com',
  phone: '+420 123 456 789',
} as Customer)
