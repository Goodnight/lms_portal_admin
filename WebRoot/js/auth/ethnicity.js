
$(function(){
	ethClick("eth",0);
});

/**
 * ��Ⱥ������¼�
 */
function ethClick(type,id){
	var url = "";
	if(type=="eth"){
		url = basepath+"/ethnicity/detail.html?etid="+id+"&r="+Math.random();
	}else if(type="pos"){
		url = basepath+"/position/detail.html?pid="+id+"&r="+Math.random();
	}
	$("#detail_ethnicity").load(encodeURI(url));
	
}