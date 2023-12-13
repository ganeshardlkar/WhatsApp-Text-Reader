import { Search } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      minHeight="9%"
      //   maxWidth="75%"
      backgroundColor="#202C33"
      //   zIndex="1"
      //   position="fixed"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      //   paddingLeft="650px"
    >
      <Typography fontSize="20px" color="white" paddingLeft="2%">
        WhatsApp chat with Kartik
      </Typography>
      {/* <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minWidth="120px"
      >
        <Box
          width="40px"
          height="40px"
          borderRadius="50%"
          backgroundColor="white"
          color="white"
          marginRight="8%"
        ></Box>
        <Typography fontSize="20px" color="white">
          Abhay Killekar
        </Typography>
      </Box>
      <Box>
        <Search
          color="primary"
          style={{ fontSize: 30, color: "white", marginRight: "10px" }}
        />
      </Box> */}
    </Box>
  );
};

export default Header;
