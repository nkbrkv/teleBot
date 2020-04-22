var TelegramBot = require('node-telegram-bot-api');
var token = '1183176746:AAEusutdavNfudXA5kxY3UK2MgqQIUe9vE4';

var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, function (msg, match) {
    var fromId = msg.from.id; 
    var resp = match[1]; 
    bot.sendMessage(fromId, resp);
});

var options = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'UA', callback_data: 'UA' }],
        [{ text: 'RU', callback_data: 'RU' }],
        [{ text: 'US', callback_data: 'US' }]
      ]
    })
  };

  bot.onText(/\/start/, function (msg, match) {
    bot.sendMessage(msg.chat.id, 'Hello, i am Shazam Scraper bot.\nNow, please choose your country for getting "shazam top charts in selected country" database.\n\nSelect country:', options);
  });

  bot.on('callback_query', function (msg) {

    var answer = msg.data.split('_');

    bot.sendMessage(msg.from.id, `You chose ${answer}`);

  });