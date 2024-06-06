import React, { useState } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const sessions = [
    {
        id: 1,
        date: '2024-06-07',
        duration: '30 minutes',
        betaStart: '15 Hz',
        betaEnd: '12 Hz',
        // Add more session details as needed
    },
    {
        id: 2,
        date: '2024-06-06',
        duration: '45 minutes',
        betaStart: '13 Hz',
        betaEnd: '11 Hz',
        // Add more session details as needed
    },
    // Add more sessions as needed
];

function SessionHistory() {
    return (
        <Container sx={{
            width: '375px',
            height: '667px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start', // Aligns content to the top
            alignItems: 'center',
            pt: 5, // Adds padding at the top to raise the content
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#e7f3f6',
            border: '3px solid #000000', // Adds a black border, 3px thick
            borderRadius: '10px', // Optional: Adds rounded corners
        }}>
            <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
                Session History
            </Typography>
            {sessions.map((session) => (
                <Accordion key={session.id} sx={{ mb: 2 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${session.id}-content`}
                        id={`panel${session.id}-header`}
                    >
                        <Typography>{session.date}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Duration: {session.duration}</Typography>
                        <Typography>Beta Start: {session.betaStart}</Typography>
                        <Typography>Beta End: {session.betaEnd}</Typography>
                        {/* Add more session details here */}
                    </AccordionDetails>
                </Accordion>
            ))}
            <Button variant="outlined" sx={{ mt: 2 }} onClick={() => window.history.back()}>
                Back
            </Button>
        </Container>
    );
}

export default SessionHistory;
