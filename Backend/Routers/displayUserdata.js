const express= require('express')
const router= express.Router();
// const fooddetails= require("../Models/fooddetails")
const ud=require('../Models/Userdetails')
router.get("/userdisplay",async(req,res)=>{
try{
    const response= await ud.find({})
    return res.json({response})
}
catch{
    console.log("error")
    return res.json({massege:error})

}
})
module.exports=router