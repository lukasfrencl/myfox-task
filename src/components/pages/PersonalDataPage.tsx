import * as React from 'react'

import { Alert, Container, Typography } from '@mui/material'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'

import { PersonalDataForm } from '../content/PersonalDataForm'

export const PersonalDataPage: React.FC = () => (
  <Container sx={{ my: 2 }}>
    <Typography variant="h5" sx={{ mb: 1 }}>Osobní údaje</Typography>
    <Alert
      iconMapping={{
        success: <InfoOutlinedIcon />,
      }}
    >
      Údaje se použijí v příštích rezervacích, které se tím zrychlí.
    </Alert>
    <PersonalDataForm />
  </Container>
)
