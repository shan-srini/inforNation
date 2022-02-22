
   
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Landing from './pages/landing/Landing';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;