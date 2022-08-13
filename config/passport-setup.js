const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth2');
const keys=require('./keys');
const userModel=require('../models/user');

passport.serializeUser((user,done)=>{
    console.log("from serilizer"+user);
    done(null,user.id);
})

passport.deserializeUser((id,done)=>{
    console.log('from des'+id);
    const currentUser=userModel.findById({_id:id}).then((user)=>{
        done(null,user)
    })
})



passport.use(new GoogleStrategy({
    //here login 
    //clientId
    //clientSecret
    callbackURL:keys.google.callbackURL,
    clientID:keys.google.clientId,
    clientSecret:keys.google.clientSe
},(request,accessToken,refreshToken,profile,done)=>{
    //in the stage passport as all token to interact with google
    //so in exange for token google will send you data
    //it can be accessed here
    const {displayName,id}=profile;

    const userExist=userModel.findOne({googleId:id})
    .then((find)=>{
        if(find){
            console.log('user already present');
            done(null,find);
        }
        else{
            userModel.create({
                username:displayName,
                googleId:id
            }).then((response)=>{
                console.log('new use created');
                done(null,response);
            }).catch((err)=>{
                console.log(err);
            })
        }

    })


    // const findUser=userModel.findOne({googleId:profile})
    //before saving check already exist->
         //check it with db and then only save it
    //save profile data to database
})
);