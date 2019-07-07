var express = require("express");

var app = express();

//Tell express to listen for requests(start server))
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server has started!");
});


// "/" = Hi there is default / server gateway
app.get("/",function(req,res){
    res.send("Hi there");
});


// speak/pig print oink
app.get("/speak/pig",function(req, res){
    res.send("Oink!");
});

//speak/cow print moo
app.get("/speak/cow",function(req, res){
    res.send("Moo!");
});
//speak/dog/ print woof woof
app.get("/speak/dog",function(req, res){
    res.send("Woof! Woof!");
});

//repeat/hello/3 prints hello hello hello
app.get("/repeat/:word/:num",function(req, res){
    var word = req.params.word;
    var num = req.params.num;
    var output ="";
    for(var i =0; i<num; i++){
        console.log(word.toUpperCase());
        output += " "+word.toUpperCase();
    }
    //res.send("Repeat "+ word +" "+ num + " times");
    res.send(output);
});

//catch all for other paths
app.get("*", function(req, res){
    console.log("Sorry, page not found.... What are you doin with your life?");
    res.send("Sorry, page not found.... What are you doin with your life?");
});