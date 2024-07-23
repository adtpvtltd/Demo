import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Box from '@mui/material/Box';

function Header() {
    return (
        <AppBar 
            position="static" 
            sx={{ 
                height: '4rem',
                backgroundColor: '#2d2b2b',
                '@media (max-width: 768px)': { display: 'none' }  
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '100%' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#a6b4a3', 
                            marginRight: 2,
                            fontSize: '0.8rem',
                            lineHeight: '2rem', 
                           
                            '@media (max-width: 768px)': { fontSize: '0.8rem' }  
                        }}
                    >
                        Welcome to Our store Luminous
                    </Typography>
                    <PhoneIcon 
                        sx={{ 
                            color: '#a6b4a3', 
                            marginRight: 1,
                            fontSize: '0.8rem',
                            lineHeight: '2rem', 
                            '@media (max-width: 768px)': { fontSize: '0.8rem' } 
                        }} 
                    />
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#a6b4a3',
                            fontSize: '0.8rem',
                           
                            lineHeight: '2rem', 
                            '@media (max-width: 768px)': { fontSize: '0.8rem' }  
                        }}
                    >
                        Call Us: 123 - 456 - 7890
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <FavoriteIcon 
                        sx={{ 
                            color: '#a6b4a3', 
                            marginRight: 1,
                            fontSize: '0.8rem', 
                            lineHeight: '2rem', 
                            '@media (max-width: 768px)': { fontSize: '0.8rem' }  
                        }} 
                    />
                    <PersonIcon 
                        sx={{ 
                            color: '#a6b4a3',
                            lineHeight: '2rem', 
                            fontSize: '0.8rem', 
                            '@media (max-width: 768px)': { fontSize: '0.8rem' }  
                        }} 
                    />
                    <Typography 
                        variant="body1" 
                        sx={{ 
                            color: '#a6b4a3', 
                            marginRight: 2,
                            fontSize: '0.8rem',
                           
                            lineHeight: '2rem', 
                            '@media (max-width: 768px)': { fontSize: '0.8rem' }  
                        }}
                    >
                        My Account
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
