import { Box, Typography } from '@mui/material'
import React from 'react'

function SingleChat() {
  return (
    <Box style={{display: 'flex', justifyContent: 'left', alignItems: 'center', padding: '5px', marginTop: '2px'}} borderTop='1px solid grey'>
        <Box width='50px' height='50px' marginRight='10px' style={{backgroundColor: 'red', borderRadius: '50%'}}></Box>
        <Box>
            <Typography color='white'>Chirag Oracle</Typography>
            <Typography fontSize='14px' color='white'>No problem</Typography>
        </Box>
    </Box>
  )
}

export default SingleChat