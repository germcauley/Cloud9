var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds=[
        {name: "Salmon Creek", image: "http://www.photosforclass.com/download/pixabay-839807?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe136b80728f31c22d2524518b7444795ea76e5d004b0144397f0c678a1ebb7_960.jpg&user=Free-Photos"},
        {name: "Rocky Cliff", image: "http://www.photosforclass.com/download/pixabay-2581242?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Feb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f2c170afe9b6bb_960.jpg&user=6091236"},
        {name: "Smokey Bear Forest", image: "http://www.photosforclass.com/download/pixabay-548022?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fec31b90f2af61c22d2524518b7444795ea76e5d004b0144397f0c678a1ebb7_960.jpg&user=bhossfeld"},
        {name: "Salmon Creek", image: "http://www.photosforclass.com/download/pixabay-839807?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fe136b80728f31c22d2524518b7444795ea76e5d004b0144397f0c678a1ebb7_960.jpg&user=Free-Photos"},
        {name: "Rocky Cliff", image: "http://www.photosforclass.com/download/pixabay-2581242?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Feb30b90e2af0033ed1584d05fb1d4e97e07ee3d21cac104497f2c170afe9b6bb_960.jpg&user=6091236"},
        {name: "Smokey Bear Forest", image: "http://www.photosforclass.com/download/pixabay-548022?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fec31b90f2af61c22d2524518b7444795ea76e5d004b0144397f0c678a1ebb7_960.jpg&user=bhossfeld"}
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