var connection=require("../../db")
module.exports=(req,res)=>{
    const code=req.params.code
    pdata=req.body;
    let salt=randomStr(4,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890');
    const password=pdata.password[0];
    console.log("salt",salt);
    console.log("password",password);
    const combinepassword=salt+password
    const finalpassword=md5(combinepassword);
    console.log("encrypted",finalpassword);
    var query=`update user_registration set password ='${finalpassword}', salt='${salt}' where code='${code}'`;
    connection.query(query);
    res.send("ok");
  

    
}