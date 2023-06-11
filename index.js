const TelegrammApi = require('node-telegram-bot-api')
const cron = require('node-cron')

const token = '6172539606:AAEwNdxt5lH2PNospcFl0JfvqY0QyIdCB7w'

const bot = new TelegrammApi(token, {polling: true})
bot.on('message', msg => {
    const chatId = msg.chat.id
    cron.schedule('5 0 4 * * *',  () => {
        bot.sendMessage(chatId, 'Здравствуйте товарищи самураи,хищники,гангстеры,муковозы и просто водители пора делать бабки')
    })
    cron.schedule('5 0 9 * * *',  () => {
        bot.sendMessage(chatId, 'настало время похвастаться кассой')
    })
    cron.schedule('5 0 14 * * *',  () => {
        bot.sendMessage(chatId, 'Газуем пацаны, пора кэфы тушить')
    })
    cron.schedule('5 10 21 * * *',  () => {
        bot.sendMessage(chatId, 'настало время похвастаться кассой')
    })
    if(msg.new_chat_member){
        bot.sendMessage(chatId, 'Здарова хищник')
    }
})