$(function(){
	
		$("#demandDepNew").validate({
			rules:{
				personNums : {
					required : true,
					number : true,
					digits : true
				},
				dep_name : {
					required : true
				},
				type_id : {
					required : true
				},
				dmd_item_id : {
					required : true
				},
				trainAim : {
					required : true
				},
				trainObject : {
					required : true
				}
			},
			messages:{
				personNums : {
					required : "请输入人数",
					number : "请输入数字",
					digits : "请输入整数"
				},
				dep_name : {
					required : "请选择部门"
				},
				type_id : {
					required : "请选择需求类型"
				},
				dmd_item_id : {
					required : "请选择需求内容"
				},
				trainAim : {
					required : "请输入培训目标"
				},
				trainObject : {
					required : "请输入培训对象"
				}
			}
		});
	/**
	 * dep_type用于标记当前选择的是哪个部门选择按钮
	 * 并在选择部门后对 dep_type+id 或 dep_type+name进行赋值
	 */ 
	$(".cls_choosedepartment").click(function(){
			dep_type = $(this).attr("id");
			windowkey=true;
			oncekey = true;
			setOrgData(0);
			$("#dialog_content").html(dialoghtml);
			$(".bta").attr("cid","0");
			$("#dialog").show();
	});

	$(".cls_button_choosetree_ok").live("click",function(){
		if(return_data.length>0 && return_data[0].length>0){
			if(oncekey){
				$("#"+dep_type+"_id").val(return_data[0][0]["id"]);
				$("#"+dep_type+"_name").val(return_data[0][0]["name"]);
			}
		}
	});
	
});