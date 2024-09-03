import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import video from "./intro.mp4";
const HeroSection = () => {
  return (
    <Box
      component="div"
      sx={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: "#ffffff", // Change text color to white for contrast
      }}
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <Box
        component="div"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black
          zIndex: 0, // Positioned just above the video but below the content
        }}
      />

      {/* Hero Content */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{ zIndex: 1 }} // Positioned above the dark overlay
      >
        <Typography
          variant="h2"
          sx={{ fontSize: '3rem', fontWeight: '500' }}
          component={motion.div}
          animate={{ scale: 1.1 }}
          transition={{ duration: 1 }}
        >
          Build Better Together
        </Typography>
        <Typography variant="h5" sx={{ marginY: 3 }}>
          A powerful project management tool for remote teams.
        </Typography>
        <Button
          component={motion.div}
          variant="contained"
          size="large"
          sx={{
            marginRight: 2,
            background: "#611f69",
          }}
          whileHover={{ scale: 1.1 }}
        >
          Get Started for Free
        </Button>
        <Button
          component={motion.div}
          variant="outlined"
          color="inherit"
          size="large"
          whileHover={{ scale: 1.1 }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
