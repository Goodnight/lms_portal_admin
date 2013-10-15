<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<title>安排人员</title>
	<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
   <form id="form1">
		<input type="hidden" id="importType" name="importType"
			value="responseUser" /> <input type="hidden" id="objId"
			name="objId" value="${sid}" />
	</form>
	<div class="blackall hidden">
			&nbsp;
	</div>
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow">
			<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		    <div id="dialog_content" class="cl"></div>
		</div>
	</div>
	<div class="container">
		<jsp:include page="/WEB-INF/page/include/header.jsp" />
		<div class="breadCrumbHolder breadCrumbPage">
		  	<div class="headerco">
		     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
	                    <div class="z">
                   			<ul>
                               <li class="first"><a href="${basepath }/index.html">首页</a></li>
                               <li><a href="${basepath }/survey/index.html?type=1">反应层评估</a></li>
                               <li class="last">安排人员</li>
                       		</ul>
	                    </div>
	                    <div class="y"></div>
	                </div> 
		    </div>
		  </div>
		<div class="content cl">
			<div class="ngreyborder changeblue2 mt20">
				<h2 class="png_bg">反应层评估 - 安排人员</h2>
				<div class="courseupload2 pt15">
	            	<ul class="window_nav newnav">
           				<li class="basic"><a href="${basepath }/survey/new.html?type=1&sid=${sid}&symbol=${symbol}" class="png_bg">基本信息</a></li>
                   		<li class="course"><a href="javascript:;" class="green png_bg">安排人员</a></li>
	                </ul>
	                <form id="query_form">
	                <div class="mt60 newsearch" style="padding-top:50px">
	                	<div class="ml20">
	                		<label class="ml30 mr10">员工编号： <input id="search_user_sn" name="search_user_sn" type="text" class="input"/></label>
	                		<label class="ml13 mr10">员工姓名： <input id="search_user_name" name="search_user_name" type="text" class="input" /></label>
	                		<label class="ml13 mr10">手机号码： <input id="search_user_mobile" name="search_user_mobile" type="text"  class="input"/><!--只能输入数字--></label>
	                		<input class="searchbutton ml30" type="button" value="搜索"/>
	                	</div>
	                </div>
	                </form>
	                <c:if test="${'0' eq upId || '' eq upId || null eq upId}">
		                <div class="taR mt20 mr10">
		                	<a id="btn_chooseperson" href="#" class="functionbutton">添加</a>
		                	<a href="#" class="functionbutton" id="leadin">导入</a>
		                	<a id="btn_delete" href="#" class="functionbutton">删除</a>
		                </div>
		            </c:if>
	                <div id="aulist" class="dataTables_wrapper mt10" style="padding-bottom:0"></div>
                    <div align="right" class="mr10">
                    	<input  id="sid" type="hidden" name="sId" value="${sid }"/>
      					<input id="stype" type="hidden" name="type" value="1" />
						<a href="${basepath }/survey/index.html?type=1" class="step mr10 vm">完成</a>                            			
                    </div>
	            </div>
			</div>
		</div>
	</div>
	<jsp:include page="/WEB-INF/page/include/script.jsp" />
	<script type="text/javascript" src="${basepath }/js/estimate/survey_setting.js" charset="GBK"></script>
	<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>
</html>