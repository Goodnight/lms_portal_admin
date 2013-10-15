<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>岗位培训需求列表</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
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
<div class="container-fluid" id="main-container">
	<c:set var="menu_sn" value="10" scope="request"></c:set>
	<c:set var="menu_url" value="/demand/demandPostIndex.html" scope="request"></c:set>
        	<jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
	
    <div id="main-content" class="clearfix">
    		<div id="breadcrumbs" class="pfb">
        	
            	<ul class="breadcrumb">
                	<li class="first">
                   		<i class="icon-home"></i>  
                   		<a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span>
                	</li>
                	<li><a href="${basepath }/demand/demandPostIndex.html">岗位培训需求</a></li>

             	</ul>
         	</div>
    		<div class="clearfix newmain">
                    	<div class="newmainco">
                        	<div class="page-right">
									<ul class="nav nav-tabs">
										<li class="active"><a>查询</a></li>
									</ul>
									<br />
                                 <input type="hidden" id="dep_id"/>
                               <table border="0" cellspacing="0" cellpadding="0">
                                 <tr>
		                                 <td class="taR">年度</td>
		                                <td class="taL">
		                                <select class="select" id="topic_id">
		                                    <option value="">全部</option>
		                                    <option value="2013">2013</option>
		                                    <option value="2012">2012</option>
		                                    <option value="2011">2011</option>
		                                    <option value="2010">2010</option>
		                                    <option value="2009">2009</option>
		                                    <option value="2008">2008</option>
		                                    <option value="2007">2007</option>
		                                    <option value="2006">2006</option>
		                                    <option value="2005">2005</option>
		                                    <option value="2004">2004</option>
		                                    <option value="2003">2003</option>
		                                </select>
		                                </td>
		                                <td class="taR">填写时间&nbsp;</td>
		                              	 <td class="taL">
			                              	<!-- <div class="input-prepend inputType">
												<span class="add-on"><i class="icon-calendar"></i></span>
												<input class="span2" type="text" name="startDate" id="startDate">
											 </div>-->
		                              	 	 <input id="startDt" name="startDt" type="text" class="input vm time"/><em >&nbsp;到&nbsp;</em><input id="endDt" name="endDt" type="text" class="input vm time"/> 
		                              	 </td>
		                              </tr>
		                              	<tr>
		                                <td class="taR">直线经理&nbsp;</td>
		                                <td class="taL"><div class="inputType"><input type="text"  id="name"  class="input"/></div></td>
		                                
		                                <td class="taR">迫切性&nbsp;</td>
		                                <td class="taL">
		                                <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
		                                <input type="hidden" id="search_orgDepId" value=""/>
		                                 	
		                                <select class="select" id="urgentLevel">
		                                	<option value="">不限</option>
		                                 	<option value="2">迫切</option>
		                                 	<option value="1">一般</option>
		                                 	<option value="0">不迫切</option>
		                                </select>
		                                    <!--  <label><span class="option choosed"><input id="urgentLevel" type="radio" value="" /><span class="lbl"> 不限</span></span></label>
		                                    <label><span class="option"><input id="urgentLevel" type="radio" value="2" /> <span class="lbl"> 迫切</span></span> </label>
		                                    <label><span class="option "><input id="urgentLevel" type="radio" value="1" /><span class="lbl"> 一般</span></span> </label>
		                                    <label class="autowidth"><span class="option"><input id="urgentLevel" type="radio" value="0" /><span class="lbl"> 不迫切</span></span> </label>-->
		                                </td> 
		                              </tr>
                                </table>
                           		<div class="taR"><label type="button" class="btn btn-small btn-info searchbutton m10"  onclick="page(1)" /><i class="icon-search"></i> 搜索</label></div>      
                        
                        	
                        	
	                            
	                            <div class="row-fluid">
										<div class="span6">
                        					<div class="blue"><h4>岗位培训需求列表</h4></div>
                        				</div>

										<div class="span6">
											<div class="tableButton pull-right">
		                                  	  <a href="demandPostNew.html" class="btn btn-small btn-success" target="_blank">新建</a>

		                                  	  <a id="btn_delete" class="btn btn-small btn-danger">删除</a>
		                               	 	</div>
						
										</div>
								</div>
                        		<div id="list_demandPost"></div>
                        </div>
                    </div>
                   </div>
                    <div class="newlefttree">
                    	
                    	<div class="pftree">
                        	<h3>机构部门</h3>
                            <div class="m10">是否包含下级<label class="ml12"><input name="1" type="radio" value="" class="vm" checked="checked"/> <span class="lbl">是</span></label><label class="ml12"><input name="1" type="radio" value="" class="vm"/><span class="lbl">否</span> </label></div>
                    		<div id="org_jstree"></div>
						</div>
                        
                    </div>
                    <div class="extra">
                    	<h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
                    </div>
                </div>
            </div>
        </div>              
    </div>    
</div>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/demandPost_bootstrap.js" charset="gbk"></script>
<script src="${basepath}/js/lhgdialog.min.js?self=true&skin=idialog"></script>
<script>
	$(function(){
		$(document).bind('click', function(event){
			var target = event.target,$target = $(target);
			if ($target.hasClass('runcode')) {
				$.dialog({
			    width: '700px',
			    height: 500,
			    content: 'url:'+$(target).attr('url')
			});
			};
		});
	});
</script> 
</body>
</html>
