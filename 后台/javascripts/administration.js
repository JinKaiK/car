var oul = document.getElementsByClassName("jkk-right-index")[0];
var big = document.getElementsByClassName("jkk-big")[0];
var ok = document.getElementsByClassName("jkk-ok")[0];
var add = document.getElementsByClassName("jkk-add")[0];
$(function(){
	$.ajax({
		url:"http://localhost:8005/admin/admin",
		type:"post",
		datatype:"json",
		data:{
			
		},
		success:function(data){
			var data=data.rest;
			for(var i=0;i<data.length;i++){
				var oli=document.createElement("li");
				oli.innerHTML=data[i].con+"<button onclick='shan("+data[i].id+")'>删除</button><button onclick='gai("+data[i].id+")'>修改</button>";
				oul.appendChild(oli);
			}
		}
	});
})

$(".jkk-left-ul li").click(function(){
	 $(".jkk-left-ul li").eq($(this).index()).css("background","red").siblings().css('background',"#999")
	$(".jkk-right ul").hide().eq($(this).index()).show();
})
function shan(id){
	$.ajax({
		url:"http://localhost:8005/admin/dele",
		type:"post",
		data:{
			id:id
		},
		success:function(data){
   			console.log(data)
		}
	})
}

function gai(con){
	big.style.display="block";
	big.children[0].placeholder="请输入要修改的值";
	ok.onclick=function(){
		var newN=this.parentNode.children[0].value;
		$.ajax({
			url:"http://localhost:8005/admin/gai",
			type:"post",
			datatype:"json",
			data:{
				newN:newN,
				id:con
			},
			success:function(){
				big.style.display="none";
				window.location.reload();
			}
		})
	}
}

add.onclick=function(){
	big.style.display="block";
	big.children[0].placeholder="请输入要增加的值";
	ok.onclick=function(){
		var newN=this.parentNode.children[0].value;
		$.ajax({
			url:"http://localhost:8005/admin/into",
			type:"post",
			datatype:"json",
			data:{
				newD:newN
			},
			success:function(data){
				big.style.display="none";
				window.location.reload();
			}
		})
	}
}