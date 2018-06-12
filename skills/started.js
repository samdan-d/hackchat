module.exports = function (controller) {

    controller.on('channel_join', function(bot, message) {

        bot.reply(message,'Welcome to the channel!');
      
      });

}
