import React from 'react';

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
