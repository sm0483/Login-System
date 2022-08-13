const express=require('express');
const router=express.Router();
const {getLoginGoogle, getLogout, redirectCall, protectedRoute,}=require('../controller/auth');
const passport=require('passport');


const isLogedIn=async(req,res,next)=>{
    if(!req.user){
        return res.redirect('/auth/google/login');
    }
    return next();
}

router.route('/google/login').get(getLoginGoogle);

router.route('/logout').get(getLogout);
router.route('/google').get(passport.authenticate('google',{
    scope:['profile']
}));




router.route('/google/redirect').get(passport.authenticate('google'),redirectCall);
router.route('/test/').get(isLogedIn,protectedRoute);

module.exports=router;