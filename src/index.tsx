import React from 'react';
import ReactDOM from 'react-dom/client';

import { IntlProvider } from 'react-intl';

import Home from './components/Home/Home';
import { ColorSchemeProvider } from './context/ColorSchemeContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <ColorSchemeProvider>
        <Home />
      </ColorSchemeProvider>
    </IntlProvider>
  </React.StrictMode>
);
