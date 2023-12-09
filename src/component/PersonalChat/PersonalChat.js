import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";
import { Box } from "@mui/material";
import { useAtom } from "jotai";
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
    <div
      style={{
        backgroundColor: "grey",
        height: "700px",
        width: "1000px",
        overflowY: "scroll",
        height: "700px",
      }}
    >
      <Header position="fixed" />
      {message.map((msg, i = 1) => (
        <Chat
          key={i++}
          author={msg.author}
          date={msg.date}
          message={msg.message}
        />
      ))}
    </div>
  ) : (
    <Box></Box>
  );
}

export default PersonalChat;
