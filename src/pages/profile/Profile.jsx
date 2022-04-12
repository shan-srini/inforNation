import './Profile.css';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Profile() {
    return (
        <Container className='profile-page-container'>
            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'Profile'}
                </Typography>
            </Box>
            <Container className='section-body'>
                <p>
                    UI coming soon!
                </p>
            </Container>
        </Container>
    )
}