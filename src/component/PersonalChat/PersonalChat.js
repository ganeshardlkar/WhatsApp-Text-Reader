import React from "react";
import Chat from "../Chat/Chat";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
import WhatsappImage from "../../whatsapp-image.jpg";
import { initialChatData, initialShowChat, personOne } from "../../store";

function PersonalChat({ messages }) {
  const [pO] = useAtom(personOne);
  const [iC] = useAtom(initialShowChat);
  const [chatDataMap] = useAtom(initialChatData);

  var authorName;
  var date;
  var message;

  for (let key in chatDataMap) {
    if (key === pO) {
      authorName = pO;
      date = chatDataMap[key][0].date;
      message = chatDataMap[key];
    }
  }

  return iC == true ? (
    <Box
      style={{
        backgroundImage: `url(${WhatsappImage})`,
        backgroundSize: "cover",
        height: "inherit",
        minWidth: "1000px",
        overflowY: "scroll",
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
  ) : (
    <Box></Box>
  );
}

export default PersonalChat;
