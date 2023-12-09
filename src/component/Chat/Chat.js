import { Box, Typography } from "@mui/material";
import React from "react";
import EncryptionComp from "../EncryptionComp/EncryptionComp";
import { useAtom } from "jotai";
import { initialChatData, personOne } from "../../store";

function Chat({ author, date, message }) {
  const [name] = useAtom(personOne);
  const [iCD] = useAtom(initialChatData);

  function convertISOTimeToNormal(isoTime) {
    const date = new Date(isoTime);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date
      .toLocaleDateString("en-US", { month: "long" })
      .substring(0, 3);
    const dateNumber = date.getDate();
    const hours = date
      .toLocaleTimeString("en-US", { hour: "numeric", hour12: true })
      .split(" ");
    const minutes = date.toLocaleTimeString("en-US", {
      minute: "numeric",
      hour12: true,
    });
    const seconds = date.getUTCSeconds();

    const normalTime = `${dateNumber} ${month} ${hours[0]}:${minutes}`;
    return normalTime;
  }

  const convertedDate = convertISOTimeToNormal(date);

  return author === null ? (
    <EncryptionComp message={message} />
  ) : author === name ? (
    <Box display="flex" justifyContent="left">
      <Box
        backgroundColor="white"
        maxWidth="500px"
        margin="10px"
        padding="5px"
        borderRadius="5px"
      >
        <Typography>{author}</Typography>
        <Typography fontSize="13px">{message}</Typography>
        <Typography fontSize="8px">{convertedDate}</Typography>
      </Box>
    </Box>
  ) : (
    <Box display="flex" justifyContent="right">
      <Box
        backgroundColor="white"
        maxWidth="500px"
        margin="10px"
        padding="5px"
        borderRadius="5px"
      >
        <Typography>{author}</Typography>
        <Typography fontSize="13px">{message}</Typography>
        <Typography fontSize="8px">{convertedDate}</Typography>
      </Box>
    </Box>
  );
}

export default Chat;
