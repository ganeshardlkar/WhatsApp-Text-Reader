import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React from "react";
import { nameAtom, personOne } from "../../store";

function Header({ position }) {
  const [name] = useAtom(personOne);

  return (
    <Box
      backgroundColor="#599389"
      padding="5px"
      position={position}
      width="990px"
    >
      <Box display="flex" justifyContent="left" alignItems="center">
        <Box
          width="50px"
          height="50px"
          marginRight="10px"
          style={{ backgroundColor: "red", borderRadius: "50%" }}
        ></Box>
        <Box>
          <Typography>Chat with {name}</Typography>
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
}

export default Header;
