import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Yoga from '../components/Yoga';
import HealthTips from '../components/HealthTips';

const Home = () => {
  const[bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
        <HeroBanner />
        <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart} 
        setBodyPart={setBodyPart}
        />
        <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart} 
        />
        <Yoga />
        <HealthTips/>
    </Box>
  )
}

export default Home