var dialogType;
var Doom;
$(function(){
	//jquery.validate--��������֤.
	jQuery.validator.addMethod("positiveinteger", function(value, element) {
		   var aint=parseInt(value);	
		    return aint>0&& (aint+"")==value;   
		  }, "Please enter a valid number.");   
	
//��ʾ��ǩ
	id = $("#knowledgeId").val();
	var url = basepath+"/courseware/selectTagForKnowledge.html?kcId="+id+"&r="+Math.random();
	$("#divTag").empty();
	$("#divTag").load(encodeURI(url));
	
	//��ʼҳ���ѧʱ��ʾ,��λ�ɷ���ת��ΪСʱ.
	if ($("#courseMinuteHidden").val() != null && $("#courseMinuteHidden").val() != "") {
		var cmh = "" + (parseFloat($("#courseMinuteHidden").val()) / 60);
		if (cmh.indexOf(".") == -1) { //
			$("#courseHour").val(cmh);
		} else {
			$("#courseHour").val(cmh.substr(0,cmh.indexOf(".")+3)); //�����С����������λС��.
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
			name : {required:"��Ϊ��"},
			kno_id : "��Ϊ��!",
			tag : "��Ϊ��!",
			courseHourShow : {
				required : "��Ϊ��!",
				number : "ֻ��Ϊ����!",
				min : "ֻ��Ϊ����!"
			},
			pos_name : "��Ϊ��!",
			aim : {
				required : "��Ϊ��!",
				rangelength : "���ݴ���10��С��1000��!"
			},
			content : {
				required : "��Ϊ��!",
				rangelength : "���ݴ���10��С��1000��!"
			},
			learnDay : {
				required : "��Ϊ��!",
				digits:"ֻ��Ϊ����!"
			},
			retreatClsTm :{
				required : "��Ϊ��!",
				digits:"ֻ��Ϊ����!"
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
			name : {required:"��Ϊ��" },
			kno_id : "��Ϊ��!",
			tag : "��Ϊ��!",
			courseHourShow : {
				required : "��Ϊ��!",
				number : "ֻ��Ϊ����!",
				min : "ֻ��Ϊ����!"
			},
			pos_name : "��Ϊ��!",
			aim : {
				required : "��Ϊ��!",
				rangelength : "���ݴ���10��С��1000��!"
			},
			content : {
				required : "��Ϊ��!",
				rangelength : "���ݴ���10��С��1000��!"
			},
			learnDay : {
				required : "��Ϊ��!",
				digits:"ֻ��Ϊ����!"
			},
			retreatClsTm :{
				required : "��Ϊ��!",
				digits:"ֻ��Ϊ����!"
			}
		}
	});
	
	
	//ѧʱ��ҳ����ʾ��Сʱ��λת��Ϊ���ӵ�λ.
	$("#courseHour").blur(function() {
		if ($("#courseHour").val() != null && $("#courseHour").val() != "") {
			var courseMinute = parseFloat($("#courseHour").val()) * 60;
			$("#courseMinuteHidden").val(courseMinute);
		}
	});
	 
	
	selectProperty(this);
		
	//��ǩ��ո���ֶ���
	function rTrim(str)
	{
	   var iLength;

	   iLength = str.length;
	   if (str.charAt(iLength - 1) == " " || str.charAt(iLength - 1) ==",")
	   {
	    //����ִ��ұߵ�һ���ַ�Ϊ�ո�
	    str = str.substring(0, iLength - 1);//���ո���ִ���ȥ��
	    //��һ��Ҳ�ɸĳ� str = str.substring(0, iLength - 1);
	    str = rTrim(str); //�ݹ����
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
	 * ��ѡ��֪ʶ����Ի���
	 * setKnoData(0)��ʾ��ȡ֪ʶ��������ݣ�����Ϊ��һ����(�±�Ϊ0)������
	 * windowkeyΪtrueʱ˵�����ԶԻ���ʽ����
	 * oncekeyΪtrueʱ˵���ǵ�ѡ
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
				var string='<table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td width="100" style="vertical-align:top">��ѡ����</td><td class="taL" id="objectstring">';
				nn=nn.split(","); 
				for(i=0;i<nn.length;i++){
					string+='<div>'+nn[i]+'<a class="ml12" href="javascript:;"><img src="'+basepath+'/images/deletegreen.gif"></a></div>';	
				}
				string+='</td></tr><tr><td colspan="2" style="padding-top:10px"><hr /></td></tr><tr><td>��ѡ����</td><td style="text-align:left"><div class="message_nav z"><div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">ȫ��</a></div><div class="fleft bta"><img src="'+basepath+'/images/m_arrow_1.gif" width="7" height="4" /></div></div><div class="clr"></div><div class="m1_window"></div></div></td></tr><tr><td class="taR" colspan="2"><input name="" type="button" class="step vm windowbutton"   value="ȷ��" hidefocus="true"/><input name="" type="button" class="back vm windowbutton m10"   value="�ر�" hidefocus="true"/></td></tr></table>';
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
	 * ��ѡ������λ�Ի���
	 * setKnoData(0)��ʾ��ȡ֪ʶ��������ݣ�����Ϊ��һ����(�±�Ϊ0)������
	 * windowkeyΪtrueʱ˵�����ԶԻ���ʽ����
	 * oncekeyΪtrueʱ˵���ǵ�ѡ
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
	 * ��ȷ���󷵻�ѡ�е�ѡ��
	 * oncekeyΪtrueʱ��ȡ��һ�����ĵ�һ��ѡ�����return_data[0][0]
	 * return_data[0][0]["id"]�ǻ�ȡid
	 * return_data[0][0]["name"]�ǻ�ȡname
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



//ѡ������
function selectProperty(t)
{
	var protyId = $(t).val();
	var url = basepath+"/courseware/toCourType.html?protyId="+protyId+ "&coursewareTypeSpId=" + $("#coursewareTypeSpId").val() + "&r="+Math.random();
	$("#typeId").load(encodeURI(url));
	
}


//����ѡ���������ʾUrl�ı���
function showProtyUrl(t)
{
	var protyId = $(t).val();
	var url = basepath+"/courseware/toURLTwo.html?protyId="+protyId+ "&coursewareUrl=" +$("#coursewareUrl").val() + "&r="+Math.random();
	$("#divUrl").load(encodeURI(url));
}


//����ѡ���������ʾUrl�ı���
function showUrl(t)
{
	var typeId = $(t).val();
	var url = basepath+"/courseware/toURL.html?typeId="+typeId+"&r="+Math.random();
	$("#divUrl").load(encodeURI(url));
	
}