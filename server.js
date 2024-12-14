var express = require ("express") ;
var bodyParser = require ("body-parser") ;
var app = express () ;


app.use (express.static (__dirname + "/viw") ) ;
app.use (bodyParser.json()) ;
app.use (bodyParser.urlencoded({ extended:true }) );



app.get ("/" , function (req , resp , next) {
    resp.sendFile (__dirname + "/home.html")
}) ;



app.listen (2222) ;
console.log ("server running on port 2222") ;
