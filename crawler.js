var http = require("http");

var roomnum1 = process.argv[2];
var roomnum2 = process.argv[3];
var roomnum3 = process.argv[4];
var zigbangData;

// 0 ~ 53개의 items
var url = "http://api.zigbang.com/v3/items?detail=true&item_ids=[9205969,9208453,9236237,9321904,9342633,9318883,8468221,9346109,9364456,9372063,9169495,9272701,9200666,9342477,9364615,9363582,9329370,9162998,9096819,9364630,9360872,9229162,9083403,9252862,9288475,9088299,9183917,9239809,8979688,9318268,9077691,9318424,9237212,9017729,9378974,9380151,9235557,9224286,9250488,9349641,8550297,9353877,9343637,9364606,9300044,9215039,9356865,9077756,8308325,8959552,8828089,9273100,9083424,9379920]"


http.get(url, function(res){
  var data = "";

  res.on("data",function(chunk){
    data = data + chunk;
  });

  res.on("end",function(){
    zigbangData = JSON.parse(data);

    var deposit1 = zigbangData.items[roomnum1].item.deposit;
    var deposit2 = zigbangData.items[roomnum2].item.deposit;
    var deposit3 = zigbangData.items[roomnum3].item.deposit;


    console.log("첫번째 방의 보증금은 : ",deposit1);
    console.log("두번째 방의 보증금은 : ",deposit2);
    console.log("세번째 방의 보증금은 : ",deposit3);
  });
});

var app = http.createServer(function(req,res){
  var roomnum = req.url;
  zigbangData.items[roomnum];

  res.write(roomnum.replace("/",""));
  res.write("\nhello");
  res.end();

});

app.listen(3000, function(){
  console.log("Server is listening on 3000");
});
