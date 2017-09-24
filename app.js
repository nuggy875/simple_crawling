var http = require("http");

var app = http.createServer(function(req,res){
  var roomnum = req.url;
  var roomnumData = roomnum.replace("/","");

  var url = "http://api.zigbang.com/v3/items?detail=true&item_ids=[9205969,9208453,9236237,9321904,9342633,9318883,8468221,9346109,9364456,9372063,9169495,9272701,9200666,9342477,9364615,9363582,9329370,9162998,9096819,9364630,9360872,9229162,9083403,9252862,9288475,9088299,9183917,9239809,8979688,9318268,9077691,9318424,9237212,9017729,9378974,9380151,9235557,9224286,9250488,9349641,8550297,9353877,9343637,9364606,9300044,9215039,9356865,9077756,8308325,8959552,8828089,9273100,9083424,9379920]"
  var deposit = 0;
  console.log("---log start---");
  http.get(url, function(response){
    var data = "";

    response.on("data", function(chunk){
      data = data + chunk;
    });
    response.on("end", function(){
      var zigbangData = JSON.parse(data);
      if (roomnumData=="favicon.ico"){
        console.log(roomnumData);
      }else if(roomnumData==""){
        res.write("This is Web Application that print the deposit of the room.\n\nInput the 'item number' on URL\n\n\nex) deposit of item 6 => localhost:3000/6");
        res.end();
      }else{
        deposit = zigbangData.items[roomnumData].item.deposit;
        console.log(deposit);
        res.write("DEPOSIT of room number "+roomnumData + " is :" + deposit +"0000 WON");
        res.end();
      }
    });
  });

});

app.listen(3000, function(){
  console.log("Server is listening on 3000");
});
