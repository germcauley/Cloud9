var express = require("express");
var app = express();

//tells server too look in public folder
app.use(express.static("public"));
//tell serv ll template files iwll be .ejs, so no need to write it
app.set("view engine","ejs");

app.get("/", function(req, res){
    res.render("home");

});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My pet bunny", author: "Tom"},
        {title: "Can you believe this!", author: "Bob"},
        {title: "Another great post", author: "Mary"}
        
        ]
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening");
});
