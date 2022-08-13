const express=require('express');
const router=express.Router();
const {getLogin, getLogout, redirectCall}=require('../controller/auth');
const passport=require('passport');

router.route('/login').get(getLogin);
router.route('/logout').get(getLogout);
router.route('/google').get(passport.authenticate('google',{
    scope:['profile']
}));

router.route('/google/redirect').get(passport.authenticate('google'),redirectCall);

module.exports=router;