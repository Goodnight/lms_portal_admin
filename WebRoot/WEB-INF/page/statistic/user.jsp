<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>员工学习信息统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="blackall_new hidden">&nbsp;</div>
		<div class="treewindow" >
			<div id="org_jstree" class="demo treedemo"></div>
		    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
		</div>
		<div id="dialog" class="hidden">
			<div class="blackall">&nbsp;</div>
			<div class="newwindow" id="choosepersonco">
				<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
			    <div id="dialog_content" class="cl"></div>
			</div>
		</div>
		<div class="container">
		    <jsp:include page="/WEB-INF/page/include/header.jsp" />
		  	<div class="cl">
		    	<div class="newright">
		        	<div class="newrightco">
		            	<div class="listpagenav">
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
		                                            员工学习信息统计
		                                        </li>
		                                	</ul>
		                                    </div>
		                                    <div class="y"></div>
		                                </div>
		                            </div>
		                        </div>
		            		<div>
		            			<ul class="dpnav2 m10 reHeight" style="width:99%">
				                	<li class="now">查询</li>
				                </ul>
								<form id="userForm" autocomplete="off">
				            	<div class="bigsearchblock">
				                	<div class="bigsearchco">
				                    	<h5>员工信息</h5>
										
				                        <div class="basic_information mt2" style="padding-top:0">
				                        	<table cellpadding="20" cellspacing="20" style="margin:0">
				                            	<tr>
				                                    <td colspan="3">
														<em class="option choosed reportall"><input name="usertype" type="radio" value="1" checked="checked" /></em> 所有员工
														 <em class="option reportappoint"><input name="usertype" type="radio" value="2" /></em> 指定员工 
														<!-- <em class="option reportleadin"><input name="usertype" type="radio" value="3" /></em> 导入员工--> 
														 <label class="ml50"><input type="checkbox" class="vm mr5" name="islearn" value="1" />包括未学习的员工</label>
													 </td>
				                                </tr>
				                                <!-- 人员多选 -->
				                                <tr class="appoint hidden">
				                                	<td class="taR vt" style="padding-top:0" width="100">单个员工</td>
				                                    <td id="newpersonco" class="taL">
                                                        <div class="cl mt4 objectstring"></div>
                                                        <div><span id="btn_user" class="chooseperson ml0">选择员工</span></div>
                                                    </td>
				                                </tr>
				                                <!-- 部门多选 -->
				                                <tr class="appoint hidden">
				                                	<td class="taR vt" style="padding-top:0">机构成员</td>
				                                	<td colspan="2">
				                                    	<div class="vm z objectstring">请选择</div>
				                                        <div class="z"><span class="vm chooseOrg">选择机构</span></div>
				                                        <div class="z ml12">
														<label><input type="checkbox" class="vm mr5 ml12" name="suborg" value="1" />包含子部门</label><label><input type="checkbox" class="vm mr5" name="subcom" value="1" />包含子公司</label>
														</div>
				                                    </td>
				                                </tr>
				                                
				                                <tr class="leadin hidden">
				                                	<td class="taR vt" style="padding-top:0">员工信息</td>
				                                    <td colspan="2"><textarea></textarea></td>
				                                </tr>
				                            </table>
				                        </div>
				                    </div>
				                    <div class="bigsearchco">
				                    	<h5>课程信息</h5>
				                        <div class="basic_information mt2" style="padding-top:0">
				                        	<table cellpadding="20" cellspacing="20" style="margin:0">
				                            	<tr>
				                                    <td colspan="3">
													<em class="option choosed reportall"><input name="coursetype" type="radio" value="1" checked="checked"  /></em> 所有课程
													 <em class="option reportappoint"><input name="coursetype" type="radio" value="2" /></em> 指定课程
													<!--  <em class="option reportleadin"><input name="coursetype" type="radio" value="3" /></em> 导入课程-->
													  </td>
				                                </tr>
				                                <!-- 选择课程 -->
				                                <tr class="appoint hidden">
				                                	<td class="taR vt" style="padding-top:0" width="100">单个课程</td>
				                                    <td class="taL classcourse">
				                                    	<div class="cl mt4 objectstring"></div>
                                                        <div><span class="vm addClass ml0">选择课程</span></div>
				                                    </td>
				                                </tr>
				                                <!-- 知识分类单选 -->
				                                <tr class="appoint hidden">
				                                	<td class="taR vt" style="padding-top:0">知识分类</td>
				                                	<td colspan="2">
				                                    	<div class="vm z objectstring">请选择</div>
				                                        <div class="z"><span class="vm chooseKno">选择类别</span></div>
				                                    </td>
				                                </tr>
				                                <!-- 选择培训班课程  -->
				                                <tr class="appoint hidden">
				                                	<td class="taR vt" style="padding-top:0" width="100">培训班课程</td>
				                                    <td class="taL objectstring classtrain">
				                                    	<div class="z" style="max-height:300px;overflow-y:auto;"></div>
				                                      	<div><span id="btn_chooseclass" class="ml0">选择培训班</span></div>
				                                    </td>
				                                </tr>
				                                <tr class="leadin hidden">
				                                	<td class="taR vt" style="padding-top:0">课程名称</td>
				                                    <td colspan="2"><textarea></textarea></td>
				                                </tr>
				                            </table>
				                        </div>
				                    </div>
				                    <div class="bigsearchco" style="border:0">
				                    	<h5>报表类型</h5>
				                        <div class="searchblock">
				                                <table border="0" cellspacing="0" cellpadding="0">
				                                  <tr>
				                                  	<td class="taR">时间范围</td>
				                                    <td class="taL">
														<select id="report" class="select" name="sectionType">
															<option value="0">月报表</option>
															<option value="1">季报表</option>
															<option value="2">半年报表</option>
															<option value="3">其他</option>
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
				                        </div>
				                    </div>
									 <div align="right">
										<input id="btn_userform_submit" name="" type="button" class="searchbutton m10" value="加入统计" hidefocus="true" style="height:30px;"/>
										<input name="" type="button" class="searchbutton m10 btn_clean" value="重置" hidefocus="true" style="height:30px;"/>
									</div>
				                </div>
				               </form>
							   <form id="delForm">
                				<div class="dataTables_wrapper  mt20" style="width:99%">
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
													<c:when test="${d.status=='2'}">
													<tr class="gradeA even">
													<td><input name="jobId" type="checkbox" value="${d.jobId}" /></td>
													<td><a href="${basepath }/ShowReport.wx?PAGEID=userlearn&jobId=${d.jobId}" class="datacode2" target="_blank">队列创建的报表数据</a></td>
													</c:when>
												</c:choose>
												<td>员工学习情况报表</td>
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
										<div id="user_pager">
											<c:set var="pager" value="${pager}" scope="request"></c:set>
											<!-- 分页回调函数 -->
											<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
											<jsp:include page="/WEB-INF/page/list/pager.jsp" />
										</div>
	                            </div>
								</form>
		        		</div>
		            </div>
		        </div>
				<form id="pagerForm" name="pagerForm" method="post">
					<input type="hidden" id="max" name="max" />
					<input type="hidden" id="page" name="page" />
				</form>
		    	<div class="newleft">
		    		<c:set var="menu_sn" value="9" scope="request"></c:set>
		        	<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div> 
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath }/js/statistic/user.js" charset="utf-8"></script>
	</body>
</html>
