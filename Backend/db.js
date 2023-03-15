const mongoose= require("mongoose")


const url="mongodb+srv://priyanshuyadav39976:priyanshu@cluster0.drjuuxg.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser:true ,useUnifiedTopology: true})
const connection=mongoose.connection
connection.on("error",()=>{
    console.log("glti hai ")
})
connection.on("connected",()=>{
    console.log("chal gya mongo")
})

module.exports=mongoose