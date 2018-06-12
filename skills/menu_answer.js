module.exports = function(controller) {

    console.log('menu payload');
    
    controller.on('facebook_postback', function(bot, message) {
        switch (message.payload) {
            case 'menu_numRule':
                bot.reply(message, 'Hey u picked rule!');
                break;
            default:
                bot.reply(message, 'meh!');
        }
    });

}
