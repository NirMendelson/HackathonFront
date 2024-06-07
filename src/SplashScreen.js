import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // Ensure you have this CSS file imported

function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000); // 3 seconds delay
  }, [navigate]);

  return (
    <div style={{
      width: '375px', // Typical width of a mobile device
      height: '667px', // Typical height of a mobile device
      position: 'absolute', // Centering the splash screen
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e7f3f6',
      border: '3px solid #000000', // Adds a black border, 3px thick
      borderRadius: '10px', // Optional: Adds rounded corners
    }}>
      <h1 style={{
        fontFamily: 'Poppins, sans-serif',
        fontWeight: '300', // 600 is semi-bold
        marginBottom: '-10px'
      }}>BrainBeat</h1>
      <img src="MainButton2.png" alt="Brain Icon" style={{ width: '50%' }} />
    </div>
  );
}

export default SplashScreen;
