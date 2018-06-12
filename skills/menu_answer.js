module.exports = function(controller) {

    console.log('menu payload');
    
    controller.on('facebook_postback', function(bot, message) {
        switch (message.payload) {
            case 'menu_numRule':
                ans_menu_numRule(bot, message);
                break;            
            default:
                bot.reply(message, 'meh!');
        }
    });
  
  function ans_menu_numRule(bot, message) {
    bot.reply(message, 'Hey u picked rule!');
  }

}

/*
  menu_numRule
  menu_ohvgJob
  menu_ohvgStExchange
  menu_ohvgVolunteer
  menu_ohvgCultureAndHealthAndSport
  menu_ohvgForeignStudent
  menu_stcounselUnion
  menu_stcounselBusiness
  menu_stcounselLegalAndSirpa
  menu_stcounselSeasAndSas
  menu_stcounselOrkhonAndZawkhan
  menu_numScholar
  menu_numClub
  menu_numArmy
  num_numDorm
  menu_numLocation
  menu_infoEvent
  menu_infoNews
  menu_infoLiveChat
  menu_liveChat
*/