import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@emotion/react';
import './index.css';
import { App } from 'App/App';
import { theme } from './EventBoard-example-2/constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
