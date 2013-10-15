$(function(){
	//加载列表
	page(1);
	$("#submit1").click(function(){
		var postId = $("input:radio[name=postId]:checked");
		if(postId.length==0){
			alert("请选择岗位");
			return false;
		}
		$("#pName").val($(postId).parent().text());
		$("#post_id").val($(postId).val());
	});
});

/**
 * 分页
 */
function page(i){
	var postName = document.getElementById("postName").value;
	var value ="&postName="+postName;
	var url = basepath+"/demand/demandPostAllList.html?pagefn=page&page="+i+value+"&r="+Math.random();
	$("#list_demandPostList").load(encodeURI(url),function(){
		$(".cls_checkbox").uniform();
	});
}
