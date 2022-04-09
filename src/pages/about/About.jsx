import './About.css';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, CircularProgress, Typography, Container } from '@mui/material';
import 'react-flow-renderer/dist/style.css';

import aboutContent from '../../content/pages/about';

export default function About() {
    return (
        aboutContent ?
            <Container className='about-page-container'>
                <Box className='about-page-heading'>
                    <Typography className='about-page-title' variant='h3' textAlign='left' style={{ maxWidth: '75%', }}>
                        {aboutContent.title}
                    </Typography>
                </Box>
                <Container className='about-page-body'>
                    {aboutContent.body}
                </Container>
            </Container>
            :
            <CircularProgress />
    )
}