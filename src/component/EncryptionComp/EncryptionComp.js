import React from "react";
import { Box, Typography } from "@mui/material";

function EncryptionComp({ message }) {
  return (
    <Box
      display="flex"
      marginTop="10px"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="700px"
        borderRadius="5px"
        height="auto"
        backgroundColor="#353526"
        marginBottom="10px"
        marginTop="10px"
      >
        <Typography
          marginBottom="10px"
          marginTop="10px"
          color="#eed964"
          textAlign="center"
          fontSize="13px"
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
}

export default EncryptionComp;
