var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

///POST - title content

var postSchema = new mongoose.Schema({
    title: String,
    content:String
});


///USER -email name
var userSchema = new mongoose.Schema({
    email: String,
    name:String,
    posts: [postSchema]
});

var User = mongoose.model("User", userSchema);


var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//     email: "Bobby@brown.edu",
//     name:"Bobby Brown"
// });

// newUser.posts.push({
//     title: "How to brew polyjuice potion",
//     content: " Just Kidding I dont know"
// });


// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(user);
//     }
// });


// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// });

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(post);
//     }
// });

User.findOne({name: "Bobby Brown"}, function(err, user){
    if(err){
        console.log(err);
    }else{
        user.posts.push({
            title: "3Things i really hate",
            content: "Voldermort VOldermort Voldermort"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            }else{
                console.log(user);
            }
        })
    }
});