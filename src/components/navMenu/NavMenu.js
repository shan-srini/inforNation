import React from 'react';
import './NavMenu.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';

import { NavMenuListing, SavedPostsIcon, ProfileIcon, SettingsIcon } from '../'
import constants from '../../constants'

const NavMenu = ({ closeMenu }) => {
  const menuListings = [
    <NavMenuListing label='About' route={constants.aboutRoute} />,
    <NavMenuListing label='Saved' route={constants.savedPostsRoute} Icon={SavedPostsIcon} iconHeight='32' iconWidth='32' iconStroke='white' />,
    <NavMenuListing label='Profile' route={constants.profileRoute} Icon={ProfileIcon} iconHeight='32' iconWidth='32' iconStroke='white' />,
    <NavMenuListing label='Settings' route={constants.settingsRoute} Icon={SettingsIcon} iconHeight='32' iconWidth='32' iconStroke='white' />,
  ]

  return (
    <div className='menu-inner-container'>
      <div className='menu'>
        <div className='menu-top-bar'>
          <MenuIcon onClick={closeMenu} className='inner-menu-icon-button' />
          <Typography variant='h3'>Menu</Typography>
        </div>

        <div style={{display: 'grid', gap: 10}}>
          {menuListings.map((MenuListing) => MenuListing)}
        </div>

      </div>
      <div onClick={closeMenu} className='menu-close-space' />
    </div>
  )
}

export default NavMenu;
