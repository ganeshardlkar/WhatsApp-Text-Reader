import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Chat from "../Chat/Chat";
import { Box } from "@mui/material";

function PersonalChat({ messages }) {
  return (
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
      {messages.map((msg, i = 1) => (
        <Chat
          key={i++}
          author={msg.author}
          date={msg.date}
          message={msg.message}
        />
      ))}
    </div>
  );
}

export default PersonalChat;
