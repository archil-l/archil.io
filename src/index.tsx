import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';

import Home from './components/Home/Home';
import { ColorSchemeProvider } from './context/color-scheme-context';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <IntlProvider messages={{}} locale="en" defaultLocale="en" textComponent={React.Fragment}>
      <ColorSchemeProvider>
        <Home />
      </ColorSchemeProvider>
    </IntlProvider>
  </React.StrictMode>
);
