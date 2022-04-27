import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

// Icon is optional prop
export default function NavMenuListing({
	label,
	route,
	Icon,
	iconHeight,
	iconWidth,
	iconStroke,
	closeMenu,
}) {
	const navigate = useNavigate();

	const goToRoute = (route) => {
		closeMenu();
		navigate(route);
	};

	return (
		<div
			className='nav-menu-listing'
			onClick={() => {
				goToRoute(route);
			}}
		>
			<Typography variant='h5' style={{ fontSize: 32, marginRight: 8 }}>
				{label}
			</Typography>
			{Icon && (
				<Icon
					iconHeight={iconHeight}
					iconWidth={iconWidth}
					iconStroke={iconStroke}
				/>
			)}
		</div>
	);
}
