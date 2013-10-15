<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>需求收集项列表</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow"></div>
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
        <div class="newleft">
        <c:set var="menu_sn" value="10" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
        </div>
    </div> 
</div>             
</c:if>
<c:if test="${user.type == 1 }">

	<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
	<div class="container-fluid" id="main-container">
	<a href="#" id="menu-toggler" class="pfb"><span></span></a><!-- menu toggler -->
	<c:set var="menu_sn" value="10" scope="request"></c:set>
	<c:set var="menu_url" value="/demand/demandItemIndex.html" scope="request"></c:set> <!-- Current url for menu -->
	<jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
    <div id="main-content" class="clearfix">	
	<div class="row-fluid">
			<div id="breadcrumbs" class="pfb">
						<ul class="breadcrumb">
							<li class="first">
								<i class="icon-home"></i> 
								<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span></li>
							<li><a href="demandItemIndex.html">需求收集项设置</a><span class="divider"><i class="icon-angle-right"></i></span>
							</li>
							<li class="last">需求收集项列表</li>
						</ul>
			</div>
			<div class="y"></div>

			<div class="clearfix newmain">
		
              <div class="page-right">
                  <ul class="nav nav-tabs">
                      <li class="active"><a>查询</a></li>
                  </ul>
      			<input type="hidden" id="dep_id"/>
      			 <br>
                <table border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td class="taR">需求项名称&nbsp;</td>
                                <td class="taL"><input id="dmdItemName" type="text" class="input"/></td>
                                <td class="taR">状态&nbsp;</td>
                                <td class="taL">
                                	<label class="option" style="display: inline-block;"><input  name="13" type="radio" value="0" class="ace" /><label class="lbl"> 无效</label></label>
                                        <label class="option" style="display: inline-block;"><input name="13" type="radio" value="1" class="ace" /><label class="lbl"> 有效</label></label>
                                        <label class="option choosed" style="display: inline-block;"><input name="13" type="radio" value="" class="ace"  /><label class="lbl"> 不限</label></label>
                                </td>
                              </tr>
                              <tr>
                                <td class="taR">创建时间&nbsp;</td>
                                <td class="taL" colspan="3"><input id="startDt" name="startDt" type="text" class="input vm time"/><em>到</em><input id="endDt" name="endDt" type="text" class="input vm time"/></td>
                              </tr>
                            </table>
							<div align="right" class="mt10">
							
							<label type="button" class="btn btn-info btn-small searchbutton m10" onclick="page(1)" hidefocus="true" /><i class="icon-search"></i> 搜索</label>
							</div>     
                        
                        	
               			<div class="row-fluid">
                        			<div class="span6">
                        				<div class="blue"><h4>需求收集项列表</h4></div>
                        			</div>
                        			<div class="span6">
                        				<div class="tableButton pull-right">
		                                  	  <a href="demandItemNew.html" class="btn btn-small btn-success" target="_blank">新建</a>
		                                  	  
		                                  	  <a id="btn_delete" class="btn btn-small btn-danger">删除</a>
		                                  	  
		                               	 </div>
                        			</div>
                        		</div>
                       
                       	 
                            <div class="dataTables_wrapper">
                                <div id="list_demandItem"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>    
</div>
</c:if>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/demand/demandItem_bootstrap.js" charset="gbk"></script>
</body>
</html>
  