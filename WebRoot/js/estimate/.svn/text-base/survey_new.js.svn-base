/**
	 * pid 和 userurl是弹窗需要的参数
	 * pid是当前评估的id，userurl是用来保存用户的url
	 */
var pid ="";
var userurl = "";

$(function(){
	
	$("#survey_form").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules:{
			topic : {
				required : true
			},
			startDt : {
				required : true
			},
			endDt : {
				required : true
			},
			normal_tpname :{
				required : true
			},
			upper_tpname :{
				required : true
			},
			equal_tpname :{
				required : true
			},
			lower_tpname :{
				required : true
			},
			self_tpname :{
				required : true
			},
			other_tpname :{
				required : true
			}
		},
		messages:{
			topic:"评估主题必填",
			startDt : "请输入开始日期",
			endDt : "请输入结束日期",
			normal_tpname: "请选择模版",
			upper_tpname: "请选择模版",
			equal_tpname: "请选择模版",
			lower_tpname: "请选择模版",
			self_tpname: "请选择模版",
			other_tpname: "请选择模版"
		}
	});
	/*$("#survey_form").submit(function(){
		var participantsNum = $("#participantsNum").val();
		var status = $("#status").val();
		if(status==2){
			alert("已经发布不能修改！！");
			return false;
		}
		if(participantsNum>0){
			alert("已经有人参加评估,只能修改开始结束时间！！");
			$("#normal_tpid").val("");
			$("#class_id").val("");
		}
	});
	*/
	/**
	 * 打开模板选择对话框
	 */
	$(".cls_choose_tp").click(function(){
		
		$('#normal_error').html('');
		$('#common_error').html('');
		var id = $(this).attr("id");
		var url = basepath + "/survey/dialog/choose/template.html?html_id="+id+"_tpid&html_name="+id+"_tpname&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog,#dialog .blackall,#dialog .newwindow").show();
		
		$('#normal_tpname').removeClass('error');
		$('#normal_tpname_error').html('');
	});
	
	//选择培训班
	$(".cls_choose_class").click(function(){
		var url = basepath+"/survey/dialog/trainclass.html?html_id=class_id&html_name=class_name&r="+Math.random();
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	$(".cls_ok").live("click",function(){
		$("#class_name").focus();
	});
	
	//培训班开始日期
	$("#startDt").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate: new Date($("#tcStartDate").val()),
		onSelect : function(dt){
			$("#endDt").datepicker("option","minDate",dt);
			$('#startDt').removeClass('error');
			$('#startDt_error').html('');
		}
	});
	
	//培训班结束日期
	$("#endDt").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#startDt").datepicker("option","maxDate",dt);
			$('#endDt').removeClass('error');
			$('#endDt_error').html('');
		}
	});
	
	//删除评估
	$("#btn_delete").click(function(){
		if($("input:checkbox[name=auid]:checked").length>0){
			$.dialog.confirm("你确定要删除选中的人员吗？",function(){
				var param = $.param($("input:checkbox[name=auid]:checked"));
				$.ajax({
					url : basepath+"/survey/aimuser/delete.html",
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
		if("1"==type || "3"==type || "4"==type){
			userurl = basepath+"/survey/allowuser/add.html?type="+type;
		}else if("2"==type){
			userurl = basepath+"/survey/aimuser/add.html";
		}else{
			
		}
		$("#dialog_content").load(url);
		$("#dialog").show();
	});
	
	
	//判断是否选择培训班，从而设置满意度调查是否有效
	$("#class_name").blur(function(){
		var v = $(this).val();
		if(""==v){
			$(".cls_tr_common").hiden();
		}else{
			$(".cls_tr_common").show();
		}
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
		var query = "&type="+$("#search_type").val();
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
		if("1"==type||"3"==type||"4"==type){
			url = basepath+"/survey/allowuser/list.html?type="+type+"&pagefn=page&page="+i+"&max="+max+"&id="+sid+"&r="+Math.random();
		}else if("2"==type){
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