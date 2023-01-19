import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch]=useState('')

  // const [exercises, setExercises] = useState([]);
  const[bodyParts, setBodyParts] = useState([])
  
  useEffect(() => {
    const fetchExercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

        setBodyParts(['all', ...bodyParts]);
    }

    fetchExercisesData();

  }, [])
//   useEffect(() => {
//     const fetchExercisesData = async() => {
//         let exercisesData = [];
//         if(bodyPart === 'all'){
//             exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); 
//         }else if (Array.isArray(bodyPartsData)) {
//             for(let i = 0; i < bodyPartsData.length; i++){
//                 exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPartsData[i]}`, exerciseOptions);
//                 // do something with exercisesData here
//             }
//         }else{
//             console.log("bodyPartsData is not an array")
//         }
//         setExercises(exercisesData);
//     }
//     fetchExercisesData();
// },[bodyPart, bodyPartsData, setExercises])



  const handleSearch = async() => {
      if(search){
        const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions); 
        console.log(exercisesData);

        const searchedExercises = exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setExercises(searchedExercises);
      }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg:'44px', xs:'30px'}}} mb="50px" textAlign="center">
      Stunning Exercises <br />
      You Should Know 
    </Typography>

    <Box position="relative" mb="72px">
      <TextField  
        sx={{
          input : { 
            fontWeight:'700', 
            // fontSize: {lg:'15px', xs:'10px'}
            border: 'none', 
            borderRadius: '4px'
            },
            width : {lg:'900px', xs:'350px'},
            backgroundColor : '#fff', borderRadius: '40px',
            // id:'outlined-basic',
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Search Exercises" 
        type= "text"
      />
      <Button className="search-btn" variant='contained' color='error'
              sx={{
                bgColor: "FF2625",
                color: '#FFF',
                borderRadius: '100px',
                textTransform: 'none',
                width : {lg:'100px', xs:'80px'},
                mt: {lg:'15px', xs:'5px'},
                height: '45px',
                fontSize: {lg:'15px', xs:'10px'},
                position: 'flex',
                marginBottom: '100px',
                right:'0',
        }}
              onClick={handleSearch}
      > 
          
          Search 
      </Button>
    </Box>
    <Box>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}} />
              <HorizontalScrollbar data = {bodyParts}
              bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
    </Box>
    </Stack>
  )
}

export default SearchExercises