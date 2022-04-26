import React from 'react';
import { Typography, Box, CircularProgress } from '@mui/material';

export const calculateErrorColor = (value) => {
    if (value < 30) {
        return 'error';
    } else if (value < 50) {
        return 'warning';
    } else {
        return 'success';
    }
};

export default function ValidityIndicator(props) {
	return (
		<Box
			sx={{ position: 'relative', display: 'inline-flex' }}
			aria-label='validity'
		>
			<CircularProgress
				variant='determinate'
				{...props}
				color={calculateErrorColor(props.value)}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography variant='caption' component='div' color={'white'}>
					{props.value}
				</Typography>
			</Box>
		</Box>
	);
}