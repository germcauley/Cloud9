var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
    
});
var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//         {
//             name: "Smokey Bear Forest",
//             image: "http://www.photosforclass.com/download/pixabay-548022?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2Fec31b90f2af61c22d2524518b7444795ea76e5d004b0144397f0c678a1ebb7_960.jpg&user=bhossfeld",
//             description: "This is a huge forest camp. No bathrooms or running water. A real survivors wilderness!"
            
//         },
//         function(err, campground){
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("NEWLY CREATED CAMPGROUND:");
//                 console.log(campground)
//             }
//         });



app.get("/", function(req, res){
    res.render("landing");
});

//INDEX - show all campgrounds
//display campgrounds
app.get("/campgrounds", function(req,res){
    //Get all campgrounds from DB
    Campground.find({},function(err, allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
});

//CREATE
//post new camp ground and redirect
app.post("/campgrounds", function(req, res){
   
   //get data from form and add to campgrounds array
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = ("campgrounds",{name:name, image:image, description: desc});
   //CREATE NEW CAMPGROUND AND SAVE TO DB
   Campground.create(newCampground,function(err, newlyCreated){
       if(err){
           console.log(err);
       }else{
           //redirect back to campgrounds page
           res.redirect("/campgrounds");
       }
   });
});

//route for form
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
 

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})
 
 
 
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server Has Started!");
});