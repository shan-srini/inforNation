import './Settings.css';
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

import SettingSwitch from '../../components/settings/SettingSwitch'

export default function Settings({ hasCentralHomeSearchBar_state }) {
    const toggleCentralHomeSearchBar = () => {
        hasCentralHomeSearchBar_state.setter(!hasCentralHomeSearchBar_state.value)
    }
    return (
        <Container className='settings-page-container'>
            <Box className='section-heading'>
                <Typography variant='h3' textAlign='left'>
                    {'Settings'}
                </Typography>
            </Box>
            <Container className='section-body'>
                <SettingSwitch onClick={toggleCentralHomeSearchBar} labelTxt={'Enable theme: central homepage search bar'} isChecked={hasCentralHomeSearchBar_state.value}/>
            </Container>
        </Container>
    )
}