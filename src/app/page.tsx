"use client"

import { useState } from 'react';
import { Text, Box} from '@mantine/core';
import Customize from './pages/personalizacao/page';
function Demo(){
  const [fontSize, setFontSize] = useState(16);
  const [currentFontFamily, setFontFamily] = useState();
  
  console.log(currentFontFamily); 
  return (
    <>
      <Customize setFontSize={setFontSize} setFontFamily={setFontFamily}/>

      <Box mx="auto" maw={900}>
        <Text fz={fontSize} style={{fontFamily: currentFontFamily }}>
          Paras is an orange, insectoid Pokémon that resembles the nymph stage of a cicada. Its ovoid
          body is segmented, and it has three pairs of legs. The foremost pair of legs is the largest
          and has sharp claws at the tips. There are five specks on its forehead and three teeth on
          either side of its mouth. It has circular eyes with large pseudopupils.
        </Text>
      </Box>
    </>
  );


}

export default Demo;