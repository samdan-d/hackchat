module.exports = function(controller) {

    console.log('broadcast');
    
    controller.api.broadcast.create_message_creative("Hello friend !", function (err, body) {
        // Your awesome code here
        console.log(body);
        // And here
    });

    controller.api.broadcast.send(1, null, function (err, body) {
        // Your awesome code here
        console.log(body);
        // And here
    });

}
