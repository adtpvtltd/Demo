import React, { useState } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#2b2b2b',
                color: '#cecece',
                display: isMobile ? 'none' : 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
                fontSize: '12px'
            }}
        >
            <Box display="flex" alignItems="center">
                <Typography variant="body1" sx={{ marginRight: '20px', fontSize: '12px' }}>
                    Welcome to Our store Luminous
                </Typography>
                <PhoneIcon sx={{ marginRight: '5px', fontSize: '12px' }} />
                <Typography variant="body1" sx={{ fontSize: '12px' }}>
                    Call Us: 123 - 456 - 7890
                </Typography>
            </Box>
            <Box display="flex" alignItems="center">
                <IconButton color="inherit" sx={{ fontSize: '12px' }}>
                    <FavoriteIcon sx={{ fontSize: '12px' }} />
                </IconButton>
                <Typography variant="body1" sx={{ marginLeft: '5px', cursor: 'pointer', fontSize: '12px' }} onClick={handleMenuOpen}>
                    My Account
                </Typography>
                <IconButton color="inherit" sx={{ fontSize: '12px' }} onClick={handleMenuOpen}>
                    <AccountCircleIcon sx={{ fontSize: '12px' }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '12px' }}>Login</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={{ fontSize: '12px' }}>Register</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default Header;
