import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import './index.css';
import { App } from 'App/App';
import { theme } from './AllExamples/EventBoard-example-2/constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/react-examples">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
