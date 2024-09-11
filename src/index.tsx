import React from 'react';
import ReactDOM from 'react-dom/client';

import { IntlProvider } from 'react-intl';

import Home from './components/Home/Home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <Home />
    </IntlProvider>
  </React.StrictMode>
);
