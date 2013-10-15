<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<c:if test="${surveyType == '1' }"><title>培训需求模板列表</title></c:if><c:if test="${surveyType == '2' }"><title>评估模板列表</title></c:if>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
<div class="container">
  <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
    <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
           <div class="z">
            <ul>
                   <li class="first">
                       <a href="${basepath }/index.html">首页</a>
                   </li>
                   <li>
                       <a href="${basepath }/inquiry/inquiryIndex.html">培训需求</a>
                   </li>
                   <li class="last">
                       调查问题列表
                   </li>
            </ul>
           </div>
           <div class="y"></div>
       </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">调查问题列表</h2>
        	<form action="saveInquiryTpItemAsc.html" method="post">
        	<input type="hidden" id="stId" name="stId" value="${stId}"/>
            <div class="courseupload basic_information">
            	<div class="taR basic_list" style="border:0;"><a href="新建培训评估模板.html" class="functionbutton chooseperson">新建</a><a href="javascript:;" class="functionbutton">删除</a></div>
            	<div id="list_item"></div>
                <div align="right" class="mr10"><input type="submit" class="step m10 vm"></input><a href="inquiryTpIndex.html" class="back m10 vm">关闭</a></div>
            </div>
            </form>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script_1.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/inquiry/inquiryTpItems.js" charset="gbk"></script>
</body>
</html>
    