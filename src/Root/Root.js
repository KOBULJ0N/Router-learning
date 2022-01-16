import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import Navbar from '../Components/Navbar';
import News from '../Components/News';
import { Work } from '../Components/Work';

import NotFound from '../Components/NotFound';

export const Root = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/news' element={<Navbar />} />
        <Route path='/work' element={<Navbar />} />
      </Routes>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/work' element={<Work />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
};
