import { Box, Typography } from "@mui/material";
import React from "react";

function EncryptionComp({ message }) {
  return (
    <Box
      display="flex"
      marginTop="60px"
      justifyContent="center"
      alignItems="center"
    >
      <Box width="500px" height="60px" backgroundColor="yellow">
        <Typography fontSize="13px">{message}</Typography>
      </Box>
    </Box>
  );
}

export default EncryptionComp;
