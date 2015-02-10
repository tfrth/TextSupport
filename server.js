var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Firebase = require('firebase');
var twilio = require('twilio')('ACf2534d33a9214486b3bc526f13efb9b9', 'e5cec2acd8588089112e8a7fd048d823')
var port = 9999;

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public')); 

new Firebase('https://textsupport666.firebaseio.com/numbers');

//Send an SMS text message
// client.sendMessage({

//     to:'+17608229888', // Any number Twilio can deliver to
//     from: '+3364841708', // A number you bought from Twilio and can use for outbound communication
//     body: 'word to your mother.' // body of the SMS message

// }, function(err, responseData) { //this function is executed when a response is received from Twilio

//     if (!err) { // "err" is an error received during the request, if any

//         // "responseData" is a JavaScript object containing data received from Twilio.
//         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//         // http://www.twilio.com/docs/api/rest/sending-sms#example-1

//         console.log(responseData.from); // outputs "+14506667788"
//         console.log(responseData.body); // outputs "word to your mother."

//     }
// });













app.listen(port);

console.log('listening on port: ' + port);



