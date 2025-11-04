const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
require('dotenv').config();




const bot = new Telegraf(process.env.OUR_BOT);

bot.start((ctx) => ctx.reply('Welcome, Here we are good to go with aashu bot '))
bot.command("Binaryserach", (ctx)=> ctx.reply("here we have to enter a variable which conarians code in a variabke as a string ") );

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.on(message('text'), (ctx) => ctx.reply("Keep trying more and more "))



bot.launch();

