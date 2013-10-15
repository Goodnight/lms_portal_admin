var winWidth = 0;
var winHeight = 0;
function findDimensions(){
	if(window.innerWidth){
		winWidth = window.innerWidth;
	} else if((document.body) && (document.body.clientWidth)){
		 winWidth = document.body.clientWidth;
	}  
   if(window.innerHeight){
	winHeight = window.innerHeight;
   }else if((document.body) && (document.body.clientHeight)){
	   winHeight = document.body.clientHeight;
	 }
	if(document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;
		winWidth = document.documentElement.clientWidth;
	}
	//alert(winHeight);
	rH = winHeight - 30;
	$("#frame_content").css({"height":rH});
}
$(document).ready(function(){
	findDimensions(); 
	window.onresize=findDimensions;
});