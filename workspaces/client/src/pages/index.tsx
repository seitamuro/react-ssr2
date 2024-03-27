import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { CounterPage } from './CounterPage';
import { TopPage } from './TopPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TopPage />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
};
