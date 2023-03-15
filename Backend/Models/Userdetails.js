const mongoose=require("mongoose")

const userdetails= new mongoose.Schema({
    username:{type:String,
    required:true
    },
    foodquantity:{type:Number,
        required:true
    },
    emailid:{type:String,
        required:true
    },
    phonenumber:{type:Number,
        required:true
    },
    address:{type:String,
        required:true
    },
    foodimg:{
        type:String,
        required: true
    },
    foodprice:{
        type:Number,
        required: true
    },
    foodname:{
        type:String,
        required:true,
    },
     totalprice:{
        type:Number,
        required: true
    }
    

})

const UserdetailsModels= new mongoose.model("User_data",userdetails)

module.exports=UserdetailsModels