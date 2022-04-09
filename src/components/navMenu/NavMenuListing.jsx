import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

// Icon is optional prop
export default function NavMenuListing({ label, href, Icon, iconHeight, iconWidth, iconStroke }) {
    const navigate = useNavigate()

    const navToRoute = () => {
        navigate('/')
    }

    return (
        <div onClick={navToRoute} style={{display: 'flex', alignItems: 'center'}}>
            <Typography variant='h5'>{label}</Typography>
            {Icon && <Icon iconHeight={iconHeight} iconWidth={iconWidth} iconStroke={iconStroke}/>}
        </div>
    )
}