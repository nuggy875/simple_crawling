var http = require("http");
var crawler = require("./crawler");



var app = http.createServer(function(req,res){
  var roomnum = req.url;
  var roomnumData = roomnum.replace("/","");
  var deposit = crawler(roomnumData);

  res.write("DEPOSIT of room number "+roomnumData + " is :" + deposit +"0000 WON");
  res.end();

});

app.listen(3000, function(){
  console.log("Server is listening on 3000");
});
