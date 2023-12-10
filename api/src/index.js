const path = require("path");
const express = require("express");
const fs = require("fs");
const multer = require("multer");
const whatsapp = require("whatsapp-chat-parser");

var cors = require("cors");
var app = express();
app.use(cors());

const uploadDir = path.resolve(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

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

const callFunction = (filePath) => {
  const text = fs.readFileSync(filePath, "utf8");
  messages = whatsapp.parseString(text);
  word = extractWordsFromFileName(path.basename(filePath));
  map.set(word, messages);
  console.log("map", map);
  return;
};

const extractWordsFromFileName = (fileName) => {
  trimmedName = fileName.substring(19);
  actualNameArray = trimmedName.split(".");
  return actualNameArray[0];
};

app.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).json({ error: "No file uploaded." });
  }

  const uploadedFilePath = path.join(uploadDir, file.originalname);

  fs.writeFileSync(uploadedFilePath, file.buffer);

  callFunction(uploadedFilePath);
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
