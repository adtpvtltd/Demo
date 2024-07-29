const mongoose = require('mongoose');

const UserLoginSchema = new mongoose.Schema({
    name: String,      
    email: {type:String,unique:true},   
    password: String,   
    phone: Number       
},
{
    collection: "UserInfo",
});

mongoose.model("UserInfo", UserLoginSchema);
