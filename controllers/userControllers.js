let   User = require('../model/user.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

let register = async (req,res)=>{
let {email,name,password} =req.body
console.log(email,name,password)
const salt =  bcrypt.genSalt(10);
const hash = bcrypt.hash(password,salt);

let user = new User({email,name,password})
 await user.save()
let payload = {id:user.id}

jwt.sign(
payload,
process.env.JWT_SECRET,
{
    expiresIn:'1h'
},(err,token)=>{
    if (err){
        throw err
    }else{
        res.send(token)
    }

}).catch(()=>{


    console.log("error signing jwt!")
})
 res.send(user)
 
}
let login = async(req,res)=>
    {
    let {inp_email,inp_password} =req.body
    let user = await User.findOne({email:inp_email})
    let isValidPWD = await bcrypt.compare(inp_password,user.passord)
if(!isValidPWD){
         res.status(400).send({"message":"user not found !!"})
 }
else{
 res.status(200).json(user)
}
    
    }


let profile = async(req,res)=>{
      if(!isValidPWD){
        res.status(200).send("this is profile  page")
    } 
}
let transaction = async(req,res)=>
    {
if(!isValidPWD){
    res.status(200).send("this is transaction page")
}
}
let wishlist = async(req,res)=>{
    
if(!isValidPWD){
    res.status(200).send("this is wishlist page")
}
}
    
module.exports ={
    login,
    register,
    profile,
    transaction,
    wishlist
}