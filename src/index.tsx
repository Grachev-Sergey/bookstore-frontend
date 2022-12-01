import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { store } from './store';
import { GlobalStyle } from './utils/theme/globalStyles';
import { baseTheme } from './utils/theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
        <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
        </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
