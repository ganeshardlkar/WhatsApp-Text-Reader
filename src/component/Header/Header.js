import { Box, Typography } from '@mui/material'
import React from 'react'

function Header({position}) {
  return (
    <Box backgroundColor='#599389' padding='5px' position={position} width='990px'>
      <Box display='flex' justifyContent='left' alignItems='center'>
        <Box width='50px' height='50px' marginRight='10px' style={{backgroundColor: 'red', borderRadius: '50%'}}></Box>
        <Box>
          <Typography>Ganesh</Typography>
          <Typography fontSize='13px'>Last seen today</Typography>
        </Box>
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Header