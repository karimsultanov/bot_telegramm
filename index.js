const TelegrammApi = require('node-telegram-bot-api')
const cron = require('node-cron')

const token = '6172539606:AAEwNdxt5lH2PNospcFl0JfvqY0QyIdCB7w'

const bot = new TelegrammApi(token, {polling: true})
bot.on('message', msg => {
    const chatId = msg.chat.id
    cron.schedule('0 7 * * *', function (){
        bot.sendMessage(chatId, 'Здравствуйте товарищи самураи,хищники,гангстеры,муковозы и просто водители пора делать бабки')
    })
    cron.schedule('0 12 * * *', function (){
        bot.sendMessage(chatId, 'настало время похвастаться кассой')
    })
    cron.schedule('0 17 * * *', function (){
        bot.sendMessage(chatId, 'Газуем пацаны, пора кэфы тушить')
    })
    cron.schedule('10 0 * * *', function (){
        bot.sendMessage(chatId, 'настало время похвастаться кассой')
    })
    if(msg.new_chat_member){
        bot.sendMessage(chatId, 'Здарова хищник')
    }
})