var connection=require("../../db")
// var md5=require("md5");
var moment = require('moment'); // require
moment().format(); 

module.exports=async(req,res)=>{
    const code=req.params.code
    console.log("code",code)
 let y=connection.query(`select created_on from user_registration where code='${code}'`,(err,result)=>{
    console.log(result)
    const myJSON = (result[0].created_on); 
   let link_duration= moment(myJSON).add(10000, 'milliseconds');
    //  console.log(myJSON)
    console.log("link_duration",link_duration)
    let now=moment();
   console.log("now",now)
   if(link_duration>now){
        res.render("password.ejs")
   }
   else{
    res.send("<h2>Sorry Link Has been expired</h2>")
   }
  
 });
 
}