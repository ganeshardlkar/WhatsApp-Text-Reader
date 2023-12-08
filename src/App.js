import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatList from "./component/ChatList/ChatList";
import PersonalChat from "./component/PersonalChat/PersonalChat";
import { useAtom } from "jotai";
import { fetchData, msgs, personOne, chatData, initialChatData } from "./store";

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [messages, setMessages] = useAtom(msgs);
  const [personOneName, setPersonOneName] = useAtom(personOne);
  const [chatData, setChatData] = useAtom(initialChatData);

  // useEffect(() => {
  //   const fetchApiData = async () => {
  //     try {
  //       const data = await fetchData();
  //       setMessages(data.messages);
  //       setPersonOneName(data.word);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   fetchApiData();
  // }, [setMessages]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("File upload success:", data);
        setChatData(data.map);
        console.log("Data =>", data.map);
        setMessages(data.messages);
        setPersonOneName(data.word);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ChatList name={personOneName} />
      <PersonalChat messages={messages} />
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload</button>
      </div>
    </div>
  );
}

export default App;
