const { Telegraf } = require('telegraf')
const config = require('../config')

const bot = new Telegraf(config.BOT_KEY)
const chooseGameMenu = require('./menu/choose-game')

bot.on('message', ctx => {
  chooseGameMenu.replyToContext(ctx)
})

bot.launch()
