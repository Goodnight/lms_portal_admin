<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>需求收集时间</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入培训班</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入培训班：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="${basepath }/images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step windowbutton" value="确定" /></div>
            </div>
    </div>
</div>
<c:if test="${user.type != 1 }">

    <jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
    <div class="cl">
        <div class="newright">
            <div class="newrightco">
                                        您不是集团级管理员, 不具有访问权限!
            </div>
        </div>
        <div class="container-fluid" id="main-container">
        <c:set var="menu_sn" value="10" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
        </div>
    </div> 
</div>             
</c:if>
<c:if test="${user.type == 1 }">

	<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
    <div class="container-fluid" id="main-container">
    <c:set var="menu_sn" value="10" scope="request"></c:set>
    <c:set var="menu_url" value="/demand/demandTopicIndex.html" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
        <div id="main-content" class="clearfix">
   			 <div id="breadcrumbs" class="pfb">
        	
            <ul class="breadcrumb">
                <li class="first">
                   <i class="icon-home"></i>  
                   <a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span>
                </li>
                <li><a href="${basepath }/demand/demandTopicIndex.html">需求收集时间</a><span class="divider"><i class="icon-angle-right"></i></span></li>
                <li class="last">
                                              需求收集时间列表
                </li>
             </ul>
         </div>
         <div class="y"></div>
    	
           <div class="clearfix newmain">

              <div class="page-right">
                <input type="hidden" id="dep_id"/>
                <div>
                <div class="row-fluid">
                        			<div class="span6">
                        				<div class="blue"><h4>需求收集时间列表</h4></div>
                        			</div>
                        			<div class="span6">
                        				<div class="tableButton pull-right">
		                                  	  <a href="demandTopicNew.html" class="btn btn-small btn-success" target="_blank">新建</a>
		                                  	  <a id="btn_delete" class="btn btn-small btn-danger">删除</a>
		                               	 </div>
                        			</div>
                        		</div>
                    <div class="dataTables_wrapper">

                    	<div id="list_demandTopic"></div>
                    </div>
                </div>
            </div>
        </div>
    	<div class="newleft">
    	
        </div>
    </div> 
</div>
</c:if>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/demand/index_bootstrap.js" charset="gbk"></script>
</body>
</html>
 