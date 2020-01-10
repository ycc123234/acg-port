const express=require('express');
const pool=require('../pool.js');
var router=express.Router();

var isVoid='';
var errCode=400;
router.get("/demo",(req,res)=>{
	if(!isVoid){
		pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[req.query.uname,req.query.upwd],(err,result)=>{if(err)throw err;
				console.log('###########link success###########');

			if(result.length>0){
				res.send({code:200,msg:'login success'});
			}else{
				res.send({code:400,msg:'login error'});
			}
				
		})
	}else{
		res.send({code:errCode,msg:isVoid+'   required'});
	}
})

router.get('/list',(req,res)=>{
	pool.query('SELECT * FROM xz_laptop',(err,result)=>{if(err)throw err;
		res.send(result);
	})
})

router.get('/reg',(req,res)=>{
	if(req.query.uname!=''){
		pool.query('SELECT * FROM xz_user WHERE uname=?',[req.query.uname],(err,result)=>{if(err)throw err;
		if(result.length>0)
			res.send({code:404,msg:'用户名已存在'});
		else
			res.send({code:200,msg:'用户名可用'})
	})}else
		res.send({code:500,msg:'请检查用户名格式是否正确'})
})
module.exports=router;