import React from "react";
import Chat from "../Chat/Chat";
import { Box, Typography } from "@mui/material";
import { useAtom } from "jotai";
import WhatsappImage from "../../whatsapp-image.jpg";
import { initialChatData, initialShowChat, personOne } from "../../store";
import Header from "../Header/Header";

function PersonalChat() {
  const [pO] = useAtom(personOne);
  const [iC] = useAtom(initialShowChat);
  const [chatDataMap] = useAtom(initialChatData);

  var message;

  for (let key in chatDataMap) {
    if (key === pO) {
      // authorName = pO;
      // date = chatDataMap[key][0].date;
      message = chatDataMap[key];
    }
  }

  return iC == true ? (
    <Box display="flex" flexDirection="column" width="inherit" height="inherit">
      <Header />
      <Box
        style={{
          // paddingLeft: "0.5%",
          // paddingRight: "0.5%",
          // height: "inherit",
          minWidth: "75%",
          overflowY: "scroll",

          backgroundImage: `url(${WhatsappImage})`,
          backgroundSize: "cover",
          // marginTop: "3.5%",
          // height: "inherit",
          // minWidth: "75%",
        }}
      >
        <Box
          style={{
            // minWidth: "75%",
            // overflowY: "scroll",
            // backgroundImage: `url(${WhatsappImage})`,
            // backgroundSize: "cover",
            // backgroundImage: `url(${WhatsappImage})`,
            // backgroundSize: "cover",
            paddingLeft: "3.5%",
            paddingRight: "3.5%",
            // minWidth: "75%",
            // overflowY: "scroll",
          }}
        >
          {message.map((msg, i = 1) => (
            <Chat
              key={i++}
              author={msg.author}
              date={msg.date}
              message={msg.message}
            />
          ))}
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      backgroundColor="#222E35"
      height="inherit"
      minWidth="75%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography color="#C6D3D8" fontSize="30px" fontFamily="sans-serif">
        WhatsApp Text Reader
      </Typography>
      <Typography color="#C6D3D8" fontSize="13px" fontFamily="sans-serif">
        Upload a .txt file to view the chats in WhatsApp Chat format
      </Typography>
    </Box>
  );
}

export default PersonalChat;
