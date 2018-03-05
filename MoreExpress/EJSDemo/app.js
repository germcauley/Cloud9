var express = require("express");
var app = express();



app.get("/", function(req, res){
    res.render("home.ejs")

});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});
//fallinlovewith/rusty
//fallinlovewith/pomsky

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My pet bunny", author: "Tom"},
        {title: "Can you believe this!", author: "Bob"},
        {title: "Another great post", author: "Mary"}
        
        ]
        res.render("posts.ejs", {posts: posts})
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});
