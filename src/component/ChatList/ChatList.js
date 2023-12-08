import React from "react";
import Header from "../Header/Header";
import SingleChat from "../SingleChat/SingleChat";
import { useAtom } from "jotai";
import { initialChatData, nameAtom } from "../../store";

function ChatList({ name }) {
  const [mapData] = useAtom(initialChatData);
  console.log("mapData", mapData);

  const keysArray = [];

  return (
    <div
      style={{ backgroundColor: "#0a1014", height: "700px", width: "400px" }}
    >
      <div style={{ overflowY: "scroll", height: "700px" }}>
        {Object.keys(mapData).map((name, index) => (
          <SingleChat key={index} name={name} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
