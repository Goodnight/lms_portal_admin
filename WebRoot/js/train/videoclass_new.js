/**
 * 
 */
$(function(){
	
	$("#videoclass_form").validate({
		errorPlacement: function(error, element) {
			var id = $(element).attr("id");
			error.appendTo( $("#"+id+"_error") );
		},
		rules : {
			name : {
				required : true,
				maxlength:50
				
			},
			sn : {
				required : true
			},
//			tag : {
//				required : true
//			},
			startTm : {
				required : true
			},
			endTm : {
				required : true
			},
			compereName : {
				required : true
			},
			speakerName : {
				required : true
			},
			maxAttend : {
				required : true,
				number :true,
				min : $("#tc_attendNum").val()
			}
		},
		messages : {
			name : {
				required:"请输入同步课堂名称",
				maxlength:"名称的最大长度不能超过50"
			},
			sn : "请输入同步课堂编号",
//			tag : "请输入标签",
			startTm : "请输入开始时间",
			endTm : "请输入结束时间",
			compereName : "请选择主持人",
			speakerName : "请选择主讲人",
			maxAttend : {
				required : "请输入最大参加人数",
				number : "请输入数字",
				min : "人数不能小于培训班人数"
			}
		}
	});
	
	//打开选择人员对话框
	$(".chooseperson").click(function(){
		var person_type = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+person_type+"Name&html_id="+person_type+"Id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
	//培训班开始日期
	$("#startTm").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		minDate : trainStartDt,
		onSelect : function(dt){
			$("#endTm").datepicker("option","minDate",dt);
		}
	});
	
	//培训班结束日期
	$("#endTm").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		maxDate : trainEndDt,
		onSelect : function(dt){
			$("#startTm").datepicker("option","maxDate",dt);
		}
	});
	
	$(".cls_clear").click(function(){
		var t = $(this).attr("type");
		$("#"+t+"Name").val("");
		$("#"+t+"Id").val("");
	});
	
	$("#btn_cancel").click(function(){
		var tcid = $("#tcid").val();
		window.location.href = basepath+"/trainclass/videoclass.html?tcid="+tcid;
	});
});

