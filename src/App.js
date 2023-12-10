import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import ChatList from "./component/ChatList/ChatList";
import PersonalChat from "./component/PersonalChat/PersonalChat";
import { useAtom } from "jotai";
import { fetchData, msgs, personOne, chatData, initialChatData } from "./store";
import {
  Box,
  Button,
  Grid,
  Input,
  InputBase,
  OutlinedInput,
  Typography,
} from "@mui/material";

function App() {
  const [isFilePresent, setIsFilePresent] = useState(false);
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [messages, setMessages] = useAtom(msgs);
  const [personOneName, setPersonOneName] = useAtom(personOne);
  const [chatData, setChatData] = useAtom(initialChatData);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsFilePresent(true);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    const fileInput = document.getElementById("file-input");

    const selected_file = fileInput.files[0];

    formData.append("file", selected_file);
    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setChatData(data.map);
        setMessages(data.messages);
        setPersonOneName(data.word);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        height="550px"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <ChatList name={personOneName} />
        <PersonalChat messages={messages} />
      </Box>
      <Box
        height="100px"
        width="250px"
        padding="10px"
        marginTop="20px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        backgroundColor="#222E35"
        border="2px solid #25D366"
        borderRadius="5px"
      >
        <Input
          type="file"
          inputRef={fileInputRef}
          onChange={handleFileChange}
          accept=".txt,.pdf,.docx"
          style={{ display: "none" }}
          id="file-input"
        />
        <Button
          size="small"
          variant="contained"
          marginBottom="5px"
          onClick={() => fileInputRef.current.click()}
        >
          Choose File
        </Button>
        {selectedFile && (
          <Box marginTop="5px">
            <Typography color="white" fontSize="12px" variant="body1">
              File name: {selectedFile.name}
            </Typography>
          </Box>
        )}
        <Button
          size="small"
          style={{
            backgroundColor: "#25D366",
            marginTop: "5px",
          }}
          variant="contained"
          onClick={handleFileUpload}
        >
          Upload
        </Button>
      </Box>
    </Box>
  );
}

export default App;
