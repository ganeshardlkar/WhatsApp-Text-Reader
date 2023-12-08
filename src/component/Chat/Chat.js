import { Box, Typography } from "@mui/material";
import React from "react";
import EncryptionComp from "../EncryptionComp/EncryptionComp";
import { useAtom } from "jotai";
import { personOne } from "../../store";

function Chat({ author, date, message }) {
  const [name] = useAtom(personOne);

  // const convertISOToCustomFormat = (date) => {
  //     const daysOfWeek = [
  //       'Sunday',
  //       'Monday',
  //       'Tuesday',
  //       'Wednesday',
  //       'Thursday',
  //       'Friday',
  //       'Saturday',
  //     ];
  //     const dt = new Date(date);
  //     const dayOfWeek = daysOfWeek[dt.getUTCDay()];

  //     const year = dt.getUTCFullYear();
  //     const month = dt.toLocaleString('default', { month: 'long' });
  //     const day = dt.getUTCDate();

  //     let hours = dt.getUTCHours();
  //     let ampm = hours >= 12 ? 'pm' : 'am';

  //     hours = hours % 12;
  //     hours = hours === 0 ? 12 : hours;

  //     const minutes = String(date.getUTCMinutes()).padStart(2, '0');

  //     const formattedDate = `${dayOfWeek}, ${month} ${day} ${year} at ${hours}:${minutes}${ampm}`;

  //     return formattedDate;
  // };

  // const converttedDate = convertISOToCustomFormat(date);
  // console.log(converttedDate)
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
        <Typography fontSize="13px">{message}</Typography>
        <Typography fontSize="8px">{date}</Typography>
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
        <Typography fontSize="13px">{message}</Typography>
        <Typography fontSize="8px">{date}</Typography>
      </Box>
    </Box>
  );
}

export default Chat;
