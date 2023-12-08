const express = require("express");
const fs = require("node:fs");
const multer = require("multer");
const whatsapp = require("whatsapp-chat-parser");

var cors = require("cors");
var app = express();
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

let fileName = " ";
var messages;
var word;

var map = new Map();

const callFunction = () => {
  const text = fs.readFileSync(fileName, "utf8");
  messages = whatsapp.parseString(text);
  word = extractWordsFromFileName(fileName);

  map.set(word, messages);
  console.log(map.size);
  return;
};

function getLastWord(words) {
  const index = inputArray.indexOf("with");
  const wordsAfterWith = inputArray.slice(index + 1);
  const resultString = wordsAfterWith.join(" ");
  const resulting = resultString.split(".");
  return resulting[0];
}

const extractWordsFromFileName = (fileName) => {
  const words = fileName.split(" ");
  const lastWord = words[words.length - 1].split(".");
  return lastWord[0];
};

app.get("/", function (req, res) {
  callFunction();
  res.send({
    messages: messages,
    word: word,
    map: map,
  });
});

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  fileName = file.originalname;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded." });
  }
  callFunction();
  const mapObject = Object.fromEntries(map);
  res.send({
    messages: messages,
    word: word,
    map: mapObject,
  });
});

app.listen(3001, function () {
  console.log("Example app listening on port 3001!");
});
