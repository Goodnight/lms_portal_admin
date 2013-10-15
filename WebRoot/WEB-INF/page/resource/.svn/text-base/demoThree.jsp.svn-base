<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.io.InputStream"%>
<%@page import="com.telecom.lms.core.bo.auth.UserInfoBo"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<c:set var="basepath" value="${SERVER}${pageContext.request.contextPath}" />
<%@page language="java" import="java.util.*"
	contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<%  
String path = request.getContextPath();
String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path;

 	String content = "";

        try {
            Properties properties = new Properties();
            InputStream is = getClass().getClassLoader().getResourceAsStream("telecom.lms.api.properties");//加载p.properties文件内容
            properties.load(is);//将文件内容装载到properties对象
            is.close();
            content = properties.getProperty("pathUpload");//获取str1节点值
        } catch (FileNotFoundException ex) {
            
        } catch (IOException ex) {
            
        }
       System.out.println("---------------------"+content);
%>
<html>
<head>
	<title>SWFUpload Demos - Simple Demo</title>
	<link href="<%=request.getContextPath()%>/css/upload/sdf.css" rel="stylesheet" type="text/css"/>
	<script type="text/javascript" src="${agentUrl}/upload/swf/js/swfupload.js"></script>
	<script type="text/javascript" src="${agentUrl}/upload/swf/js/handlers.js"></script>
	<script type="text/javascript" src="${agentUrl}/upload/swf/js/fileprogress.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/upload/ctu.swfupload.js"></script> 

	 <%UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user"); 
	 
	  %>
	 <script type="text/javascript">
	     var swf;
	     var uploading = false;//是否正在上传.
		 var swf1;
		 var uploading1 = false;//是否正在上传.
		 
	window.onload=function(){
		var path="<%=request.getAttribute("agentUrl")%>";
		var settings = {	
		file_size_limit : "400MB",
		file_types : "*.jpg;*.png",
		file_post_name : "uploadFile",
		file_types_description : "All Files",
		file_upload_limit : 50,
		file_queue_limit : 0,
		custom_settings : {
			progressTarget : "fsUploadProgress",
			cancelButtonId : "btnCancel"
		},
		button_image_url : path+"/upload/swf/images/TestImageNoText_65x29.png",
		button_width : "65",
		button_height : "29",
		button_placeholder_id : "spanButtonPlaceHolder",
		button_text : '<label class="theFont">上 传</label>',
		button_text_style : ".theFont { font-size: 12; }",
		button_text_left_padding : 12,
		button_text_top_padding : 3
		};
		swf = ctu_swf_uploader(settings,path,getUploadParams,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("download");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow(-1);
				var newCell0 = newRow.insertCell(-1);
				form_saveCaseDoc.outCode.value=files[i].id;
				var a = "'${agentUrl}/"+ files[i].download_url+"'";
				newCell0.innerHTML = "<a target='_blank' href="+a+">" + "预览" + "</a>"
			}
			uploading = false;
		})
		var post_params={
			"app_id" : "20000",
			 "domain" : "telecom",
			 "creator" : "<%=user.getUid()%>"
       };
		 function getUploadParams(){
			 var resource_type="6";
		     post_params["resource_type"]=resource_type;
		     uploading = true;
		  return post_params;
	  };
		
		var settings1 = {
		file_size_limit : "400MB",
		file_types : "*.doc;*.docx",     
		file_post_name : "uploadFile",
		file_types_description : "Compress Files",
		file_upload_limit : 50,
		file_queue_limit : 0,
		custom_settings : {
			progressTarget : "fsUploadProgressSrc",
			cancelButtonId : "btnCancelSrc"
		},
		button_image_url : path+"/upload/swf/images/TestImageNoText_65x29.png",
		button_width : "65",
		button_height : "29",
		button_placeholder_id : "spanButtonPlaceHolderSrc",
		button_text : '<span class="theFont">上 传</span>',
		button_text_style : ".theFont { font-size: 12; }",
		button_text_left_padding : 12,
		button_text_top_padding : 3
				};
		
		swf1 = ctu_swf_uploader(settings1,path,getUploadParams1,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("downloadSrc");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow(-1);
				var newCell0 = newRow.insertCell(-1);
				form_saveCaseDoc.uplodSrc.value=files[i].id;
				var b = files[i].download_url;
				newCell0.innerHTML = "<input class='input vm' type='hidden' name='uplodDocddd' type='text' id='uplodDocddd'  value='"+ files[i].download_url + "'/>";
			}
			uploading1 = false;
		})
		var post_params1={
			"app_id" : "20000",
			 "domain" : "telecom",
			 "creator" : "<%=user.getUid()%>"
       };
		 function getUploadParams1(){
			 var resource_type="5";
		     post_params1["resource_type"]=resource_type;
		     uploading1 = true;
		  return post_params1;
	  };
		
	}
	function cancel(swf,indexArg){
		if(confirm('确定要取消吗 ？')){
			swf.cancel();
			if (indexArg == 0) {  //取消上传之后,将正在上传标识量置为不在上传中。
				uploading = false;
			} else if (indexArg == 1) {
				uploading1 = false;
			}
		}
	}
	 </script>
</head>
<body>

	<div id="content">
	
	<tr>
	<td>上传封面<em>(规定尺寸不超过:65*29,格式:Jpg,Png)</em><c:if test="${caseDoc.res.pic.outCode != null && caseDoc.res.pic.outCode != ''}"><img src="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${caseDoc.res.pic.outCode}" width="114" height="84" /></c:if></td>
	<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgress">
			<label  class="legend">上传封面</label >
		</div>
		<div id="divMovieContainer">
			<span id="spanButtonPlaceHolder"></span> <input id="btnCancel"
				type="button" value="取 消" onclick="cancel(swf,0);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<table id="download">
			<tr id="downloadList">
				<td></td>
			</tr>
		</table>
		</td>
</tr>

<tr>
		<td><em>*</em>上传案例附件<em>(*.doc;*.docx)</em><br><c:if test="${caseUpCode != null && caseUpCode != ''}"><a href="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${caseUpCode}&player=example" class="red">下载:${caseDocResourceInfo.meta.full_name }</a></c:if></td>
		<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgressSrc">
			<label  class="legend">附件</label >
		</div>
		<div id="divMovieContainerSrc">
		<span id="spanButtonPlaceHolderSrc"></span> <input id="btnCancelSrc"
				type="button" value="取 消" onclick="cancel(swf1,1);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
				案例上传格式请参照<a href="${downloadCaseDocTemplateURL }">模板</a>!
		</div>
		<table id="downloadSrc">
			<tr id="downloadListSrc">
				<td></td>
			</tr>
		</table>
		</td>
		</tr>

		
	</div>



</body>

</html>
