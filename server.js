var express = require('express');
var path = require('path');//in-built angular/core or angular/base module--no need for installing any
                           // package
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var port = 8000;

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();
mongoose.connect('mongodb://pushpak:plmokn098@ds121299.mlab.com:21299/alpha-db');
//Setting View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname,'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log("Server running at port : "+port);
});

console.log("__dirName"+__dirname);



