<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ 
	include file="/WEB-INF/page/include/taglibs.jsp"%>
	<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入培训班人员</h2>
            <div class="basic_information mt20 w90p">
                <div class="pt20">导入培训班人员：<input id="filepath" name="filepath" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath }/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR"><input type="button" id="importTemplet" class="step windowbutton"
				value="确定" /></div>
            </div>
    </div>
    
    
    <script type="text/javascript">
	$("#importTemplet").click(function() {
	    $("#dialog").hide();
		$.dialog.tips('数据加载中...',600,'loading.gif').lock();
		var filepath = $("#filepath").val();
		var param = "filepath="+filepath;
		$.ajax({
		   url : basepath+"/dialog/importTemplet.html",
		   type : "POST",
		   data : param,
		   dataType : "json",
		   success : function(data){
		       $.dialog.tips('数据加载完毕',1,'tips.gif');
		   },
		   error:function(){	
		   			
		   }
	    });
	});
</script>