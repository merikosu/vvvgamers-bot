const { MenuTemplate, MenuMiddleware } = require('telegraf-inline-menu')
const WELCOME_TEXT = `Привет! 👋 Присоединяйся к чату по любимой игре для общения с игроками и администрацией :)`
const menuTemplate = new MenuTemplate((ctx) => WELCOME_TEXT)

menuTemplate.url('Lichess', 'https://t.me/vvv_lichess')
menuTemplate.url('PUBG Mobile', 'https://t.me/vvv_pubg_mobile', { joinLastRow: true })
menuTemplate.url('Clash Royale', 'https://t.me/vvv_clash_royale')
menuTemplate.url('Brawl Stars', 'https://t.me/vvv_brawlstars', { joinLastRow: true })
menuTemplate.url('PUBG', 'https://t.me/vvv_pubg_desktop')

const chooseGameMenu = new MenuMiddleware('/', menuTemplate)

module.exports = chooseGameMenu
