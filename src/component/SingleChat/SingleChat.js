import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { msgs, personOne } from "../../store";

function SingleChat({ name }) {
  const [m] = useAtom(msgs);
  const [personName] = useAtom(personOne);
  const lastMessage = m && m.length > 0 ? m[m.length - 1] : "";

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "left",
        alignItems: "center",
        padding: "5px",
        marginTop: "2px",
      }}
      borderTop="1px solid grey"
    >
      <Box
        width="50px"
        height="50px"
        marginRight="10px"
        style={{ backgroundColor: "red", borderRadius: "50%" }}
      ></Box>
      <Box>
        <Typography color="white">{name}</Typography>
        {lastMessage && lastMessage.author === personName ? (
          <Typography fontSize="14px" color="white">
            {lastMessage.author}: {lastMessage.message}
          </Typography>
        ) : (
          <Typography fontSize="14px" color="white">
            You: {lastMessage.message}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default SingleChat;
