import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import React, { useEffect } from "react";
import {
  handleOnChatClick,
  initialChatData,
  initialShowChat,
  msgs,
  personOne,
} from "../../store";

function SingleChat({ name }) {
  const [m] = useAtom(msgs);
  const [personName] = useAtom(personOne);
  const lastMessage = m && m.length > 0 ? m[m.length - 1] : "";
  const [showChat, setShowChat] = useAtom(initialShowChat);
  const [personOneName, setPersonOneName] = useAtom(personOne);

  const handleOnChatClick = (name) => {
    setShowChat(true);
    setPersonOneName(name);
  };

  return personName === "" ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
    >
      <Typography color="white">No chats to show</Typography>
    </Box>
  ) : (
    <Box
      paddingLeft="20px"
      paddingTop="15px"
      paddingBottom="15px"
      marginTop="1px"
      marginInlineStart="20px"
      marginInlineEnd="20px"
      // borderBottom="1px solid grey"
      style={{
        cursor: "pointer",
        borderBottom: "1px solid rgba(80, 80, 80, 50%)",
      }}
      onClick={() => handleOnChatClick(name)}
    >
      {/* <Box
        width="50px"
        height="50px"
        marginRight="10px"
        backgroundColor="red"
        borderRadius="50%"
      ></Box> */}
      <Box>
        <Typography color="white">{name}</Typography>
        {/* {lastMessage && lastMessage.author === personName ? (
          <Typography fontSize="14px" color="white">
            {lastMessage.author}: {lastMessage.message}
          </Typography>
        ) : (
          <Typography fontSize="14px" color="white">
            You: {lastMessage.message}
          </Typography>
        )} */}
      </Box>
    </Box>
  );
}

export default SingleChat;
