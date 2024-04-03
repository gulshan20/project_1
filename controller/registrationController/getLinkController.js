module.exports=(req,res)=>{
    
    const code=req.params.code;
    res.render("link.ejs",{code:code})
  }