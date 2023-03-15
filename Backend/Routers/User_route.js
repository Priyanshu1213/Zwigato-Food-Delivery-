const bodyParser = require("body-parser");
const express= require("express")
const route=express.Router();
const User_model=require("../Models/Userdetails");
 


const jp=bodyParser.json()
route.post("/userdata" , jp, async(req,res)=>{

try {

    const response= await User_model.create({
        username:req.body.username,  
       foodquantity:req.body.foodquantity,  
       emailid:req.body.emailid,  
       phonenumber:req.body.phonenumber,  
       address:req.body.address,  
       foodimg:req.body.foodimg,  
       foodprice:req.body.foodprice,  
       foodname:req.body.foodname,
       totalprice:req.body.totalprice

    //    username:"req.body.username,  ",
    //    foodquantity:4,
    //    emailid:"req.body.emailid, ", 
    //    phonenumber:876655 ,
    //    address:"req.body.address,  ",
    //    foodimg:"req.body.foodimg,  ",
    //    foodprice:78  
    
    })
    res.json({response})
} catch (error) {
    console.log({error})
    
}  


})
module.exports=route