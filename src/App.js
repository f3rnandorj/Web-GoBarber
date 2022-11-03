import React from 'react';

import './config/ReactotronConfig';

import { BrowserRouter } from 'react-router-dom';
import Ways from './routes';

function App() {
  return (
    <BrowserRouter>
      <Ways />
    </BrowserRouter>
  );
}

export default App;
