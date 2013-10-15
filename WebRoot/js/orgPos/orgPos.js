var ArrJob={};
var counmId;
var weritePos;
$(document).ready(function () {	
	//富文本框处理
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
	
	//第一次进入页面为空的岗位栏目ID赋初始值
	var firstId = $("#firstId").val();
    if(counmId == '' || counmId == null)
    {
	  counmId = firstId;
    }

    
  //点击岗位栏目触发事件
  function counmPos(obj){
	 //取得岗位栏目的ID
    counmId = $(obj).attr("id");
      //当两个ID取到后进行查询已保存的内容
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
  
  
  //点击预览
  $(".chooseperson").click(function(){
	  var textco=UE.getEditor('myEditor').getContent();
	  var snsTxt=UE.getEditor('myEditor').getContentTxt();
	  var positionIntroId=$("#positionIntroId").val();
	  //如果点击的岗位栏目是课程体系，则把填写的内容转化
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
	    			$("#choosepersonco").find(".scroll").html("<div style='font-size:14px;margin:5px 0 10px 0'>编辑的内容宽度在714像素之内，超过的部分会被截取!</div><div style='font-size:14px;margin:5px 0 10px 0'>编辑的图片高度在900像素之内，超过的话会导致显示不清!</div><div style='width:714px;margin:0 auto'>"+posIntro+"</div>");
	    		}
	    	});
	  }
	  else{
	  $("#choosepersonco").find(".scroll").html("<div style='font-size:14px;margin:5px 0 10px 0'>编辑的内容宽度在714像素之内，超过的部分会被截取!</div><div style='font-size:14px;margin:5px 0 10px 0'>编辑的图片高度在900像素之内，超过的话会导致显示不清!</div><div style='width:714px;margin:0 auto'>"+textco+"</div>");	
	  }
	});
  

  //保存
  $("#btn_save").click(function(){
	var textco=UE.getEditor('myEditor').getContent();
    var snsTxt=UE.getEditor('myEditor').getContentTxt();
	if ((textco == null || textco == "") && ($("#positionIntroId").val() == null || $("#positionIntroId").val() == "" || $("#positionIntroId").val() == "null")) {
		alert("请输入内容!");
		return;
	}
  	var introPos = textco;
  	if(confirm('确定要保存吗 ？')){
  	$.ajax({
  		url : "savaOrgPos.html",
  		type : "POST",
  		//data : "orgId="+ethId+"&gainPosId="+counmId+"&introPos="+introPos,
  		data : {orgId:ethId,gainPosId:counmId,introPos:introPos,snsTxt:snsTxt,r:Math.random()},
  		dataType : "json",
  		success : function(data){
  			if(ethId == null || ethId == ""){
				alert("必须选择一个基准岗位");
				return false;
			}
  			else{
  			  alert("保存成功");
			}
  		},
		error:function(){
			alert("保存失败");
		}
  	});
  }
  });
  
})



/**
 * 机构树点击事件       AA
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
	//岗位树点击切换进行内容的切换
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
  
  //检查id值的节点是否存在子节点,存在返回true,不存在返回false.
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
 * 更新导航
 */
function setNav(namePath){
	$(".split").remove();
	$(".last").removeClass("last");
	$(".z ul").append("<li class='last split'>"+namePath+"</li>");
}
