
const express = require("express");
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  if (msg.text && msg.text.toLowerCase().includes("hi") || msg.text.toLowerCase().includes("hello")) {
    bot.sendMessage(chatId, "💋 Hey there... I’m Lizzy. Tip me on Ko-fi and I’ll make it worth your while 😉
" + process.env.KOFI_LINK);
  }
});

app.get("/", (req, res) => {
  res.send("EchoVerse AI is running...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
