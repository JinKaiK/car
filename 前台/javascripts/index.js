var jkkNav = document.getElementsByClassName("jkk-nav")[0];
var oul = jkkNav.getElementsByTagName("ul")[0];
$(function(){
	$.ajax({
		url:"http://localhost:8005/nav/li",
		type:"post",
		datatype:"json",
		data:{
			
		},
		success:function(data){
			var data=data.rest;
			for(var i=0;i<data.length;i++){
				var oli=document.createElement("li");
				oli.innerHTML=data[i].con;
				oli.onclick=function(){
					oli.style.color="#777"
					this.style.color="#ff6000"
				}
				oul.appendChild(oli)
			}
		}
	})
})

$(window).scroll(function(){
	var s=$(window).scrollTop();
	if(s>90){
		$(".jkk-nav").css({"position":"fixed","top":"-90px","height":"58px","line-height":"58px"});
		$(".jkk-logo img").css({"width":"116px","height":"35px"})
		$(".jkk-nav").animate({top:'0px'},1000);
	}else{
		$(".jkk-nav").css({"position":"absolute","top":"0","height":"90px","line-height":"90px"});
		$(".jkk-logo img").css({"width":"173px","height":"52px"})
	}
});