import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function Ways() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/cart" exact element={<Cart />} />
    </Routes>
  );
}
