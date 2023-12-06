const express = require('express');
const fs = require('node:fs');
const whatsapp = require('whatsapp-chat-parser');

var cors = require('cors');
var app = express();
app.use(cors());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

var messages;

const callFunction = () => {
    const text = fs.readFileSync('WhatsApp_Chat_with_Kartik.txt', 'utf8');
    messages = whatsapp.parseString(text);
    console.log(messages);
}

app.get('/', function (req, res) {
    callFunction();
  res.send(messages);
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
