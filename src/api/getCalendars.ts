import { gql } from '@apollo/client'

// TODO: from unknown reason alias @gql-types is not working here
import { Calendar, CalendarState, Address, Shop, File, Microsite, Subject, Cart } from '../__generated__/types'

export const getCalendars = gql`
  query GetCalendars($customerId: ID!) {
    calendars(where: { customers_some: { id: $customerId } }) {
      id
      state
      from
      to
      shop {
        name
        address {
          street
          city
        }
        phone
      }
      subject {
        alias
        microsite {
          logo {
            id
            secret
          }
        }
      }
      carts {
        name
        price
      }
    }
  }
`

export const getCalendarsMock = (variables: Record<string, any>): Calendar[] => ([
  {
    id: '1',
    state: CalendarState.Open,
    from: new Date('2024-01-29 08:00'),
    to: new Date('2024-01-29 09:00'),
    shop: {
      name: 'Salon Kristýna',
      address: {
        street: 'Solní 4',
        city: 'Plzeň',
      } as Address,
      phone: 'tel 603 252 519',
    } as Shop,
    subject: {
      alias: '',
      microsite: {
        logo: {
          id: '',
          secret: '',
        } as File,
      } as Microsite,
    } as Subject,
    carts: [
      {
        name: 'Aromaterapeutická masáž',
        price: 1690,
      } as Cart,
    ],
  } as Calendar,
  {
    id: '2',
    state: CalendarState.Open,
    from: new Date('2024-03-14 10:00'),
    to: new Date('2024-03-14 11:00'),
    shop: {
      name: 'MD Pneuservis & Autoservis',
      address: {
        street: 'Nám. M. Horákové 23',
        city: 'Plzeň',
      } as Address,
      phone: 'tel 123 456 789',
    } as Shop,
    subject: {
      alias: '',
      microsite: {
        logo: {
          id: '',
          secret: '',
        } as File,
      } as Microsite,
    } as Subject,
    carts: [
      {
        name: 'Přezutí - letní pneu',
        price: 1200,
      } as Cart,
    ],
  } as Calendar,
])
