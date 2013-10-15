/**
	 * pid 和 userurl是弹窗需要的参数
	 * pid是当前评估的id，userurl是用来保存用户的url
	 */
var pid ="";
var userurl = "";

$(function(){
	page(1);
	
	/**
	 * 打开模板选择对话框
	 */
	$(".cls_choose_tp").click(function(){
		var id  = $(this).attr("id");
		var url = basepath + "/survey/dialog/choose/template.html?html_id="+id+"_tpid&html_name="+id+"_tpname&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	//删除评估
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=auid]:checked").length>0){
			$.dialog.confirm("你确定要删除选中的人员吗？",function(){
				var param = $.param($("input:checkbox[name=auid]:checked"));
				pid = $("#sid").val();
				param=param+"&pid="+pid;
				var url = "";
				var type = $("#stype").val();
				if("1"==type || "3"==type || "4"==type){
					url = basepath+"/survey/allowuser/delete.html";
				}else if("2"==type){
					$.dialog.tips('数据加载中...',600,'loading.gif');
					url = basepath+"/survey/aimuser/delete.html";
				}else{
					
				}
				$.ajax({
					url : url,
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						if(data==null){
							$.dialog.tips("删除出错",2,"tips.gif");
						}else{
							$.dialog.tips("删除成功",2,"tips.gif");
							page(1);
						}
					},
					error:function(){
						$.dialog.tips("删除出错",2,"tips.gif");
					}
				});
			},function(){
					
			});
		}else{
			$.dialog.alert("请选择删除项！");
		}
	});
	
	//高级搜索
	$(".searchbutton").click(function(){
		page(1);
	});
	
	$("#btn_import").click(function(){
		var url = basepath + "/behavior/upload.html";
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	
	$("#btn_chooseperson").click(function(){
		pid = $("#sid").val();
		var type = $("#stype").val();
		var url = basepath+"/dialog/user.html?page=page&r="+Math.random();
		if("1"==type  || "4"==type){
			userurl = basepath+"/survey/allowuser/add.html?type="+type;
		}else if("2"==type || "3"==type){
			userurl = basepath+"/survey/aimuser/add.html";
		}else{
			
		}
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
	});
	
});

/**
 *评估列表分页
 */
function page(i){
	var sid = $("#sid").val();
	if(null!=sid&&""!=sid){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var type = $("#stype").val();
		var max = $("#aulist .page_max").val()?$("#aulist .page_max").val():10;
		var user_sn = $("#search_user_sn").val();
		var user_name = $("#search_user_name").val();
		var user_mobile = $("#search_user_mobile").val();
		var query = "&type="+$("#stype").val();
		if(user_sn!=""){
			query+="&user_sn="+user_sn;
		}
		if(user_name!=""){
			query+="&user_name="+user_name;
		}
		if(user_mobile!=""){
			query+="&user_mobile="+user_mobile;
		}
		var url;
		if("1"==type || "4"==type){
			url = basepath+"/survey/allowuser/list.html?type="+type+"&pagefn=page&page="+i+"&max="+max+"&id="+sid+"&r="+Math.random();
		}else if("2"==type ||"3"==type){
			url = basepath+"/survey/aimuser/list.html?pagefn=page&page="+i+"&max="+max+"&sid="+sid+"&r="+Math.random();
		}
		$("#aulist").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//全选
			bindChooseAll("cls_chooseall_est");
			//选择每页记录数量
			$("#aulist .page_max").change(function(){
				page(1);
			});
			
			$(".appointbutton").click(function(){
				var auid = $(this).attr("id");
				var url = basepath+"/survey/allowuser/dialog.html?auid="+auid+"&sid="+sid+"&r="+Math.random();
				$("#dialog_content").load(url);
				$("#dialog").show();
			});
		});
	}
	
}