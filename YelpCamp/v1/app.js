var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
    res.render("landing");
});


app.get("/campgrounds", function(req,res){
    var campgrounds=[
        {name: "Salmon Creek", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b0b1_340.jpg"},
        {name: "Rocky Cliff", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b2bf_340.jpg"},
        {name: "Smokey Bear Forest", image: "https://pixabay.com/get/eb37b9082df3003ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b2bf_340.jpg"}
        ]
        
        res.render("campgrounds",{campgrounds:campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});