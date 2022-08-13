//setup
const passport=require('passport');

const getLoginGoogle=async(req,res)=>{
    res.send('<h1><a href="http://localhost:8000/auth/google"/a>login</h1>')
}




const getLogout=async(req,res)=>{
    req.logout();
    res.send('logedout');
}



const redirectCall=async(req,res)=>{
    res.send('<h1><a href="http://localhost:8000/auth/test"/a>redirect route</h1>');
}

const protectedRoute=async(req,res)=>{
    res.send('<h1><a href="http://localhost:8000/auth/logout"/a>Logout protected route<h1>'); 
}


module.exports={
    getLoginGoogle,
    getLogout,
    redirectCall,
    protectedRoute,
   

}