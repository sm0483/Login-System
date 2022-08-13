const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username cannot be empty']
    },
    googleId:{
        type:String,
        required:[true,'google id cannot be empty']
    }
})

const userModel=mongoose.model('User',userSchema);
module.exports=userModel;