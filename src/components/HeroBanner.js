import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box sx={{ 
        mt: { lg: '212px', xs: '70px'}, 
        ml: { sm: '50px'}
        }} position="relative" p="20px">
        <Typography color = "#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight="300" mb= "10px" mt="20px">
        The only bad workout is the one that did not happen ! <br />        
        </Typography>

        <Typography fontWeight={700}
        sx={{ fontSize: {lg: "44px", xs: "40px"} }}
        mb= "10px" mt="20px"
        >
        Sweat, Smile <br /> and Repeat ...
        </Typography>
        
        <Typography fontSize="16px" lineHeight="35px" mb={4}>
            Check out the most effective exercises 
        </Typography>

        <Button variant="contained" color="error" href="#exercises"
        sx={{background:"#ff2625", padding:"10px"}}
        >
            Explore Exercises
        </Button>

        <Typography
            fontWeight={300}
            color="#ff2625"
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'},
            }}
            fontSize="100px"
        >
            EXERCISE <br/>
            YOGA <br/>
            MEDITATE <br/>
            LEVEL UP <br/>
        </Typography>

        <img src={HeroBannerImage} alt="banner" className="hero-banner-img" style={{"height":'500px',"width":'400px', "marginTop":'-230px', "marginRight":'28px'}} />
    </Box>
  )
}

export default HeroBanner