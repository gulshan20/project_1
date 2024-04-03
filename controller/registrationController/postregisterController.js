var connection=require("../../db")
module.exports=async(req,res)=>{
    const code=req.params.code
    console.log(code)
   fdata=req.body;
   const name=fdata.name;
   const phone=fdata.phone;

   const email=fdata.email;
   // var url=`/activate/${code}`
    connection.query(`select * from user_registration where email='${email}'`,(err,result)=>{
   console.log(result);
    let flag=true
   if(result.length>0){
     if(result[0].password!=null){
         flag=false
         // return;
     }
     if(!(result[0].password==null)){
       flag=false
     }
   
   } else{
     flag=true;
      connection.query(`insert into user_registration(name,phone,email,code) values('${name}','${phone}','${email}','${code}')`);
   }
   console.log(flag);
   res.json(flag);
  });

 }