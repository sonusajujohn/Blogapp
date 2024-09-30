const mongoose=require("mongoose");
const schema = mongoose.Schema({
//Write missing code here
    Title:String,
    Author:String,
    Likes:Number,
    Comments:Number
});

//Write missing code here
const blogData=mongoose.model('blogdata',schema);
module.exports=blogData;
