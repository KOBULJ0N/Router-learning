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
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/work' element={<Work />} />
              <Route path='*' element={<NotFound/>} />
      </Routes>
    </div>
  );
};
