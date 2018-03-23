var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
        {name: "Salmon Creek", image: "http://www.campriversedge.com/Websites/campriversedge/Images/RETentsMed.jpg"},
        {name: "Rocky Cliff", image: "http://img.metro.co.uk/i/pix/2011/05/27/article-1306483624117-0C465BCC00000578-172642_466x310.jpg"},
        {name: "Smokey Bear Forest", image: "http://www.traveloutthere.com/files/photo_gallery/457x306/Forest-Camping.jpg"}
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