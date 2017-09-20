var express = require('express');
var mysql = require('mysql');
var router = express.Router();

/*router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});*/

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'suibian',
	database:'car',
	port:'3306'
})
// 获取数据
router.post('/admin',function(req,res){
	var num=req.body.page;
	getpage(function(rest){
		res.send({rest})
	});
})
function getpage(cb){
	pool.getConnection(function(err,con){
		var sql = 'select * from nav';
		con.query(sql,function(err,rest){
			if(err){
				console.log("error:"+err);
				return;
			}
			con.release();
			cb(rest)
		})
	})
}

// 删除数据
router.post('/dele',function(req,res){
	var id=req.body.id;
	dele(id,function(rest){
		res.send({rest})
	});
})
function dele(id,cb){
	pool.getConnection(function(err,con){
		var sql = 'select * from nav where id = ?';
		con.query(sql,[id],function(err,rest){
			if(err){
				console.log("error:"+err);
				return;
			}
			con.release();
			cb(rest)
		})
	})
}

// 修改数据
router.post('/gai',function(req,res){
	var newN=req.body.newN;
	var id=req.body.id;
	console.log(newN,id);
	replace(newN,id,function(rest){
		res.send({rest})
	});
})
function replace(newN,id,cb){
	pool.getConnection(function(err,con){
		var sql = 'update nav set con = ? where id = ? ';
		con.query(sql,[newN,id],function(err,rest){
			if(err){
				console.log("error:"+err);
				return;
			}
			con.release();
			cb(rest)
		})
	})
}

//增加数据
router.post('/into',function(req,res){
	var newD=req.body.newD;
	console.log(newD);
	into(newD,function(rest){
		res.send({rest})
	});
})
function into(newD,cb){
	pool.getConnection(function(err,con){
		var sql = 'insert into nav (con) values (?) ';
		con.query(sql,[newD],function(err,rest){
			if(err){
				console.log("error:"+err);
				return;
			}
			con.release();
			cb(rest)
		})
	})
}




module.exports=router;