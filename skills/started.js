module.exports = function (controller, wit) {

    controller.on('facebook_postback', function(bot, message) {
        if(message.payload === 'sample_get_started_payload'){

            var user_id = message.sender.id;
    
            bot.reply(message,'Сайн байна уу?');
        }
      
    });

}
