<%@page import="java.io.IOException"%>
<%@page import="java.io.FileNotFoundException"%>
<%@page import="java.io.InputStream"%>
<%@page import="com.telecom.lms.core.bo.auth.UserInfoBo"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<c:set var="basepath" value="${SERVER}${pageContext.request.contextPath}" />
<%@page language="java" import="java.util.*"
	contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
<% String pathUpload = "http://180.168.60.15:15320/resource-proxy"; 
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
	<script type="text/javascript" src="<%=pathUpload%>/upload/swf/js/swfupload.js"></script>
	<script type="text/javascript" src="<%=pathUpload%>/upload/swf/js/handlers.js"></script>
	<script type="text/javascript" src="<%=pathUpload%>/upload/swf/js/fileprogress.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/js/upload/ctu.swfupload.js"></script> 

	 <%UserInfoBo user = (UserInfoBo) request.getSession().getAttribute("user"); 
	 
	  %>
	 <script type="text/javascript">
	window.onload=function(){
		var path="<%=pathUpload%>";
		var settings = {
		post_params : {
			"app_id" : "20000",
			"domain" : "telecom",
			"creator" : "<%=user.getUid()%>"
		},
		file_size_limit : "400MB",
		file_types : "*.*",
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
		ctu_swfupload(settings,path,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("download");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow();
				var newCell0 = newRow.insertCell();
				form_saveCourseware.outCode.value=files[i].id;
				newCell0.innerHTML = "<a href='<%=pathUpload%>/"
						+ files[i].download_url + "'> " + file.name + "</a>";
			}

		})
		
		
		var settings1 = {
				post_params : {
			"app_id" : "20000",
			"domain" : "telecom",
			"creator" : "<%=user.getUid()%>"
		},
		file_size_limit : "400MB",
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
		
		ctu_swfupload(settings1,path,function(file, fileData) {
			
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("downloadSrc");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow(-1);
				var newCell0 = newRow.insertCell(-1);
				form_saveCourseware.uplodSrc.value=files[i].id;
				newCell0.innerHTML = "<a href='<%=pathUpload%>/"
						+ files[i].download_url + "'> " + file.name + "</a>";
                    newCell0.innerHTML += "<form action='' method='get'> user : <input type='text' name='user' value='<%=user.getUid()%>' <br>"
					+"domain : <input type='text' name='domain' value='telecom'> <br>"
					+"resource_id : <input type='text' name='resource_id' value='"+files[i].id+"' size='40'>  <br>"
					+"index_url : <input type='text' name='index_url' value='' size='40'> <br>"
					+"<input type='hidden' name='callback_url' value=''"
				
					+"<button type='submit'> 点击发布</button>"
					+ "</form>";
			}

		})
		
		var settings2 = {
		
		post_params : {
			"app_id" : "20000",
			"domain" : "telecom",
			"creator" : "<%=user.getUid()%>"
		},
		file_size_limit : "400MB",
		file_types : "*.zip;*.rar;*.7z",
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
		ctu_swfupload(settings2,path,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("download2");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow(-1);
				var newCell0 = newRow.insertCell(-1);
				form_saveCourseware.uplodCousDG.value=files[i].id;
				newCell0.innerHTML = "<a href='<%=pathUpload%>/"
						+ files[i].download_url + "'> " + file.name + "</a>";
			}

		})
		
		var settings3 = {
		
		post_params : {
			"app_id" : "20000",
			"domain" : "telecom",
			"creator" : "<%=user.getUid()%>"
		},
		file_size_limit : "400MB",
		file_types : "*.zip;*.rar;*.7z",
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
		ctu_swfupload(settings3,path,function(file, fileData) {
			var files = fileData.files;
			for ( var i = 0; i < files.length; i++) {
				var root = document.getElementById("download3");
				var allRows = root.getElementsByTagName('tr');
				var allCells = allRows[0].getElementsByTagName('td');
				var newRow = root.insertRow(-1);
				var newCell0 = newRow.insertCell(-1);
				form_saveCourseware.uplodCousJY.value=files[i].id;
				newCell0.innerHTML = "<a href='<%=pathUpload%>/"
						+ files[i].download_url + "'> " + file.name + "</a>";
			}

		})
		
	}
	 </script>
</head>
<body>

	<div id="content">

<tr>
<td>课程封面</td>
<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgress">
			<label  class="legend">上传文件列表</label >
		</div>
		<div id="divMovieContainer">
			<label  id="spanButtonPlaceHolder"></label> <input id="btnCancel"
				type="button" value="取 消" onclick="swfUpload.cancelQueue();"
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


		<tr id="uplodZipp">
		<td>请选择SCROM/AICC课件.zip包</td>
		<td colspan="3">
		<div class="fieldset flash" id="fsUploadProgressSrc">
			<label  class="legend">上传包</label >
		</div>
		<div id="divMovieContainerSrc">
			<label id="spanButtonPlaceHolderSrc"></label> <input id="btnCancelSrc"
				type="button" value="取 消" onclick="swfUpload.cancelQueue();"
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
		
		<tr>
        <td>课程大纲：</td>
        <td colspan="3">
		<div class="fieldset flash" id="fsUploadProgress2">
			<label  class="legend">上传包</label >
		</div>
		<div id="divMovieContainer2">
			<label id="spanButtonPlaceHolder2"></label> <input id="btnCancel2"
				type="button" value="取 消" onclick="swfUpload.cancelQueue();"
				disabled="disabled"
				style="margin-left: 2px; font-size: 8pt; height: 29px;" />
		</div>
		<table id="download2">
			<tr id="downloadList2">
				<td></td>
			</tr>
		</table>
		</td>
		</tr>
		
		<tr>
         <td>课程讲义：</td>
         <td colspan="3">
			<div class="fieldset flash" id="fsUploadProgress3">
			<label  class="legend">上传包</label >
		</div>
		<div id="divMovieContainer3">
			<label id="spanButtonPlaceHolder3"></label> <input id="btnCancel3"
				type="button" value="取 消" onclick="swfUpload.cancelQueue();"
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
	</div>
	
</body>
</html>

