var dialogType;
var Doom;
$(function(){
	//jquery.validate--正整数验证.
	jQuery.validator.addMethod("positiveinteger", function(value, element) {
		   var aint=parseInt(value);	
		    return aint>0&& (aint+"")==value;   
		  }, "Please enter a valid number.");   
	
//显示标签
	id = $("#knowledgeId").val();
	var url = basepath+"/courseware/selectTagForKnowledge.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));
	
	//初始页面的学时显示,单位由分钟转换为小时.
	if ($("#courseMinuteHidden").val() != null && $("#courseMinuteHidden").val() != "") {
		var cmh = "" + (parseFloat($("#courseMinuteHidden").val()) / 60);
		if (cmh.indexOf(".") == -1) { //
			$("#courseHour").val(cmh);
		} else {
			$("#courseHour").val(cmh.substr(0,cmh.indexOf(".")+3)); //如果是小数，则保留两位小数.
		}
		 
	}
	
});

$(function(){
	$("#form_saveCourseware").validate({
		rules : {
			name : {
				required : true
			},
			tag : {
				required : true
			},
			kno_id : {
				required : true
			},
			courseHourShow : {
				required : true,
				number : true,
				min : 0
			},
			pos_name : {
				required : true
			},
			aim : {
				required : true,
				rangelength:[11,999]
			},
			content : {
				required : true,
				rangelength:[11,999]
			},
			learnDay : {
				required : true,
				digits:true
			},
			retreatClsTm :{
				required : true,
				digits:true
			}
		},
		messages : {
			name : {required:"不为空"},
			kno_id : "不为空!",
			tag : "不为空!",
			courseHourShow : {
				required : "不为空!",
				number : "只能为正数!",
				min : "只能为正数!"
			},
			pos_name : "不为空!",
			aim : {
				required : "不为空!",
				rangelength : "内容大于10字小于1000字!"
			},
			content : {
				required : "不为空!",
				rangelength : "内容大于10字小于1000字!"
			},
			learnDay : {
				required : "不为空!",
				digits:"只能为整数!"
			},
			retreatClsTm :{
				required : "不为空!",
				digits:"只能为整数!"
			}
		}
	});
	$("#form_saveCoursewareUpdate").validate({
		rules : {
			name : {
				required : true 
			},
			tag : {
				required : true
			},
			kno_id : {
				required : true
			},
			courseHourShow : {
				required : true,
				number : true,
				min : 0
			},
			pos_name : {
				required : true
			},
			aim : {
				required : true,
				rangelength:[11,999]
			},
			content : {
				required : true,
				rangelength:[11,999]
			},
			learnDay : {
				required : true,
				digits:true
			},
			retreatClsTm :{
				required : true,
				digits:true
			}
		},
		messages : {
			name : {required:"不为空" },
			kno_id : "不为空!",
			tag : "不为空!",
			courseHourShow : {
				required : "不为空!",
				number : "只能为正数!",
				min : "只能为正数!"
			},
			pos_name : "不为空!",
			aim : {
				required : "不为空!",
				rangelength : "内容大于10字小于1000字!"
			},
			content : {
				required : "不为空!",
				rangelength : "内容大于10字小于1000字!"
			},
			learnDay : {
				required : "不为空!",
				digits:"只能为整数!"
			},
			retreatClsTm :{
				required : "不为空!",
				digits:"只能为整数!"
			}
		}
	});
	
	
	//学时由页面显示的小时单位转换为分钟单位.
	$("#courseHour").blur(function() {
		if ($("#courseHour").val() != null && $("#courseHour").val() != "") {
			var courseMinute = parseFloat($("#courseHour").val()) * 60;
			$("#courseMinuteHidden").val(courseMinute);
		}
	});
	 
	
	selectProperty(this);
		
	//标签打空格出现逗号
	function rTrim(str)
	{
	   var iLength;

	   iLength = str.length;
	   if (str.charAt(iLength - 1) == " " || str.charAt(iLength - 1) ==",")
	   {
	    //如果字串右边第一个字符为空格
	    str = str.substring(0, iLength - 1);//将空格从字串中去掉
	    //这一句也可改成 str = str.substring(0, iLength - 1);
	    str = rTrim(str); //递归调用
	   }
	   return str;
	}
//	$("#button").click(function(){
//		document.form1.submit();
//	});
	$("#tagf span").click(function(){
		var mm=$(this).text();
		var ww=$("#tagf input").val();
		
		if(ww==""){
			$("#tagf input").val(mm);	
		}
		else{
			ww=rTrim(ww);
			ww+=","+mm;
			$("#tagf input").val(ww);	
		}
	})
	$("#tagf input").keyup(function(ev){
		var oEvent=ev||event;
		if(oEvent.keyCode==32){
			var mm=$(this).val();
			mm=rTrim(mm);   
			mm+=",";
			$(this).val(mm);
		}							  
	})	
	
	
	
	
	
	/**
	 * 打开选择知识分类对话框
	 * setKnoData(0)表示获取知识分类的数据，并作为第一个树(下标为0)的数据
	 * windowkey为true时说明是以对话框方式呈现
	 * oncekey为true时说明是单选
	 */
	$(".chooseknowledge").click(function(){
		dialogType = "kno";
		windowkey=true;
		oncekey = true;
		setKnoData(0);
		return_data[0] = [];
		departmentDom=$(this);
		var nn=$(this).attr("seconduse");
		var mm=$(this).attr("string");
		if(mm){
			$("#dialog_content").html(mm);	
		}else{
			if(nn){
				var string='<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="100" style="vertical-align:top">已选对象</td><td class="taL" id="objectstring">';
				nn=nn.split(","); 
				for(i=0;i<nn.length;i++){
					string+='<div>'+nn[i]+'<a class="ml12" href="javascript:;"><img src="'+basepath+'/images/deletegreen.gif"></a></div>';	
				}
				string+='</td></tr><tr><td colspan="2" style="padding-top:10px"><hr /></td></tr><tr><td>待选区域</td><td style="text-align:left"><div class="message_nav z"><div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="'+basepath+'/images/m_arrow_1.gif" width="7" height="4" /></div></div><div class="clr"></div><div class="m1_window"></div></div></td></tr><tr><td class="taR" colspan="2"><input name="" type="button" class="step vm windowbutton"   value="确定" hidefocus="true"/><input name="" type="button" class="back vm windowbutton m10"   value="关闭" hidefocus="true"/></td></tr></table>';
				$("#dialog_content").html(string);
				$(this).removeAttr("seconduse");
			}
			else{
				$("#dialog_content").html(dialoghtml);
			}
			//$("#dialog_content").html(dialoghtml);
		}
		$(".bta").attr("cid","0");
		$("#dialog").show();
		$("#dialog .blackall").show();
		$("#dialog .newwindow").show();
	});

	
	/**
	 * 打开选择对象岗位对话框
	 * setKnoData(0)表示获取知识分类的数据，并作为第一个树(下标为0)的数据
	 * windowkey为true时说明是以对话框方式呈现
	 * oncekey为true时说明是单选
	 */
	$(".choosePosition").click(function(){
		dialogType = "pos";
		windowkey=true;
		oncekey = false;
		setPosData(0);
		return_data[0] = [];
		departmentDom=$(this);
		var mm=$(this).attr("string");
		if(mm){
			$("#dialog_content").html(mm);	
		}else{
			$("#dialog_content").html(dialoghtml);
		}
		$(".bta").attr("cid","0");
		$("#dialog").show();
		$("#dialog .blackall").show();
		$("#dialog .newwindow").show();
	});
	
	/**
	 * 点确定后返回选中的选项
	 * oncekey为true时获取第一个树的第一个选择项，即return_data[0][0]
	 * return_data[0][0]["id"]是获取id
	 * return_data[0][0]["name"]是获取name
	 */
	
	$(".cls_button_choosetree_ok").live("click",function(){
		$("#"+dialogType+"_id").val("");
		$("#"+dialogType+"_name").val("");
		if(return_data.length>0 && return_data[0].length>0){
			for(i=0;i<return_data[0].length;i++){
				if(i==0){
					$("#"+dialogType+"_id").val(return_data[0][i]["id"]);
					$("#"+dialogType+"_name").val(return_data[0][i]["name"]);
				}else{
					$("#"+dialogType+"_id").val($("#"+dialogType+"_id").val()+","+return_data[0][i]["id"]);
					$("#"+dialogType+"_name").val($("#"+dialogType+"_name").val()+","+return_data[0][i]["name"]);
				}
			}
			if(dialogType == "kno"){
				toAddTag(return_data[0][0]["id"]);
			}
		}
		
	});
	
	

});

$(".orgChoose a").click(function(){
	$(".orgChoose").hide();							  
});



//选择属性
function selectProperty(t)
{
	var protyId = $(t).val();
	var url = basepath+"/courseware/toCourType.html?protyId="+protyId+ "&coursewareTypeSpId=" + $("#coursewareTypeSpId").val() + "&r="+Math.random();
	$("#typeId").load(encodeURI(url));
	
}


//根据选择的属性显示Url文本框
function showProtyUrl(t)
{
	var protyId = $(t).val();
	var url = basepath+"/courseware/toURLTwo.html?protyId="+protyId+ "&coursewareUrl=" +$("#coursewareUrl").val() + "&r="+Math.random();
	$("#divUrl").load(encodeURI(url));
}


//根据选择的类型显示Url文本框
function showUrl(t)
{
	var typeId = $(t).val();
	var url = basepath+"/courseware/toURL.html?typeId="+typeId+"&r="+Math.random();
	$("#divUrl").load(encodeURI(url));
	
}