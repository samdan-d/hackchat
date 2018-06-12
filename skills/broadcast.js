module.exports = function(controller) {

    console.log('broadcast');
    
    function broadcastToUser(message, spesificUser) {
        controller.api.broadcast.create_message_creative(message, function (err, body) {
            controller.api.broadcast.send(body['message_creative_id'], null, function (err, body) {
                // Your awesome code here
                console.log(body);
                // And here
            });
        });
    }
  
  // broadcastToUser('hello all');

}
