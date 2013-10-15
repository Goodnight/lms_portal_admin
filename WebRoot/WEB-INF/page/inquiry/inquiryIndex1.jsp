<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%><%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>培训需求调查列表</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
<form id="form1" class="hide">
	<input type="hidden" id="importType" name="importType" value=inquiryResult />
	<input type="hidden" id="objId"	name="objId" />
</form>
<div class="blackall hide">&nbsp;</div>

<div class="container-fluid" id="main-container">
	<a href="#" id="menu-toggler" class="pfb"><span></span></a><!-- menu toggler -->
	<c:set var="menu_sn" value="10" scope="request"></c:set>
	<c:set var="menu_url" value="/inquiry/inquiryIndex.html" scope="request"></c:set> <!-- Current url for menu -->
	<jsp:include page="/WEB-INF/page/include/leftNav_bootstrap.jsp"></jsp:include>
    <div id="main-content" class="clearfix">				
		<div id="breadcrumbs" class="pfb">
        	
            <ul class="breadcrumb">
                <li class="first">
                   <i class="icon-home"></i>  
                   <a href="${basepath }/index.html">首页</a><span class="divider"><i class="icon-angle-right"></i></span>
                </li>
                <li><a href="${basepath }/inquiry/inquiryIndex.html">培训需求</a><span class="divider"><i class="icon-angle-right"></i></span></li>
                <li class="last">
                                               培训需求调查列表
                </li>
             </ul>
         </div>
		<div class="clearfix newmain">
			
              <div class="newmainco">
              <div class="page-right">
                  <ul class="nav nav-tabs">
                      <li class="active"><a>查询</a></li>
                  </ul>
                  <br>
                 	 <table border="0" cellspacing="0" cellpadding="0">
	                  <tr>
	                     <td class="taR">调查主题 &nbsp;</td>
	                     <td class="taL">
	                     	<div class="inputType"><input id="topic" type="text" class="input"/></div>                     	
	                     </td>
	                     <td class="taR">&nbsp;&nbsp;&nbsp;调查发布状态</td>
	                     <td class="taL">
	                     	<select id="status" class="select">
                                    <option value="">全部</option><option value="1">未发布</option><option value="2">已发布</option></select>
                         </td>
	                  </tr>
	                  <tr>
                         <td class="taR">起止时间&nbsp;&nbsp;</td>
                         <td class="taL">
	                         <div class="input-prepend inputType">
								<span class="add-on"><i class="icon-calendar"></i></span>
								<input class="span2" type="text" name="startDate" id="startDate">
							 </div>
	                        <!--<em>&nbsp; 到 &nbsp;</em>
	                         <div class="input-prepend inputType">
								<span class="add-on"><i class="icon-calendar"></i></span>
								<input class="span2" type="text" name="endDate" id="endDate">
								
							 </div>  -->
						</td>
      
                      </tr>
                  </table>
				 	 <div align="right" class="mt10">
				 	 	<label class="btn btn-info btn-small" onclick="page(1)" hidefocus="true" /><i class="icon-search"></i> 搜索</label>
				 	 </div>
                            
              
                      <hr />  
              		 
               			<div class="row-fluid">
                        			<div class="span6">
                        				<div class="blue"><h4>培训需求调查列表</h4></div>
                        			</div>
                        			<div class="span6">
                        				<div class="tableButton pull-right">
		                                  	  <a href="inquiryNew.html" class="btn btn-small btn-success" target="_blank">新建</a>
		                                  	  <a href="#" class="btn btn-small btn-warning leadin">导入调查结果</a>
		                                  	  <a id="btn_delete" class="btn btn-small btn-danger">删除</a>
		                                  	  <input id="pageNo" type="hidden" value="${pageNo }" />
		                               	 </div>
                        			</div>
                        		</div>
                        <!-- 培训需求调查首页 -->
                       	 	<div class="dataTables_wrapper">
                        		
                            		
                              	
                            	
                            	<div id="inquiryList" class="table-responsive"></div> 
                       		</div>
                      	 </div>
                      	 </div>
				</div>
             <div class="newlefttree">
              <div class="pftree">
                  <h4><strong>机构部门</strong></h4>
                  <div class="control-group">
                  <label class="control-label">是否包含下级：</label>
                  <div class="controls">
                                                                             
                      <label class="ml12"><input name="1" type="radio"class="ace vm" value="" checked="checked" /> <span class="lbl">是</span></label>
                      <label class="ml12">
                            <input name="1" type="radio" value="" class="vm ace"/> <span class="lbl">否</span>
                            <input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
                            <input type="hidden" id="search_orgDepId" value=""/>
                      </label>
                  </div>
                  </div>
                  <div id="org_jstree"></div>
              </div>
           </div>
	           <div class="extra">
	               <h3 class="">
	               <div class="extraimg" style="display: block;"></div>
	               <div class="extraimg extraimon" style="display: none;"></div>
	               <div class="extraimg extraimg2" style="display: none;"></div>
	               <div class="extraimg extraimon2" style="display: none;"></div>
	               </h3>
	           </div>
           </div>
           </div>
           </div>
        
         
	
   
    <a href="#" id="btn-scroll-up" class="btn btn-small btn-inverse">
			<i class="icon-double-angle-up icon-only"></i>
		</a>
<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/editor.js" charset="utf-8" ></script>
<script type="text/javascript" src="${basepath}/js/inquiry/inquiry_bootstrap.js" charset="gbk"></script>
<jsp:include page="/WEB-INF/page/include/upload_bootstrap.jsp"></jsp:include>
</body>
</html>
   