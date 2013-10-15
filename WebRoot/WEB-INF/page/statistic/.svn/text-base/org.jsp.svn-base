<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>机构学习信息统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
		<script type="text/javascript">
		   	orgId = '${orgId}';	
		</script>
	<body class="bg">
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		<div class="container">
		    <!-- 导入头部文件 -->
		    <jsp:include page="/WEB-INF/page/include/header.jsp" />
		    <div class="cl">
		        <div class="newright">
		        	<div class="newrightco">
		        		<div class="listpagenav">
		        			<!-- 页面导航 -->
		                  	<div class="breadCrumbHolder pf">
		                          <div class="breadCrumb reHeight" id="breadCrumb3">
		                              <div class="z">
		                                  <ul>
		                                      <li class="first">
		                                      	<a href="${basepath }/index.html">首页</a>
		                                      </li>
		                                      <li>
		                                      	<a href="#">培训统计</a>
		                                      </li>
		                                      <li class="last">
			                                     机构学习信息统计
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
		       			<div class="reHeight">
			            	<div class="newmain">
			                	<div class="newmainco">
								<form id="orgForm" autocomplete="off">
									<input id="search_depid" type="hidden" name="orgId" value=""/>
									<input id="search_depidpath" type="hidden" name="idPath" value=""/>
									<input id="search_depname" type="hidden" name="orgName" value=""/>
									<input id="reporttype_id" type="hidden" name="reporttype" value="1" />
									<input id="sub_org" type="hidden" name="suborg" value="1" />
			                    	<ul class="dpnav m10 reHeight" style="width:99%;">
		                                    <li id="li_course" class="now">课程报表</li>
		                                    <li id="li_doc">文档报表</li>
		                                    <li id="li_case">案例报表</li>
		                                    <li id="li_trainclass">培训班报表</li>
		                            </ul>
		                        	  <div class="bigsearchblock searchblock" style="padding-bottom:0">
		                                <table border="0" cellspacing="0" cellpadding="0">
				                                  <tr>
				                                  	<td class="taR">时间范围</td>
				                                    <td class="taL">
														<select id="report" class="select" name="sectionType">
															<option value="0">月报表</option>
															<option value="1">季报表</option>
															<option value="2">半年报表</option>
															<option valeu="3">其他</option>
														</select>
													</td>
				                                    <td class="taR month season halfyear">年度</td>
				                                    <td class="taL month season halfyear">
				                                    	<select id="search_year" class="select" name="year">
															<option>2013</option>
															<option>2012</option>
															<option>2011</option>
															<option>2010</option>
															<option>2009</option>
															<option>2008</option>
															<option>2007</option>
															<option>2006</option>
															<option>2005</option>
														</select>
				                                    </td>
				                                    <td class="taR season hidden">季度</td>
				                                    <td class="taL season hidden">
				                                    	<select id="search_season" class="select" name="quarter">
															<option value="1">第一季度</option>
															<option value="2">第二季度</option>
															<option value="3">第三季度</option>
															<option value="4">第四季度</option>	
														</select>
				                                    </td>
				                                    <td class="taR month">月份</td>
				                                    <td class="taL month">
				                                    	<select id="search_month" class="select" name="month">
															<option value="1">一月</option>
															<option value="2">二月</option>
															<option value="3">三月</option>
															<option value="4">四月</option>
															<option value="5">五月</option>
															<option value="6">六月</option>
															<option value="7">七月</option>
															<option value="8">八月</option>
															<option value="9">九月</option>
															<option value="10">十月</option>
															<option value="11">十一月</option>
															<option value="12">十二月</option>
														</select>
				                                    </td>
				                                    <td class="taR halfyear hidden">类型</td>
				                                    <td class="taL halfyear hidden">
				                                    	<select id="search_half_year" class="select" name="yearType">
															<option value="0">上半年</option>
															<option value="1">下半年</option>
														</select>
				                                    </td>
				                                    <td class="taR others hidden">统计开始日期</td>
				                                    <td class="taL others hidden"><input id="search_start_date" type="text" class="timetext cls_date" name="startdate"/></td>
				                                    <td class="taR others hidden">统计结束日期</td>
				                                    <td class="taL others hidden"><input id="search_end_date" type="text" class="timetext cls_date" name="enddate"/></td>
				                                  </tr>
				                                </table>
		                               <div align="right" class="mt10">
									   		<input  id="btn_orgForm_submit" type="button" class="searchbutton m10" id="AddToStatistics" value="加入统计" hidefocus="true" style="height:30px;" />
											<input name="" type="button" class="searchbutton m10 btn_clean" value="重置" hidefocus="true" style="height:30px;"/>
										</div>
										
		                        		</div>
									</form>
	                        	<div>
	                        	
	                        	</div> 
								<form id="delForm">
								<div class="mt20">
										<div class="dataTables_wrapper">
										
											<h3 class="reHeight">
												<div class="z" style="font-size:14px;">统计队列</div>
												<div class="y"><a href="javascript:;" id="btn_delform_submit" class="functionbutton">删除</a></div>
											</h3>
											<table class="datatable" width="100%">
											<thead>
												<tr>
													  <th>删除</th>
													 <th>报表数据</th>
													 <th>报表类型</th>
													 <th>报表条件</th>
													 <th>创建者</th>
													 <th>创建时间</th>
													 <th>队列状态</th>
												</tr>
											  </thead>
											  <tbody>
											  <c:forEach items="${rows}" var="d" varStatus="st">
													<c:choose>
															<c:when test="${d.status=='0'||d.status=='3'}">
															<tr class="gradeA odd">
															<td><input name="jobId" type="checkbox" value="${d.jobId}"/></td>
															<td>队列创建的报表数据</td>
															</c:when>
															<c:when test="${d.status=='1'}">
															<tr class="gradeA even">
															<td></td>
															<td>队列创建的报表数据</td>
															</c:when>
															<c:when test="${d.status=='2' && d.type=='org_course' }">
															<tr class="gradeA even">
															<td><input name="jobId" type="checkbox" value="${d.jobId}" /></td>
															<td><a href="${basepath }/ShowReport.wx?PAGEID=orgcourse&jobId=${d.jobId}" class="datacode2" target="_blank">队列创建的报表数据</a></td>
															</c:when>
															<c:when test="${d.status=='2' && d.type=='org_case' }">
															<tr class="gradeA even">
															<td><input name="jobId" type="checkbox" value="${d.jobId}" /></td>
															<td><a href="${basepath }/ShowReport.wx?PAGEID=orgcase&jobId=${d.jobId}" class="datacode2" target="_blank">队列创建的报表数据</a></td>
															</c:when>
															<c:when test="${d.status=='2' && d.type=='org_doc' }">
															<tr class="gradeA even">
															<td><input name="jobId" type="checkbox" value="${d.jobId}" /></td>
															<td><a href="${basepath }/ShowReport.wx?PAGEID=orgdoc&jobId=${d.jobId}" class="datacode2" target="_blank">队列创建的报表数据</a></td>
															</c:when>
															<c:when test="${d.status=='2' && d.type=='org_trainclass' }">
															<tr class="gradeA even">
															<td><input name="jobId" type="checkbox" value="${d.jobId}" /></td>
															<td><a href="${basepath }/ShowReport.wx?PAGEID=orgtrainclass&jobId=${d.jobId}" class="datacode2" target="_blank">队列创建的报表数据</a></td>
															</c:when>
														</c:choose>
														<c:choose>
															<c:when test="${d.type=='org_course'}"><td>课程报表</td></c:when>
															<c:when test="${d.type=='org_doc'}"><td>文档报表</td></c:when>
															<c:when test="${d.type=='org_case'}"><td>案例报表</td></c:when>
															<c:when test="${d.type=='org_trainclass'}"><td>培训班报表</td></c:when>
														</c:choose>
														<td>${d.describes}</td>
														<td>${username}</td>
														<td>${d.createTm}</td>
														<td><c:choose>
															<c:when test="${d.status=='0'}">待处理</c:when>
															<c:when test="${d.status=='1'}">处理中</c:when>
															<c:when test="${d.status=='2'}">已完成</c:when>
															<c:when test="${d.status=='3'}">统计错误</c:when>
														</c:choose>
														</td>
													 </tr>
											  </c:forEach>
												
												  
												 </tbody>
												 
											</table>
											<div id="org_pager">
												<c:set var="pager" value="${pager}" scope="request"></c:set>
												<!-- 分页回调函数 -->
												<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
												<jsp:include page="/WEB-INF/page/list/pager.jsp" />
											</div>
									</div>
                                    
                                </div> 
								</form>
			                    </div>
			                </div>
							<form id="pagerForm" name="pagerForm" method="post">
								<input type="hidden" id="max" name="max" />
								<input type="hidden" id="page" name="page" />
								<input type="hidden" id="orgId" name="orgId" />
								<input type="hidden" id="flag" name="flag" value="1" />
							</form>
			                <div class="newlefttree">
			                	<div class="pftree">
				                	<h3>机构部门</h3>
			                        <div class="m10">
			                        	是否包含下级
			                        	<label class="ml12"><input name="suborg" type="radio" value="1" class="vm" checked="checked"/> 是</label>
			                        	<label class="ml12"><input name="suborg" type="radio" value="0" class="vm" /> 否</label>
			                        </div>
			                        <div id="org_new_jstree"></div>
				                </div>
				             </div>
			                <div class="extra">
		                    	<h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
		                    </div>
		            	</div>
		            </div>
		        </div>
		        <div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="9" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div> 
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript">
			orgId = '${orgId}';
			flag= '${flag}';
		</script>
		<script type="text/javascript" src="${basepath }/js/statistic/org.js" charset="utf-8"></script>
	</body>
</html>
