const  mongoose = require("mongoose")
const connection =mongoose.connect("mongodb+srv://adi:123@cluster0.yzrar1c.mongodb.net/mock")
mongoose.set('strictQuery', true)
module.exports=connection