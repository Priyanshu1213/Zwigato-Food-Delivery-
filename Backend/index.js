const express = require("express")
const app=express();

const db= require("./db")

const udd=require("./Routers/displayUserdata")
const fooddetailsApi=require("./Routers/food_details")
const user_details = require("./Routers/User_route")
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
     next();
  })

// app.get("/",(req,res)=>{
//     res.send("hello from backend")

// })

app.use('/api',fooddetailsApi)

app.use('/api',user_details)
app.use('/api',udd)
app.listen(5000,()=>{
    console.log("chal gya express")
})