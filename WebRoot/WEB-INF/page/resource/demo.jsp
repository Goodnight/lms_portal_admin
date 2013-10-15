<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.io.InputStream"%>
<%@page import="com.telecom.lms.core.bo.auth.UserInfoBo"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<c:set var="basepath" value="${SERVER}${pageContext.request.contextPath}" />

<%@page language="java" import="java.util.*" contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>

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
		var swf2;
		var uploading2 = false;//是否正在上传.
		var swf3;	
		var uploading3 = false;//是否正在上传.

	 window.onload=function(){
	
		var path="<%=request.getAttribute("agentUrl")%>";
		var settings = {
				
				file_size_limit : "500MB",
				file_types : "*.zip;*.rar;*.7z",
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
				
	 swf=new ctu_swf_uploader(settings,path,getUploadParams,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				
				form_saveCourseware.uplodSrc.value=files[i].id;
				
                   
			 }
					uploading = false;

		});
		var post_params={
			"app_id" : "20000",
			 "domain" : "telecom",
			  "creator" : "<%=user.getUid()%>"
       };
		 function getUploadParams(){
			 var resource_type;
			 var type = $("#typeId").val();
			 if(type == "ff808081385bcac601385bd006740033" || type == "")
			{
			 resource_type="2";
			}
			 else if(type == "ff808081385bcac601385bd006230031")
			{
			 resource_type="1"; 
			}
			 else if(type == "ff808081385bcac601385bd006142d3e")
			{
			 resource_type="1"; 
			}
		        post_params["resource_type"]=resource_type;
		        uploading = true;
		  return post_params;
	  };
		
	  var settings1 = {
				file_size_limit : "40MB",
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
	  swf1=new 	ctu_swf_uploader(settings1,path,getUploadParams1,function(file, fileData) {
					uploading1 = false;
					var files = fileData.files;
					$("#download").css("display","");
					$("#image_").attr("href","${agentUrl}"+files[files.length-1].download_url);
					form_saveCourseware.outCode.value=files[i].id;
		
	})
	var post_params1={
		"app_id" : "111111",
		 "domain" : "telecom",
		  "creator" : "<%=user.getUid()%>"
 };
	 function getUploadParams1(){
		 var resource_type="6";
	        post_params1["resource_type"]=resource_type;
	        uploading1 = true;
	  return post_params1;
};
			
	
	var settings2 = {
	
	file_size_limit : "500MB",
	file_types : "*.zip;*.rar;*.7z;*.xls;*.docx;*.ppt;*.pptx",
	file_post_name : "uploadFile",
	file_types_description : "Compress Files",
	file_upload_limit : 50,
	file_queue_limit : 0,
	custom_settings : {
		progressTarget : "fsUploadProgress2",
		cancelButtonId : "btnCancel2"
	},
	button_image_url : path+"/upload/swf/images/TestImageNoText_65x29.png",
	button_width : "65",
	button_height : "29",
	button_placeholder_id : "spanButtonPlaceHolder2",
	button_text : '<label class="theFont">上 传</label>',
	button_text_style : ".theFont { font-size: 12; }",
	button_text_left_padding : 12,
	button_text_top_padding : 3
	};
	 swf2 =new ctu_swf_uploader(settings2,path,getUploadParams2,function(file, fileData) {
		 var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				
				form_saveCourseware.uplodCousDG.value=files[i].id;
				
                
			}
		uploading2 = false;
	})

	var post_params2={
		"app_id" : "111111",
		 "domain" : "telecom",
		  "creator" : "<%=user.getUid()%>"
 };
	 function getUploadParams2(){
		 var resource_type="0";
	        post_params2["resource_type"]=resource_type;
	        uploading2 = true;
	  return post_params2;
};
	

	var settings3 = {
	file_size_limit : "500MB",
	file_types : "*.zip;*.rar;*.7z;*.xls;*.docx;*.ppt;*.pptx",
	file_post_name : "uploadFile",
	file_types_description : "Compress Files",
	file_upload_limit : 50,
	file_queue_limit : 0,
	custom_settings : {
		progressTarget : "fsUploadProgress3",
		cancelButtonId : "btnCancel3"
	},
	button_image_url : path+"/upload/swf/images/TestImageNoText_65x29.png",
	button_width : "65",
	button_height : "29",
	button_placeholder_id : "spanButtonPlaceHolder3",
	button_text : '<label class="theFont">上 传</label>',
	button_text_style : ".theFont { font-size: 12; }",
	button_text_left_padding : 12,
	button_text_top_padding : 3
	};
	 swf3 =new ctu_swf_uploader(settings3,path,getUploadParams3,function(file, fileData) {
		 var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				form_saveCourseware.uplodCousJY.value=files[i].id;
			}
		uploading3 = false;
	})

	var post_params3={
		"app_id" : "111111",
		 "domain" : "telecom",
		  "creator" : "<%=user.getUid()%>"
 };
	 function getUploadParams3(){
		 var resource_type="0";
	        post_params3["resource_type"]=resource_type;
	        uploading3 = true;
	  return post_params3;
};
	}
	function cancel(swf,indexArg){
		/*  暂停.
		if(confirm('确定要取消吗 ？')){
			取消.
		} else {
			继续.
		}
		*/
		if(confirm('确定要取消吗 ？')){
		
			swf.cancel();
			if (indexArg == 0) {  //取消上传之后,将正在上传标识量置为不在上传中。
				uploading = false;
			} else if (indexArg == 1) {
				uploading1 = false;
			} else if (indexArg == 2) {
				uploading2 = false;
			} else if (indexArg == 3) {
				uploading3 = false;
			}
		}
	}

	 </script>
