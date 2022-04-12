import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import constants from './constants'
import theme from './theme.js';
import Header from './components/header/Header.js';
// Pages
import About from './pages/about/About';
import Article from './pages/article/Article';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import SavedPosts from './pages/saved-posts/SavedPosts';
import Search from './pages/search/Search';
import Settings from './pages/settings/Settings';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={constants.aboutRoute} element={<About />} />
          <Route path={constants.articlesRoute} element={<Article />} />
          <Route path={constants.homeRoute} element={<Home />} />
          <Route path={constants.profileRoute} element={<Profile />} />
          <Route path={constants.savedPostsRoute} element={<SavedPosts />} />
          <Route path={constants.searchRoute} element={<Search />} />
          <Route path={constants.settingsRoute} element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App;
