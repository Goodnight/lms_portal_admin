<%@page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>部门培训需求</title>
<jsp:include page="/WEB-INF/page/include/css_bootstrap.jsp"></jsp:include>
</head>
<body class="bg">
	<jsp:include page="/WEB-INF/page/include/downloadData.jsp"></jsp:include>
	<jsp:include page="/WEB-INF/page/include/header_bootstrap.jsp"></jsp:include>
	<form id="form1" class="hide">
		<input type="hidden" id="importType" name="importType"
			value="departmentTrain" />
	</form>
	<div class="blackall hide">&nbsp;</div>
	<div class="container-fluid" id="main-container">
		<c:set var="menu_sn" value="10" scope="request"></c:set>
		<c:set var="menu_url" value="/demand/demandDepIndex.html" scope="request"></c:set>
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
									<br/>
									  <input type="hidden" id="dep_id" /> <input type="hidden"
										id="oriDepId" value="${oriDepId }" /> <input type="hidden"
										id="depOrOrgType" />
								
									<table border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td class="taR">年度</td>
											<td class="taL"><select id="year" class="select">
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
											</select></td>
											<td class="taR">需求类别</td>
											<td class="taL"><select id="type" name="type"
												class="select">
													<option value="">全部</option>
													<c:forEach items="${dmdDepList.type_spId}" var="bo">
														<option value="${bo.spId}">${bo.name}</option>
													</c:forEach>
											</select></td>
											<td class="taR">需求内容</td>
											<td class="taL" colspan="3"><select id="item_id"
												class="select">
													<option value="">全部</option>
													<c:forEach items="${dmdItemList}" var="item">
														<option value="${item.dtId}">${item.name}</option>
													</c:forEach>
											</select></td>
										</tr>
									</table>
									<div class="taR mr10 mt10">
										<label id="searchButton" type="button"
											class="btn btn-info btn-small searchbutton m10" hidefocus="true" /><i class="icon-search"></i> 搜索</label> <input
											id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
										<!-- 初登录时获得所管辖范围 -->
									</div>
								
									<div class="row-fluid">
										<div class="span6">
                        					<div class="blue"><h4>部门培训需求列表</h4></div>
                        				</div>

										<div class="span6">
											<div class="tableButton pull-right">
		                                  	  <a href="demandDepNew.html?orgDepId=9002" class="btn btn-small btn-success" target="_blank">新建</a>
		                                  	  <a href="javascript:;" id="leadin" class="btn btn-small btn-warning leadin">导入</a>
		                                  	  <a id="btn_delete" class="btn btn-small btn-danger">删除</a>
		                                  	  <input id="pageNo" type="hidden" value="${pageNo }" />
		                               	 	</div>
						
										</div>
								</div>
								<div id="list_demandDep"></div>
							</div>
								
					    </div>
					</div>
						
				<div class="newlefttree">
					<div class="pftree">
						<h4><strong>机构部门</strong></h4>
	                  	<div class="control-group">
	                  		<label class="control-label">是否包含下级：</label>
	                 		<div class="controls">
	                                                                             
	                      		<label class="ml12">
	                      			<input name="isChildDep"
											type="radio" value="1" class="vm" checked="checked" /> <span class="lbl">是</span></label>
	                      		<label class="ml12">
	                            	<input name="isChildDep" type="radio"
											value="0" class="vm" /><span class="lbl">否</span>
	                      		</label>
	                 		</div>
	                  	</div>
						<div id="org_jstree"></div>
					</div>
				</div>
				<div class="extra">
							<h3>
								<div class="extraimg"></div>
								<div class="extraimg extraimon"></div>
								<div class="extraimg extraimg2"></div>
								<div class="extraimg extraimon2"></div>
							</h3>
				</div>
			</div>
		</div>
		
	</div>


	<jsp:include page="/WEB-INF/page/include/script_bootstrap.jsp"></jsp:include>
	<script type="text/javascript" src="${basepath}/js/demand/demandDep_bootstrap.js"
		charset="gbk"></script>
	<jsp:include page="/WEB-INF/page/include/upload_bootstrap.jsp"></jsp:include>
</body>
</html>
