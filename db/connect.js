const mongoose=require('mongoose');
const keys=require('../config/keys');

const connect=async()=>{
    return mongoose.connect(keys.db.URL,{
        useUnifiedTopology: true,
        useNewUrlParser: true,   
    })
}

module.exports=connect;