import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import EncryptionComp from "../EncryptionComp/EncryptionComp";
import { useAtom } from "jotai";
import { initialChatData, personOne } from "../../store";

function Chat({ author, date, message }) {
  const [name] = useAtom(personOne);
  const [iCD] = useAtom(initialChatData);
  // const [tempAuthorName, setTempAuthorName] = useState(author);

  function convertISOTimeToNormal(isoTime) {
    // setTempAuthorName(() => author);
    const date = new Date(isoTime);
    const day = date.toLocaleDateString("en-US", { weekday: "long" });
    const month = date
      .toLocaleDateString("en-US", { month: "long" })
      .substring(0, 3);
    const dateNumber = date.getDate();
    const hours = date
      .toLocaleTimeString("en-US", { hour: "numeric", hour12: false })
      .split(" ");
    var minutes = date.toLocaleTimeString("en-US", {
      minute: "numeric",
      hour12: true,
    });

    if (minutes.length == 1) minutes = "0" + minutes;

    const seconds = date.getUTCSeconds();

    const normalTime = `${dateNumber} ${month} ${hours[0]}:${minutes}`;
    return normalTime;
  }

  const convertedDate = convertISOTimeToNormal(date);

  var colors = ["#ff0000", "#00ff00", "#0000ff"];
  const random_color = colors[Math.floor(Math.random() * colors.length)];

  return author === null ? (
    <EncryptionComp message={message} />
  ) : author === name ? (
    <Box display="flex" justifyContent="left">
      <Box
        backgroundColor="#202C33"
        maxWidth="500px"
        margin="10px"
        padding="7px"
        borderRadius="7px"
      >
        {/* {tempAuthorName === author ? (
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="13px" color="#E9EDFF">
              {message}
            </Typography>
            <Typography
              fontSize="9px"
              marginTop="10px"
              marginLeft="20px"
              minWidth="50px"
              color="#E9EDE9"
            >
              {convertedDate}
            </Typography>
          </Box>
        ) : (
          <>
            <Typography fontSize="12px" fontWeight="bold" color="#D64A59">
              {author}
            </Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography fontSize="13px" color="#E9EDFF">
                {message}
              </Typography>
              <Typography
                fontSize="9px"
                marginTop="10px"
                marginLeft="20px"
                minWidth="50px"
                color="#E9EDE9"
              >
                {convertedDate}
              </Typography>
            </Box>
          </>
        )} */}
        <Typography fontSize="12px" fontWeight="bold" color="#D64A59">
          {author}
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="inherit"
        >
          {message.length > 100 ? (
            <Typography fontSize="14.2px" color="#E9EDE9">
              {message.substring(0, 65) + "..."}
            </Typography>
          ) : (
            <Typography fontSize="14.2px" color="#E9EDE9">
              {message}
            </Typography>
          )}
          <Typography
            fontSize="9px"
            marginTop="10px"
            marginLeft="20px"
            minWidth="50px"
            color="#E9EDE9"
            style={{ opacity: "0.5" }}
          >
            {convertedDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box display="flex" justifyContent="right">
      <Box
        backgroundColor="#202C33"
        maxWidth="500px"
        margin="10px"
        padding="5px"
        borderRadius="5px"
      >
        <Typography fontSize="12px" fontWeight="bold" color="#53BDE5">
          {author}
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          {message.length > 100 ? (
            <Typography fontSize="13px" color="#E9EDE9">
              {message.substring(0, 65) + "..."}
            </Typography>
          ) : (
            <Typography fontSize="13px" color="#E9EDE9">
              {message}
            </Typography>
          )}
          <Typography
            marginTop="10px"
            marginLeft="20px"
            fontSize="9px"
            minWidth="50px"
            color="#E9EDFF"
            style={{ opacity: "0.5" }}
          >
            {convertedDate}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
