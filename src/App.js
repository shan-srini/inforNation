
   
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Pages
import Home from './pages/home/Home';
import Article from './pages/article/Article';

const App = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/:id" element={<Article />} />
        </Routes>
      </BrowserRouter>
    )
}

export default App;
