import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/ReactotronConfig';

import Routes from './routes/index';

import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
