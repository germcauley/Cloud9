var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

///POST - title content

var postSchema = new mongoose.Schema({
    title: String,
    content:String
});
var Post = mongoose.model("Post",postSchema);

///USER -email name
var userSchema = new mongoose.Schema({
    email: String,
    name:String,
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
            
        }
    ]
});

var User = mongoose.model("User", userSchema);

//CREATE POSTS AND ASSOCIATE WITH A USER
// Post.create({
//     title:"This is the Post Title of a Third Post",
//     content:"asdasdads asdasdasdasdasd asdasdasd asd"
// }, function(err, post){
//     console.log(post);   
//     User.findOne({email: "Tom@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         }else{
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 }else{
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });



//CREATE A USER
// User.create({
//     email: "tom@gmail.com",
//     name: "Tom Murphy"
// })

//FIND USER
//FIND ALL POSTS BY A USER

User.findOne({email:"tom@gmail.com"}).populate("posts").exec(function(err,user){
    if(err){
        console.log(err);
    }else{
        console.log(user);
    }
});

