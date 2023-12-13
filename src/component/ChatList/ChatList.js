import React from "react";
import SingleChat from "../SingleChat/SingleChat";
import { useAtom } from "jotai";
import { initialChatData, nameAtom } from "../../store";
import { Box, Typography } from "@mui/material";

function ChatList() {
  const [mapData] = useAtom(initialChatData);

  return (
    <Box backgroundColor="#111B21" height="inherit" minWidth="25%">
      <Box
        width="inherit"
        height="50px"
        display="flex"
        justifyContent="left"
        alignItems="center"
        // borderBottom="1px solid grey"
        marginTop="10px"
        marginInlineStart="20px"
        marginInlineEnd="20px"
        paddingLeft="20px"
        style={{
          borderBottom: "1px solid rgba(80, 80, 80, 50%)",
        }}
      >
        <Typography color="#E9EDE9" fontSize="28px">
          Chats
        </Typography>
      </Box>
      <Box overflowY="scroll">
        {Object.keys(mapData).map((name, index) => (
          <SingleChat key={index} name={name} />
        ))}
      </Box>
    </Box>
  );
}

export default ChatList;
