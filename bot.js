const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, {polling:true});
const app = express();
app.get('/',(req,res)=>res.send('Bot is Live!'));
app.listen(process.env.PORT||3000);

const ADMIN_ID = 8793721693;

bot.on('message',(msg)=>{
  if(msg.from.id == ADMIN_ID) return;

  bot.sendMessage(msg.chat.id,
`💖 Hi, ARADHYA HERE 💖

📹 VIDEO CALL SERVICE AVAILABLE 

👉 INTERESTED?

⚠️ GENUINE SERVICE ONLY - GENUINE CUSTOMERS REPLY ⚠️

✨ REPLY ➡️➡️➡️➡️ YES ✨`
  );
});
