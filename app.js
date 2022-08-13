const express=require('express');
const app=express();
const authRouter=require('./routes/auth');
require('dotenv').config();
const passportSetup=require('./config/passport-setup');
const connect=require('./db/connect');
const cookieSession=require('cookie-session')
const keys=require('./config/keys');
const passport = require('passport');





app.use(express.json());
app.use(cookieSession({
    name:"auth2.0",
    keys:[keys.session.sessionKey],
    maxAge:24*60*60*1000
}))

//initiate passport
app.use(passport.initialize());
app.use(passport.session());

const start =async()=>{
    try{
        const response=await connect();
        console.log('db connected');
    }
    catch(err){
        console.log(err);
    }
}

app.listen(8000,()=>{
    console.log('server running---');
})
start();



app.use('/auth',authRouter);

