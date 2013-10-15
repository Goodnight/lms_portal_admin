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
					required : "����������",
					number : "����������",
					digits : "����������"
				},
				dep_name : {
					required : "��ѡ����"
				},
				type_id : {
					required : "��ѡ����������"
				},
				dmd_item_id : {
					required : "��ѡ����������"
				},
				trainAim : {
					required : "��������ѵĿ��"
				},
				trainObject : {
					required : "��������ѵ����"
				}
			}
		});
	/**
	 * dep_type���ڱ�ǵ�ǰѡ������ĸ�����ѡ��ť
	 * ����ѡ���ź�� dep_type+id �� dep_type+name���и�ֵ
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