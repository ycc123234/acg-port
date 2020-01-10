const express = require('express');
const bodyParser = require('body-parser')


const dmzjRouter = require('./routes/dmzj.js')

var server = express();

var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    next();
}

server.use(allowCrossDomain);

server.use(express.static('./public'));
server.use(bodyParser.urlencoded({ extended: false }))

server.use('/dmzj', dmzjRouter);

//开启监听
server.listen(8080);