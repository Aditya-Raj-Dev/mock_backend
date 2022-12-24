const { SignupModel } = require("../Model/signup.model");
const bcrypt=require("bcrypt")
var jwt = require('jsonwebtoken');
const { TicketModel } = require("../Model/ticket.model");

const signup= async (req,res)=>{

        const {name,email,password}=req.body;
        bcrypt.hash(password, 4, async function(err, hash) {
            if(err){
                res.send({"msg":"Signup failed"}) 
            }
            const data= new SignupModel({
                name,email,
                password:hash
            })
            await data.save()
            res.send({"msg":"Signup Successfull"})
        });
    }

const Login= async (req,res)=>{
    const {email,password}=req.body
    const user= await SignupModel.find({email,password})
    const hash= user[0].password
    bcrypt.compare(password, hash, async function(err, result) {
        if(result){
            var token = jwt.sign({ email: email}, "123", { algorithm: 'RS256' });
            res.send({"msg":"login successfull","token":token})
        }
        else{
            res.send({"msg":"Login Failed"})
        }
    });

}

const Ticketcreate=async(req,res)=>{
  const {category,title,message,email}=req.body;
  const data= await TicketModel.create({
    category,title,message,email
  })
  res.send({"msg":"Ticket Created"})
}

const showAllticket=async(req,res)=>{
    const {email}= req.body
    const data =await TicketModel.find({email})
    res.send({"msg":data})
}

module.exports={signup,Login,Ticketcreate,showAllticket}