
var express = require("express");

var app = express();


// "/" = Hi there
app.get("/",function(req,res){
    res.send("Hi there");
});

// "/bye " = Goodbye
app.get("/bye",function(req,res){
    res.send("Goodye!");
});
// "/dog" = meow!
app.get("/dog", function(req,res){
    res.send("Meow!");
    console.log("Someone made a requet to /dog");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("WELCOME TO THE "+subreddit.toUpperCase()+" SUBREDDIT!");
});

app.get("/r/:subredditName/comment/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE");
});


//catch all route, default message for routes
//that dont match above
app.get("*", function(req, res){
    res.send("YOU ARE A STAR!");
});


//Tell express to listen for requests(start server))
app.listen(process.env.PORT, process.env.IP,function(){
    console.log("server has started!");
});
