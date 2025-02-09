import * as React from 'react'
import { useAtomValue } from 'jotai'

import { Box, Button, FormControl, InputBase, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { alpha, styled } from '@mui/material/styles'

import { customerAtom } from '../../state/customerAtom'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid',
    borderColor: '#E0E3E7',
    padding: '6px 8px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const StyledInputBox = styled(Box)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
}))

interface InputProps {
  label: string
  value: string
}

const Input: React.FC<InputProps> = ({ label, value }) => (
  <FormControl variant="standard" sx={{ width: '100%', mb: 2 }}>
    <InputLabel shrink sx={{ fontSize: '1.2rem' }}>{label}</InputLabel>
    <BootstrapInput defaultValue={value} />
  </FormControl>
)

const PhoneInput: React.FC<InputProps> = ({ label, value }) => {
  const parts = value.split(' ')
  const dialcode = parts[0]
  const number = parts.slice(1).join(' ')
  return (
    <FormControl variant="standard" sx={{ width: '100%', mb: 2 }}>
      <InputLabel shrink sx={{ fontSize: '1.2rem' }}>{label}</InputLabel>
      <StyledInputBox sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Select
          variant="outlined"
          value={dialcode}
          sx={{ width: '105px', p: 1, '& div': { p: 0 } }}
        >
          <MenuItem value="+420">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/CZ_Flag.png" alt="cz" width={25} />
              <Typography variant="body2" sx={{ ml: 1 }}>+420</Typography>
            </Box>
          </MenuItem>
        </Select>
        <BootstrapInput defaultValue={number} sx={{ flexGrow: 1, ml: 2 }} />
      </StyledInputBox>
    </FormControl>
  )
}

export const PersonalDataForm: React.FC = () => {
  const customer = useAtomValue(customerAtom)

  if (customer.loading) return <p>Loading...</p>
  if (customer.error) return <p>Error : {customer.error.message}</p>

  return (
    <>
      <Box sx={{ mt: 2 }}>
        <Input label="Jméno" value={customer.data?.name ?? ''} />
        <Input label="Příjmení" value={customer.data?.surname ?? ''} />
        <Input label="E-mail" value={customer.data?.email ?? ''} />
        <PhoneInput label="Telefon" value={customer.data?.phone ?? ''} />
      </Box>
      <Box sx={{ mt: 3, width: '100%', textAlign: 'center' }}>
        <Button color="success" variant="contained" disableElevation sx={{ width: '100%' }}>Uložit</Button>
      </Box>
      <Box sx={{ mt: 1, width: '100%', textAlign: 'center' }}>
        <Button color="success" sx={{ textTransform: 'none' }}>Změnit heslo</Button>
      </Box>
    </>
  )
}
