import React from 'react';
import './Home.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Stack, Box } from '@mui/material';
import { styled } from '@mui/system';


const theme = createTheme({
  palette: {
    background: {
      default: '#6ef675'
    }
  }
})

const Item = styled('div')(({ theme }) => ({
  maxWidth: '60%',
  backgroundColor: '#2bf24f',
  padding: theme.spacing(2),
  textAlign: 'center',
  borderRadius: 4,
  border: '1px solid black',
  ...theme.applyStyles('dark', {
    backgroundColor: '#262B32',
  }),
}));

function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
      }}>

        <Stack
          spacing={2}
          sx={{
            justifyContent: 'center'
          }}
        >
          <Item>Link</Item>
          <Item>Link 2</Item>
          <Item>Link 3</Item>
        </Stack>
      </Box>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default Home;
