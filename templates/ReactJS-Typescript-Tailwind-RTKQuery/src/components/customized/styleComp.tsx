import { styled, TextField } from '@mui/material'


export const Textfield = styled(TextField)(() => ({
  borderRadius: '10px',
  position: 'relative',
//   backgroundColor: '#f9f9f9',
border: '1px solid #D9D9D9',
  color: 'black',
  fontSize: 16,
  '&:focus': {
      border: '1px solid #007bff',
  },
  [`& fieldset`]: {
      border: "none",
      padding: "0px"
  },
}));
