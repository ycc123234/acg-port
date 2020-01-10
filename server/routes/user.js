//引入express模块
const express=require('express');
//引入连接池对象
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//闭包
	var fa=function(){}
var code =400;
//用户注册
router.post('/reg',(req,res)=>{
	//获取数据
	//验证数据是否为空
	for(msg in req.body){
		code++
		if(!req.body[msg].replace(/\s*/g,'')){
			res.send(`{code:${code},msg:'${msg} required'}`);
			break;
		}
		
	}
	//把数据插入到数据库
	//执行sql语句
	pool.query('INSERT INTO xz_user SET ?',[req.body],(err,result)=>{if(err)throw err;
		if(result.affectedRows>0)res.send({code:200,msg:'register success'});
		else{res.send({code:300,msg:'register error'});}
	});

	})
//用户登录
router.post('/login',(req,res)=>{
	console.log(req.body);
	for(msg in req.body){
		code++
		if(!req.body[msg].replace(/\s*/g,'')){
			res.send(`{code:${code},msg:'${msg} required'}`);
			break;
		}
	}
	pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[req.body.uname,req.body.upwd],(err,result)=>{if(err)throw err;
	
	//如果数组中有元素说明成功 没有元素失败
	if(result.length>0){
			res.send({code:code,msg:'login success'});
		}else{
			res.send({code:code,msg:'login error'});
		}
		console.log(result,result.length>0);
	});

})
//用户删除  按编号删除   user_delete.html
router.get('/delete',(req,res)=>{
	code++;
	console.log(req.query);
	if(!req.query.uid.replace(/\s*/g,'')){
		res.send(`{code:401,msg:'uid required'}`);
	}else{
		pool.query('DELETE FROM xz_user WHERE uid=?',[req.query.uid],(err,result)=>{if(err)throw err
		if(result.affectedRows>0)res.send({code:code,msg:'delete success'});
		else res.send({code:code,msg:'delete error'});
	});
	}
	
})
//用户查询  按编号
router.get('/detail',(req,res)=>{
	if(!req.query.uid.replace(/\s*/g,'')){
	res.send(`{code:401,msg:'uid required}`);
	}else{
		pool.query('SELECT * FROM xz_user WHERE uid=?',[req.query.uid],(err,result)=>{
		if(err)throw err;
		if(result.length>0){
			res.send(result);
		}else{res.send('查无此人')}
	})
	}
	
})
//用户修改信息
router.get('/update',(req,res)=>{
	console.log('===========')
	code++;
	isVoid=false;
		for(var msg in req.query ){
			console.log(msg,req.query[msg]);
			if(!req.query[msg].replace(/\s*/g,'')){
				isVoid=true;
					res.send({'code':401,'msg':`${msg}   required`})
				break;
			}
		}
		if(!isVoid){
			pool.query('UPDATE xz_user SET email=?,phone=?,user_name=?,gender=? WHERE uid=?',[req.query.email,req.query.phone,req.query.user_name,req.query.gender,req.query.uid],(err,result)=>{if(err) throw  err;
			if(result.affectedRows>0){
				res.send({'code':404,msg:'update success'});
			}else{
				res.send({'code':404,msg:'update error'});
			}
		})
		}else{
		}
})
//分页
router.get('/list',(req,res)=>{
	var reg=new RegExp(/\D/);
	var pno=req.query.pno;
	var count=req.query.count;
	if(!reg.test(pno)&&!reg.test(count)){
		if(pno=='')pno=0;
		if(count=='')count=0;
		pool.query('SELECT * FROM xz_user LIMIT ?,?',[parseInt((pno-1)*count)<0?0:parseInt((pno-1)*count),parseInt(count)],(err,result)=>{if(err)throw err;
			if(result.length>0)res.send(result);
			else res.send('查无符合条件的数据');
		})
	}else{
		res.send('输入框包含非法字符');
	}	
})


module.exports=router;
