var debug = require('debug')('botkit:thread_settings');



module.exports = function(controller) {

    debug('Configuring Facebook thread settings...');
    controller.api.thread_settings.greeting('Hello! I\'m a Botkit bot!');
    controller.api.thread_settings.get_started('sample_get_started_payload');
    controller.api.thread_settings.menu([
        {
            "locale": "default",
            "composer_input_disabled": false,
            "call_to_actions": [    
                {
                  "type":"nested",
                  "title":"МУИС",
                  "call_to_actions": [
                    {
                    "type":"postback",
                    "title":"Дүрэм журам",
                    "payload":"menu_numRule"
                    },
                     {
                  "type":"nested",
                  "title":"ОХҮГ",
                  "call_to_actions": [
                  
                      {
                        type: "postback",
                        "title": "Хөдөлмөр эрхлэлт",
                        "payload":"menu_ohvgJob"
                      },
                      {
                        type: "postback",
                        "title": "Оюутан солилцоо",
                        "payload":"menu_ohvgStExchange"
                      },
                      {
                        type: "postback",
                        "title": "Сайн дурын ажил",
                        "payload":"menu_ohvgVolunteer"
                      },
                      {
                        type: "postback",
                        "title": "Соёл, Эрүүлмэнд, спорт",
                        "payload":"menu_CultureAndHealthAndSport"
                      },
                      {
                        type: "postback",
                        "title": "ГОДҮ",
                        "payload":"menu_ForeignStudent"
                      }
                    
                  ]},
                    {
                  "type":"nested",
                  "title":"Сургалтын алба",
                  "call_to_actions": [
                  
                      {
                        type: "postback",
                        "title": "Нэгдсэн алба",
                        "payload":"menu_stcounselUnion"
                      },
                      {
                        type: "postback",
                        "title": "БС",
                        "payload":"menu_stcounselBusiness"
                      },
                      {
                        type: "postback",
                        "title": "ХЗС | ОУХНУС",
                        "payload":"menu_stcounselLegalAndSirpa"
                      },
                      {
                        type: "postback",
                        "title": "ХШУИС | ШУС",
                        "payload":"menu_stcounselSeasAndSas"
                      },
                      {
                        type: "postback",
                        "title": "ОРХОН |ЗАВХАН",
                        "payload":"menu_stcounselOrkhonAndZawkhan"
                      }
                    
                  ]},
                    {
                  "type":"nested",
                  "title":"Оюутан",
                  "call_to_actions": [
                  
                      {
                        type: "postback",
                        "title": "Facebook Docs1",
                        "payload":"help"
                      },{
                        type: "postback",
                        "title": "Facebook Docs2",
                        "payload":"help"
                      },{
                        type: "postback",
                        "title": "Facebook Docs3",
                        "payload":"help"
                      },{
                        type: "postback",
                        "title": "Facebook Docs4",
                        "payload":"help"
                      },{
                        type: "postback",
                        "title": "Facebook Docs5",
                        "payload":"help"
                      }
                    
                  ]},
                     {
                    "type":"postback",
                    "title":"БАЙРШИЛ",
                    "payload":"menu_numLocation"
                }
                  ]
                },
                {
                    "type":"nested",
                    "title":"МЭДЭЭЛЭЛ",
                  "call_to_actions": [
                    {
                        type: "postback",
                        "title": "Арга хэмжээ",
                        "payload":"menu_infoEvent"
                      },{
                        type: "postback",
                        "title": "Ирсэн мэдээллүүд",
                        "payload":"menu_infoNews"
                      },{
                        type: "postback",
                        "title": "Шууд асуух",
                        "payload":"menu_infoLiveChat"
                      }
                    ]
                },
              {
                    "type":"postback",
                    "title":"АСУУЛТ АСУУХ",
                    "payload":"menu_liveChat"
                }
              /*
                {
                  "type":"nested",
                  "title":"Botkit Docs",
                  "call_to_actions": [
                      {
                        type: "web_url",
                        "title": "Facebook Docs",
                        "url":"https://github.com/howdyai/botkit/blob/master/docs/readme-facebook.md",
                        "webview_height_ratio":"full",
                      },
                      {
                        type: "web_url",
                        "title": "Main Readme",
                        "url":"https://github.com/howdyai/botkit/blob/master/readme.md",
                        "webview_height_ratio":"full",
                      }                    

                  ]
                }
                */
            ]
        }]);
}
