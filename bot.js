const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling:true});
const app = express();
app.get('/',(req,res)=>res.send('Bot is Live!'));
app.listen(process.env.PORT||3000);
bot.onText(/\/start/,(msg)=>{
  bot.sendMessage(msg.chat.id,`Hello ${msg.from.first_name}! Bot is Live`);
});
bot.on('message',(msg)=>{
  if(msg.text!=='/start') bot.sendMessage(msg.chat.id,`You said: ${msg.text}`);
});