</head>
<body>

	<div id="content">

		<tr id="uplodZipp" class="uplodCours">
		<td id="divScromBag">请选择SCROM课件.zip包 <br>
			<!--
				<c:if test="${uPlod != null && uPlod != ''}"><a href="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uPlod}" class="red">下载</a></c:if>
			 -->
			 ${uPlodResourceInfo.meta.full_name}
		</td>
		<td id="divNoScromBag" class="hidden">请选择非标准课件包 <br></td>
		<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgressSrc">
			<label  class="legend">上传课件包</label >
		</div>
		<div id="divMovieContainerSrc">
			<label id="spanButtonPlaceHolderSrc"></label> <input id="btnCancelSrc"
				type="button" value="取 消" onclick="cancel(swf,0);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<table id="downloadSrc">
			<tr id="downloadListSrc">
				<td></td>
			</tr>
		</table>
		</td>
		</tr>
		
	</table>
	<table cellspacing="15" cellpadding="15" style="border:1px dashed #ccc;">
		<tr>
<td width="188">课程封面<em>(规定尺寸不超过:65*29,格式:Jpg,Png)</em><c:if test="${courseware.res.pic.outCode != null && courseware.res.pic.outCode != ''}"><img src="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${courseware.res.pic.outCode}"  width="114" height="84" /></c:if></td>
<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgress">
			<label  class="legend">上传封面</label >
		</div>
		<div id="divMovieContainer">
			<span id="spanButtonPlaceHolder"></span> <input id="btnCancel"
				type="button" value="取 消" onclick="cancel(swf1,1);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<div id="download" style="display: none;">
			<a id="image_" target='_blank' href="">预览</a>
		</div>
		</td>
		</tr>
	</table>	
	<table cellspacing="15" cellpadding="15" style="border:1px dashed #ccc;margin-top:15px;margin-bottom:15px;">	
		
		
		<tr id="uplodDG">
        <td>课程大纲： <br><c:if test="${uploDG != null && uploDG != ''}"><a href="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uploDG}" class="red">${uploDGResourceInfo.meta.full_name}</a></c:if></td>
        <td>
		<div class="fieldset flash" id="fsUploadProgress2">
			<label  class="legend">上传课程大纲</label >
		</div>
		<div id="divMovieContainer2">
			<label id="spanButtonPlaceHolder2"></label> <input id="btnCancel2"
				type="button" value="取 消" onclick="cancel(swf2,2);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<table id="download2">
			<tr id="downloadList2">
				<td></td>
			</tr>
		</table>
		</td>
		<!--</tr>
		
		<tr id="uplodJY">-->
         <td>课程讲义： <br><c:if test="${uploJY != null}"><a href="${donwlodResourseURL }/ctu-resource-agent?uri_type=download&user=${sessionScope.user.uid}&resource_id=${uploJY}" class="red">${uploJYResourceInfo.meta.full_name}</a></c:if></td>
         <td>
			<div class="fieldset flash" id="fsUploadProgress3">
			<label  class="legend">上传课程讲义</label >
		</div>
		<div id="divMovieContainer3">
			<label id="spanButtonPlaceHolder3"></label> <input id="btnCancel3"
				type="button" value="取 消" onclick="cancel(swf3,3);"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<table id="download3">
			<tr id="downloadList3">
				<td></td>
			</tr>
		</table>
		</td>
		</tr>
	</table>
	</div>
	
</body>
</html>

