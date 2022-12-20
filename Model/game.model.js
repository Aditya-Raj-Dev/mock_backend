const  mongoose = require("mongoose")
mongoose.set('strictQuery', true)
const GameSchema=mongoose.Schema({
     name:{type:String,required:true},
    score:{type:Number,required:true},
    level:{type:String,required:true},
    createdAt:Date,
},{timestamps:true})

const GameModel= mongoose.model("Game",GameSchema)

module.exports=GameModel