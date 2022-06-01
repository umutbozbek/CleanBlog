const mongoose=require("mongoose");
const Schema=mongoose.Schema;


// create Schema

// title:String, detail:String, dateCreated:Date(default now) 
// özelliklerine sahip Post modelini oluşturalım.

const BlogSchema=new Schema ({
    title:String,
    detail:String,
    dateCreated:{
        type:Date,
        default:Date.now
    }
})




const Blog=mongoose.model('Blog',BlogSchema)

module.exports= Blog;