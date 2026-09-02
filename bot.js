const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling:true});
const app = express();
app.get('/',(req,res)=>res.send('Bot is Live!'));
app.listen(process.env.PORT||3000);

bot.on('message',(msg)=>{
  bot.sendMessage(msg.chat.id,
`💖 Hi, ARADHYA HERE 💖

📹 VIDEO CALL SERVICE AVAILABLE 📹

👉 INTERESTED?

✨ REPLY          YES ✨`
  );
});
