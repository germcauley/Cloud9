var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
        {name: "Salmon Creek", image: "https://pixabay.com/get/eb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b0b1_340.jpg"},
        {name: "Rocky Cliff", image: "https://pixabay.com/get/e837b1072af4003ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b2bf_340.jpg"},
        {name: "Smokey Bear Forest", image: "https://pixabay.com/get/eb37b9082df3003ed1584d05fb1d4e97e07ee3d21cac104497f1c471a1e8b2bf_340.jpg"}
]


app.get("/", function(req, res){
    res.render("landing");
});

//display campgrounds
app.get("/campgrounds", function(req,res){
        res.render("campgrounds",{campgrounds:campgrounds});
});

//post new camp ground and redirect
app.post("/campgrounds", function(req, res){
   
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var newCampground = ("campgrounds",{name:name, image:image});
   campgrounds.push(newCampground);
   //redirect back to campgrounds page
   res.redirect("/campgrounds");
});

//route for form
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});