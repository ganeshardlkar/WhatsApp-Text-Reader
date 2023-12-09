import React from "react";
import Header from "../Header/Header";
import SingleChat from "../SingleChat/SingleChat";
import { useAtom } from "jotai";
import { initialChatData, nameAtom } from "../../store";
import { Box } from "@mui/material";

function ChatList({ name }) {
  const [mapData] = useAtom(initialChatData);

  return (
    <Box backgroundColor="red" height="700px" minWidth="300px" maxWidth="400px">
      <div style={{ overflowY: "scroll", height: "700px" }}>
        {Object.keys(mapData).map((name, index) => (
          <SingleChat key={index} name={name} />
        ))}
      </div>
    </Box>
  );
}

export default ChatList;
