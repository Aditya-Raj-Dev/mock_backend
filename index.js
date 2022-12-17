const express =require("express")
const connection = require("./database/db")
const cors = require("cors")
const JobsRouter = require("./Route/Jobs.route")

const app=express()

app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.send("welcome")
})

app.use("/jobs",JobsRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("database connnected")
    }
    catch(e){
        console.log(e)
    }
    console.log("server Started backend")
})