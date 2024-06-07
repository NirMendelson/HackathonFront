import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Container, IconButton, Box } from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './HomePage.css'; // CSS file import for global styles

function HomePage() {
    const navigate = useNavigate();
    const [showSessions, setShowSessions] = useState(false);
    const sessionDates = ["May 28, 2023", "May 26, 2023", "May 20, 2023", "May 15, 2023", "May 14, 2023"];

    // Function to navigate to the session page with state
    function handleNavigate() {
        navigate('/session', { state: { startSession: true } });
    }

    // Function to toggle the display of session dates
    function toggleSessions() {
        setShowSessions(!showSessions);
    }

    return (
        <Container sx={{
            fontFamily: 'Poppins, sans-serif', // Apply Poppins font to all text
            width: '375px',
            height: '667px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#e7f3f6',
            border: '3px solid #000000',
            borderRadius: '10px',
            overflow: 'hidden',
        }}>
            <Typography variant="h4" sx={{ cursor: 'pointer', fontWeight: 400 }}>  
                Start Session
            </Typography>
            <IconButton onClick={handleNavigate} sx={{
                ":hover": { backgroundColor: 'transparent' },
                width: 250, height: 250, mb: 2,
                transition: 'all 2s ease-in-out',
                animation: 'homePagePulse 3s infinite ease-in-out',
            }}>
                <img src="MainButton2.png" alt="Start Icon" style={{ width: '300%', height: '100%' }} />
            </IconButton>
            <Box sx={{
                position: 'absolute',
                bottom: showSessions ? '0px' : '-295px',
                width: '250%',
                maxWidth: 'none',
                height: '350px',
                bgcolor: '#40b1e4',
                left: '50%',
                transform: 'translateX(-50%)',
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                transition: 'bottom 0.5s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: 1, justifyContent: 'flex-start'
            }}>
                <IconButton onClick={toggleSessions} sx={{ color: 'white', mt: -2.0 }}>
                    {showSessions ? <ArrowDropDownIcon fontSize="large" /> : <ArrowDropUpIcon fontSize="large" />}
                </IconButton>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 300, mt: -2.5 }}>
                    Previous Sessions
                </Typography>
                {sessionDates.map((date, index) => (
                    <Box key={index} sx={{
                        width: '35%', height: '50px', bgcolor: 'white', mt: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                    }}>
                        {date}
                    </Box>
                ))}
            </Box>
        </Container>
    );
}

export default HomePage;
