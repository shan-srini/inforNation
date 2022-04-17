import React from 'react';
import './Home.css';
import content from '../../content/pages/home';
import { Container } from '@mui/material';
import CategoryCarousel from '../../components/categoryCarousel/categoryCarousel';
import SearchBar from '../../components/searchBar/SearchBar';

export default function Landing({ hasCentralHomeSearchBar }) {
	return (
		<Container id='landing-home'>
			{hasCentralHomeSearchBar &&
			<div className='central-search-bar'>
				<SearchBar placeholder='Quick search...' textFieldVariant='filled'/>
			</div>}

			{content.map((category) => (
				<CategoryCarousel category={category} />
			))}
		</Container>
	);
};