var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// define routes here..
app.get('/', function (req, res) {
    res.send('index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.fname + ' ' + req.body.lname;
    var email = emailaddress;
    var pwd = Password;
    var phone = Telephone;
    var gender = sex;

    res.send(name + email + pwd + phone + gender + ' Submitted Successfully!');
});


var server = app.listen(5000, function () {
    console.log('Node server is running..');
});