var ArrJob={};
var counmId;
var weritePos;
$(document).ready(function () {	
	//���ı�����
	$(".newjoblist li").click(function(){
		counmPos(this);
		var OldNow=$(".newjoblist li.now");
		var index=$(".newjoblist li").index(this);
		var editor=UE.getEditor('myEditor');
		var oldindex=$(".newjoblist li").index(OldNow);
		$(this).siblings().removeClass("now");
		$(this).addClass("now");
	if(editor.hasContents()){
			var textco=editor.getContent();
		ArrJob[oldindex]=textco;
			editor.setContent ('');
		}
		
	})
	
	//��һ�ν���ҳ��Ϊ�յĸ�λ��ĿID����ʼֵ
	var firstId = $("#firstId").val();
    if(counmId == '' || counmId == null)
    {
	  counmId = firstId;
    }

    
  //�����λ��Ŀ�����¼�
  function counmPos(obj){
	 //ȡ�ø�λ��Ŀ��ID
    counmId = $(obj).attr("id");
      //������IDȡ������в�ѯ�ѱ��������
      $.ajax({
    		url : "getPosForCoum.html?orgId="+ethId+"&gainPosId="+counmId+"&r=" + Math.random(),
    		type : "get",
    		dataType : "json",
    		success : function(posIntro){
    			//posIn = posIntro;
    			//UE.getEditor('myEditor').setContent (posIntro);
    			$("#positionIntroId").val("" + posIntro.piId);
    			UE.getEditor('myEditor').setContent (posIntro.intro);
 
    		}
    	});
  }
  
  
  //���Ԥ��
  $(".chooseperson").click(function(){
	  var textco=UE.getEditor('myEditor').getContent();
	  var snsTxt=UE.getEditor('myEditor').getContentTxt();
	  var positionIntroId=$("#positionIntroId").val();
	  //�������ĸ�λ��Ŀ�ǿγ���ϵ�������д������ת��
	  if(counmId == "ff8080813bd3a52b013bd6ba55350001")
	  {
		  $.ajax({
	    		url : "getPosForCourse.html",
	    		type : "POST",
	    		//data : "introPos="+textco,
	    		data : {
	    			positionIntroId:positionIntroId,
	    			textco:textco,
	    			snsTxt:snsTxt
	    		},
	    		dataType : "json",
	    		success : function(posIntro){
	    			$("#choosepersonco").find(".scroll").html("<div style='font-size:14px;margin:5px 0 10px 0'>�༭�����ݿ����714����֮�ڣ������Ĳ��ֻᱻ��ȡ!</div><div style='font-size:14px;margin:5px 0 10px 0'>�༭��ͼƬ�߶���900����֮�ڣ������Ļ��ᵼ����ʾ����!</div><div style='width:714px;margin:0 auto'>"+posIntro+"</div>");
	    		}
	    	});
	  }
	  else{
	  $("#choosepersonco").find(".scroll").html("<div style='font-size:14px;margin:5px 0 10px 0'>�༭�����ݿ����714����֮�ڣ������Ĳ��ֻᱻ��ȡ!</div><div style='font-size:14px;margin:5px 0 10px 0'>�༭��ͼƬ�߶���900����֮�ڣ������Ļ��ᵼ����ʾ����!</div><div style='width:714px;margin:0 auto'>"+textco+"</div>");	
	  }
	});
  

  //����
  $("#btn_save").click(function(){
	var textco=UE.getEditor('myEditor').getContent();
    var snsTxt=UE.getEditor('myEditor').getContentTxt();
	if ((textco == null || textco == "") && ($("#positionIntroId").val() == null || $("#positionIntroId").val() == "" || $("#positionIntroId").val() == "null")) {
		alert("����������!");
		return;
	}
  	var introPos = textco;
  	if(confirm('ȷ��Ҫ������ ��')){
  	$.ajax({
  		url : "savaOrgPos.html",
  		type : "POST",
  		//data : "orgId="+ethId+"&gainPosId="+counmId+"&introPos="+introPos,
  		data : {orgId:ethId,gainPosId:counmId,introPos:introPos,snsTxt:snsTxt,r:Math.random()},
  		dataType : "json",
  		success : function(data){
  			if(ethId == null || ethId == ""){
				alert("����ѡ��һ����׼��λ");
				return false;
			}
  			else{
  			  alert("����ɹ�");
			}
  		},
		error:function(){
			alert("����ʧ��");
		}
  	});
  }
  });
  
})



/**
 * ����������¼�       AA
 */
  var ethId;
  function ethClick(type,id,name,namePath){
	UE.getEditor('myEditor').setContent("");
	ethId = id;	
	setNav(namePath.substring(0,namePath.lastIndexOf('/')));
	//alert(type);
	if((type != "pos" && type != "level") || hasChildren(id,namePath))
	{
		$("#btn_bj").addClass("hidden");
	}
	//��λ������л��������ݵ��л�
	else if((type== "pos" || type == "level") && counmId != "" && counmId != null){
		$("#btn_bj").removeClass("hidden");
		$.ajax({
    		url : "getPosForCoum.html?orgId="+ethId+"&gainPosId="+counmId + "&r=" + Math.random(),
    		type : "get",
    		dataType : "json",
    		success : function(posIntro){
    			//alert(posIntro.piId);
    			posIn = posIntro.intro;
    			$("#positionIntroId").val("" + posIntro.piId);
    			UE.getEditor('myEditor').setContent (posIntro.intro);
    			
    		}
    	});
	}
}
  
  //���idֵ�Ľڵ��Ƿ�����ӽڵ�,���ڷ���true,�����ڷ���false.
  function hasChildren(id,namePath) {
	  var result = false;
		$.ajax({
			url : basepath + "/list/pos4jstree.html?r=" + Math.random(),
			type : "get",
			async:false,
			data:{"operation":"","id":id,"namePath":namePath},
			dataType : "json",
			success : function(posIntro){
				result = posIntro.length > 0;
			}
		});
		return result;
  }

/**
 * ���µ���
 */
function setNav(namePath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namePath+"</li>");
}
