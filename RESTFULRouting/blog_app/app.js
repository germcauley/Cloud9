var express = require("express"),
app =express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose");
//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema)

//RESTFUL ROUTES


// Blog.create({
//     title:'Test blog',
//     image: "https://images.unsplash.com/photo-1504826260979-242151ee45b7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9&s=ae4c9e222206f20c1e043ce5915999f8",
//     body: "HELLO THIS IS A BLOG POST!"
// });

app.get("/", function(req, res){
    res.redirect("/blogs");
});


app.get("/blogs",function(req, res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        }else{
            res.render("index", {blogs: blogs});
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER IS RUNNING");
})