// 1. Storage
// 2. q and a

module.exports = function (controller, wit) {

    controller.changeEars(function(patterns, message) {

        console.log(message.entities);

        return true;
    });

    controller.on('message_received', function (bot, message) {
        console.log(message.entities);
    });

    controller.hears(['say'], 'message_received', (bot, message) => {
        console.log(bot);
        console.log(message);
    });

}
