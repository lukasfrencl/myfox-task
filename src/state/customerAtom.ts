import { atom } from 'jotai'

import { Customer } from '@gql-types'

type CustomerAtom = {
  loading: boolean
  error: Error | undefined
  data: Customer | undefined
}

export const customerAtom = atom<CustomerAtom>({ loading: false, error: undefined, data: undefined })
