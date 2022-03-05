import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from './theme'
import { StyledEngineProvider } from '@mui/material/styles';


ReactDOM.render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
     <StyledEngineProvider injectFirst>
     <App />
     </StyledEngineProvider>
    
   </ThemeProvider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);

