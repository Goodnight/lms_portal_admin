jQuery.validator.addMethod("positiveinteger", function(value, element) {
		   var aint=parseInt(value);	
		    return aint>0&& (aint+"")==value;   
		  }, "Please enter a valid number."); 
$("#search_start_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_end_date").datepicker("option","minDate",dt);
		}
	});
	
	$("#search_end_date").datepicker({
		showOn:"button",
		changeMonth: true,
		buttonImage:basepath+"/images/calendar.gif",
		buttonImageOnly:true,
		dateFormat:"yy-mm-dd",
		onSelect : function(dt){
			$("#search_start_date").datepicker("option","maxDate",dt);
		}
	});
$(function(){
	$("#form_scoreUserCost").validate({
		rules : {
			projectName : {
				required : true
			},
			begin_time : {
				required : true,
				isDate : true
			},
			end_time : {
				required : true,
				isDate : true
			},
			costScope_id : {
				required : true
			},
			score : {
				required : true,
				positiveinteger : true,
				0:true
			},
			costWay_id : {
				required : true
			}
		},
		messages : {
			projectName : "不能为空",
			begin_time : "请选择",
			end_time : "请选择",
			costScope_id : "不为空",
			score : {
				required : "不为空",
				positiveinteger : "只能为正整数!"
			},
			costWay_id : "请选择"
			
			
		}
		
	});
});



$(function(){
	$("#form_scoreUserGain").validate({
		rules : {
			score : {
				required : true,
				number : true
			},
			gain_type_id : {
				required : true
			}
		},
		messages : {
			score : {
				required : "不为空",
				number : "只能为数字"
			},
			gain_type_id : "请选择"
		}
		
	});
	
	//打开选择人员对话框
	$(".chooseperson").click(function(){
		var id = $(this).attr("id");
		var url = basepath+"/dialog/user.html?from=choose&html_name="+id+"_name&html_id="+id+"_id&r="+Math.random();
		$("#dialog_content").load(encodeURI(url));
		$("#dialog").show();
	});
	
});
function change()
{
	var costScope_id=$("#costScope_id option:checked").val();
	//alert(costScope_id);
	if(costScope_id=="402882f03879c326013879c6a3bd0003")
		{
			document.getElementById("score").readOnly = true;
			document.getElementById("score").value=0;
		}
	else
		{
			document.getElementById("score").readOnly = false;
			document.getElementById("score").value="";
		}
}

//验证填入兑换积分数小于剩余积分数
$(document).ready(function(){
	$("input[name='_next']").on("click",function(){
		var costScope = $("#costScope_id option:checked").text();
		var score = $("#score").val();
		var dmScore = $("#dmscore").text();
		var psScore = $("#psscore").text();
		if(costScope == "使用部门积分"){
			if(score - dmScore > 0){
				alert("兑换的部门积分不能大于剩余部门积分！");
				return false;
			}
		}
		if(costScope == "使用个人积分"){
			if(score - psScore > 0){
				alert("兑换的个人积分不能大于剩余个人积分！");
				return false;
			}
		}
	});
});
