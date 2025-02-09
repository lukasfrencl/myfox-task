import React from 'react'
import ReactDOM from 'react-dom/client'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import CssBaseline from '@mui/material/CssBaseline'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { App } from './components/App'

import { GRAPHQL_URL, GRAPHQL_AUTHORIZATION } from './config'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: GRAPHQL_AUTHORIZATION,
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
