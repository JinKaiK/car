var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var pool = mysql.createPool({
	host:'127.0.0.1',
	user:'root',
	password:'suibian',
	database:'car',
	port:'3306'
})

function getpage(cb){
	pool.getConnection(function(err,con){
		var sql = 'select con from nav';
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
router.post('/li',function(req,res){
	var num=req.body.page;
	getpage(function(rest){
		console.log(rest);
		res.send({rest})
	});
})


module.exports=router;