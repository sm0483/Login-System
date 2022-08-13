//setup
const passport=require('passport');

const getLogin=async(req,res)=>{
    res.json({"link":"www.google.com"});
}

const getLogout=async(req,res)=>{
    res.json({"link":"logout"})
}

const redirectCall=async(req,res)=>{
    res.send('hiu');
}


module.exports={
    getLogin,
    getLogout,
    redirectCall

}