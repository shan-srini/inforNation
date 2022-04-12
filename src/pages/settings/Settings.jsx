import './Settings.css';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function Settings() {
    return (
        <Container className='settings-page-container'>
            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'Settings'}
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