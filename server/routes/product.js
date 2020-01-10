const express= require('express');
const pool=require('../pool');
var router=express.Router();
var reg=new RegExp(/\D/);
var errCode=400;
//商品列表
router.get('/list',(req,res)=>{
	var reg=new RegExp(/\D/);
	var pno=req.query.pno;
	var count=req.query.count;
	console.log(pno,count);
	console.log(reg.test(pno),reg.test(count));
	if(!reg.test(pno)&&!reg.test(count)){
		if(pno=='')pno=0;
		if(count=='')count=0;
		pool.query('SELECT * FROM xz_laptop LIMIT ?,? ',[parseInt((pno-1)*count)<0?0:parseInt((pno-1)*count),parseInt(count)],(err,result)=>{if(err)throw err;
			if(result.length>0)res.send(result);
			else res.send('查无符合条件的数据');
		})
	}else{
		res.send('输入框包含非法字符');
	}
});

//商品添加
router.post('/add',(req,res)=>{	var isVoid='';
	for(info in req.body ){errCode++;
		if(!req.body[info].replace(/\s*/,'')){
			isVoid=info;
			break;
		}
	}
	if(!isVoid){
		pool.query('INSERT INTO xz_laptop SET ?',[req.body],(err,result)=>{if(err)throw err;
			if(result.affectedRows>0)res.send({code:200,msg:'add    success'})
			else res.send({code:444,msg:'add    failed'})
		})
	}else res.send({code:errCode,msg:isVoid+'    required'});
})
//商品更新
router.post('/update',(req,res)=>{var isVoid='';
	for(info in req.body){errCode++
		if(!req.body[info].replace(/\s*/,'')){
			isVoid=info;
			break;
		}
	}
	if(!isVoid){
		pool.query('UPDATE xz_laptop SET title=?,price=? WHERE lid=?',[req.body.title,req.body.price,req.body.lid],(err,result)=>{if(err)throw err;
			if(result.affectedRows>0)res.send({code:200,msg:'update    success'});
			else res.send({code:444,msg:'update    failed'})
		})
	}else res.send({code:errCode,msg:isVoid+'    required'});
})
//商品删除
router.post('/delete',(req,res)=>{var isVoid='';
	for(info in req.body){errCode++;
		if(!req.body[info].replace(/\s*/,'')){
			isVoid=info;
			break;
		}
	}
	if(!isVoid){
		pool.query('DELETE FROM xz_laptop WHERE lid=?',[req.body.lid],(err,result)=>{if(err)throw err;
			if(result.affectedRows>0)res.send({code:200,msg:'delete success'});
			else res.send({code:444,msg:'delete failed'})
		});
	}else res.send({code:errCode,msg:isVoid});
})
//商品详情
router.get('/detail',(req,res)=>{var isVoid='';
	for(info in req.query){
		if(!req.query[info].replace(/\s*/,'')){
			isVoid=info;
			break;
		}
	}
	if(!isVoid){
		console.log(req.query.lid);
		pool.query('SELECT * FROM xz_laptop WHERE lid=?',[req.query.lid],(err,result)=>{if(err)throw err;
			if(result.length>0)res.send(result);
			else res.send({code:444,msg:'select failed'});
		})
	}else res.send({code:errCode,msg:isVoid+'  required'});

})
module.exports=router;