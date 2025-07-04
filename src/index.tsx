import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { HashRouter } from 'react-router';

import { ColorSchemeProvider } from './context/color-scheme-context';
import App from './pages/app/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <IntlProvider messages={{}} locale="en" defaultLocale="en" textComponent={React.Fragment}>
      <ColorSchemeProvider>
        <HashRouter basename={process.env.PUBLIC_URL}>
          <App />
        </HashRouter>
      </ColorSchemeProvider>
    </IntlProvider>
  </React.StrictMode>
);
