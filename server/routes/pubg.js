const express=require('express');
const request = require('request');

var router=express.Router();

router.get('/select',(req,res)=>{
var playerName='XYYYYF';
var url=`https://api.pubg.com/shards/steam/players?filter[playerNames]=${playerName}`;
console.log(url);
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  res.send(body);
});

})

module.exports=router