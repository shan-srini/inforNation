import './SavedPosts.css';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

export default function SavedPosts() {
    return (
        <Container className='saved-posts-page-container'>
            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'Saved posts'}
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