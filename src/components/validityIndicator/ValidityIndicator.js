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

export const calculateErrorColorText = (value) => {
    if (value < 30) {
        return '#f44336';
    } else if (value < 50) {
        return '#ffeb3b';
    } else {
        return '#43a047';
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
				<Typography variant='caption' component='div' color={calculateErrorColorText(props.value)}>
					{props.value}
				</Typography>
			</Box>
		</Box>
	);
}