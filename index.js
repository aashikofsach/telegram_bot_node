const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const axios = require('axios');

require('dotenv').config();




const bot = new Telegraf(process.env.OUR_BOT);

bot.start((ctx) => ctx.reply('Welcome, Here we are good to go with aashu bot '))
bot.command("Binaryserach", (ctx) => ctx.reply("here we have to enter a variable which conarians code in a variabke as a string "));

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.command("getHtml", async (ctx) => {
    const res = await axios.get("https://github.com/singhsanket143/FrontendDSA/blob/master/Aug_29/trees.js")
    // console.log(res.data);
    ctx.reply(res.data)
})

bot.on(message('text'), (ctx) => ctx.reply("Keep trying more and more "))



bot.launch();

