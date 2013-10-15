
$(function(){
		$("#form_organization").validate({
			rules : {
				sn : {
					required :true
				},
				name : {
					required :true
				},
				address : {
					maxlength : 100
				},
				zipCode : {
					maxlength : 10
				},
				tel : {
					maxlength : 40
				},
				fax : {
					maxlength : 40
				},
				linkMan : {
					maxlength : 20
				}
			},
			messages : {
				sn : "请输入公司编号",
				name : "请输入公司名称",
				address : {
					maxlength : "输入过长,限100个字符!"
				},
				zipCode : {
					maxlength : "输入过长,限11个字符!"
				},
				tel : {
					maxlength : "输入过长,限40个字符!"
				},
				fax : {
					maxlength : "输入过长,限40个字符!"
				},
				linkMan : {
					maxlength : "输入过长,限20个字符!"
				}
			}
		});
		
		$(".cls_org_type").click(function(){
			var v = $(this).val();
			if(v==1){
				$("#shortName").attr("disabled",true);
			}else{
				$("#shortName").attr("disabled",false);
			}
		});
		$("#form_organization").submit(function(){
			var bool = true;
			var sn  = $('#sn').val();
			var snOld = $('#snOld').val();
			sn = $.trim(sn);
			snOld = $.trim(snOld);
			if(sn!=snOld){
				$.ajax({
					url : basepath+"/organization/validate.html",
					type : "get",
					async : false,
					data : "sn="+sn,
					dataType : "json",
					success : function(data){
						//false是已经存在
						bool = data;
					}
				});
				if(!bool)
				{
					$.dialog.alert("编号已存在");
				}
			}
			var name=$('#name').val();
			var nameOld=$('#nameOld').val();
			var upId=$('#upid').val();
			var type = $("input[type='radio']:checked").val();
			if(name!=nameOld)
				{
				$.ajax({
					url : basepath+"/organization/CheckName.html",
					type : "get",
					async : false,
					data : "name="+encodeURI(name)+"&upId="+upId +"&type="+type,
					dataType : "json",
					success : function(data){
						//false是已经存在
						bool = data;
					}
				});
				if(!bool)
				{
					$.dialog.alert("名称已存在,请重新输入");
				}
				}
			var types = $("input[type='radio']:checked").val();
			var shorName = $("#shortName").val();
			if(types==0){
				if(shorName==null || shorName=='' || shorName.length==0){
					alert("请填写公司的简称");
					bool = false;
				}
			}
			return bool;
		});
});
