import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Typography, Container, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './SessionPage.css'; // Ensure to import the CSS file containing the ripple animation

function SessionPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const audioRef = useRef(null);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    const finalMessage = "You are now calm and the session is complete.";
    const pausedMessage = "Music paused, assessing your relaxation";
    const messages = [
        { text: "Monitoring your brain activity", duration: 5000 },
        { text: "Calm detected, playing soothing music", duration: 5000, playMusic: true },
        { text: "Relax and enjoy the melody", duration: 7000 },
        { text: pausedMessage, duration: 7000, pauseMusic: true },
        { text: "Melody resuming, keep relaxing", duration: 7000, resumeMusic: true },
        { text: finalMessage, duration: 9999999, resumeMusic: true }
    ];

    const shouldAnimate = currentMessageIndex !== messages.length - 1 && messages[currentMessageIndex].text !== pausedMessage;

    useEffect(() => {
        const timeout = setTimeout(() => {
            const nextMessageIndex = (currentMessageIndex + 1) % messages.length;
            setCurrentMessageIndex(nextMessageIndex);

            const message = messages[nextMessageIndex];
            if (message.playMusic && audioRef.current) {
                audioRef.current.play();
            } else if (message.pauseMusic && audioRef.current) {
                audioRef.current.pause();
            } else if (message.resumeMusic && audioRef.current) {
                audioRef.current.play();
            }
        }, messages[currentMessageIndex].duration);

        return () => clearTimeout(timeout);
    }, [currentMessageIndex, messages]);

    useEffect(() => {
        if (location.state?.startSession && audioRef.current) {
            audioRef.current.play().catch(err => console.error("Error playing audio:", err));
        }
    }, [location.state]);

    const currentMessage = messages[currentMessageIndex].text;
    const imageSrc = [pausedMessage, finalMessage].includes(currentMessage) ? "sound-frame.gif" : "sound.gif";

    return (
        <Container sx={{
            width: '375px',
            height: '667px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            pt: 5,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: currentMessage === finalMessage ? '#5ff767' : '#e7f3f6',
            border: '3px solid #000000',
            borderRadius: '10px',
            overflow: 'hidden',
            transition: 'background-color 3s ease'
        }}>
            <IconButton
                sx={{
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    color: 'black',
                    backgroundColor: 'transparent',
                    zIndex: 10,
                    ":hover": {
                        backgroundColor: 'transparent',
                    }
                }}
                onClick={() => navigate('/home')}
            >
                <CloseIcon />
            </IconButton>
            <IconButton
                sx={{
                    ":hover": {
                        backgroundColor: 'transparent',
                    },
                    width: 250,
                    height: 250,
                    position: 'relative',
                    animation: shouldAnimate ? 'sessionPagePulse 2s infinite' : 'none',
                }}
            >
                <img src="MainButton2.png" alt="Session Icon" style={{ width: '100%', height: '100%' }} />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 400, fontSize: 24 }}>
                {currentMessage === finalMessage ? "Session Complete" : "Session in Progress"}
            </Typography>
            <Box sx={{ width: '100%', mt: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src={imageSrc} alt="Sound Animation" style={{ width: 50, height: 50 }} />
                <Typography variant="subtitle1">
                    {currentMessage}
                </Typography>
            </Box>
            <audio ref={audioRef} src="Whispering Waves.mp3" preload="auto" />
        </Container>
    );
}

export default SessionPage;
