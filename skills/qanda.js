// 1. Storage
// 2. q and a

module.exports = function (controller) {

    controller.hears([''], 'message_received', wit.hears, function (bot, message) {
        console.log("Wit.ai detected entities", message.entities);

        a = { "_text": "Сайн байна уу, өвгөөн оухнус-н төлбөр төлөх банкны дасны хаягийг өгөөч", "entities": { "greeting": [{ "confidence": 0.94094391771055, "value": "mongol", "type": "value" }], "school_type": [{ "confidence": 0.95374817530449, "value": "ОУХНУС", "type": "value" }], "intent": [{ "confidence": 0.99396552397623, "value": "pay_tuition" }] }, "msg_id": "0mlQvr62qY0FdwnkX" }
    });

    controller.hears(['say'], 'message_received', (bot, message) => {
        console.log(bot);
        console.log(message);
    })

}
