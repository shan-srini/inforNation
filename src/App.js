import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import theme from './theme.js';
import Header from './components/header/Header.js';
// Pages
import Home from './pages/home/Home';
import Article from './pages/article/Article';
import Search from './pages/search/Search';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/articles/:id' element={<Article />} />
					<Route path='/search' element={<Search />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
