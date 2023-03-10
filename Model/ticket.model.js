const mongoose=require("mongoose")

const TicketSchema=mongoose.Schema({
    category:{type:String,required:true},
    title:{type:String,required:true},
    message:{type:String,required:true},
    email:{type:String,required:true}
},{timestamps:true})

const TicketModel=mongoose.model("ticket",TicketSchema)

module.exports={TicketModel}