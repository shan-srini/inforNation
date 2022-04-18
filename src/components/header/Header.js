import React, { useState } from 'react';
import './Header.css';
import {
	Container,
	Slide,
	Box,
	Toolbar,
	AppBar,
	Typography,
} from '@mui/material';

import constants from '../../constants'
import SearchBar from '../searchBar/SearchBar';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NavMenu from '../navMenu/NavMenu';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header({ hasCentralHomeSearchBar}) {
	const navigate = useNavigate();
	const currentPath = useLocation().pathname;
	const [menuVisible, setMenuVisible] = useState(false);

	const goHome = () => {
		navigate('/');
	};

	return (
		<>
			<Slide direction='right' mountOnEnter unmountOnExit in={menuVisible}>
				<div className='menu-container'>
					<NavMenu closeMenu={() => setMenuVisible(false)} />
				</div>
			</Slide>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static'>
					<Toolbar>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}
							onClick={() => setMenuVisible(true)}
						>
							<MenuIcon />
						</IconButton>
						<div onClick={goHome} className='home-logo'>
							<Typography variant='h4' fontSize={'5vw'}>
								inforNation
							</Typography>
						</div>
						{(!hasCentralHomeSearchBar || currentPath !== constants.homeRoute) &&
						<Container>
							<SearchBar placeholder='Search...' textFieldVariant='standard'/>
						</Container>}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};