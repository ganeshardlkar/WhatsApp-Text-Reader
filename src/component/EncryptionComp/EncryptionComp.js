import React from "react";
import { Box, Typography } from "@mui/material";

function EncryptionComp({ message }) {
  return (
    <Box display="flex" justifyContent="center" alignItems="center">
      <Box
        width="60%"
        borderRadius="5px"
        height="auto"
        backgroundColor="#353526"
        paddingLeft="0.1%"
        paddingRight="0.1%"
        marginTop="1%"
        marginBottom="0.1%"
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
