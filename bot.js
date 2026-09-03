const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const fs = require('fs');
const path = require('path');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Bot & Website Live!');
});

const ADMIN_ID = 8793721693;

bot.on('message', (msg) => {
  if (String(msg.from.id) === String(ADMIN_ID)) return;
  const text = msg.text ? msg.text.toLowerCase().trim() : "";

  if (["hi", "hello", "hii", "hey"].includes(text) || text.length < 2) {
    bot.sendMessage(msg.chat.id,
`💖 Hi, ARADHYA HERE 💖

📹 VIDEO CALL SERVICE AVAILABLE 📹

👉 INTERESTED?

⚠️ GENUINE SERVICE ONLY - GENUINE CUSTOMERS REPLY ⚠️

✨ REPLY          YES ✨`
    );
  }
  else if (text === "yes") {
    bot.sendMessage(msg.chat.id,
`😘 Only Interested Contact 😘
✅ Online ✅ 💯💯

➡️ 1👉 99rs-- demo call full n*de
➡️ 2👉 95rs-- 3 n*de pics
➡️ 3👉 349rs-- 5 photos and 2 video
➡️ 4👉 299rs-- 10 min video call
➡️ 5👉 249rs-- s*x chat
➡️ 6👉 399rs-- 20min video call
➡️ 7👉 499rs-- 30min full open 💯

👉 Jo chahiye uska number bhejo (1-7)`
    );
  }
  else if (["1", "2", "3", "4", "5", "6", "7"].includes(text)) {
    const qrPath = path.join(__dirname, 'qr.jpg');
    const captionText = `✅ Service No. ${text} Selected ✅

💰 Pay to Broker
👉 Gautam Indolia
UPI: 7690863171@fam

📸 Is QR pe payment karke screenshot bhejo

Payment ke baad service start hogi 💋`;

    if (fs.existsSync(qrPath)) {
      bot.sendPhoto(msg.chat.id, qrPath, { caption: captionText });
    } else {
      bot.sendMessage(msg.chat.id, captionText);
    }
  }
});
