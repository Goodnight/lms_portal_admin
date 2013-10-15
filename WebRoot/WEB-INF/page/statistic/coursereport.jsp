<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>课程学习信息统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="container">
		    <jsp:include page="/WEB-INF/page/include/header.jsp" />
		  	<div class="cl">
		    	<div class="newright">
		        	<div class="newrightco"> 
						<div class="listpagenav">
                        <div class="breadCrumbHolder pf">
                                <div id="breadCrumb3" class="breadCrumb reHeight">
                                    <div class="z">
                                         <ul>
											<li class="first">
												<a href="${basepath }/index.html">首页</a>
											</li>
											<li>
												<a href="#">培训统计</a>
											</li>
											<li class="last">
												课程学习信息统计
											</li>
										</ul>
                                    </div>
                                    <div class="y"></div>
                                </div>
                            </div>
                        </div>
						<div class="m10 hidden" id="datasource" style="display: block;">
						<div class="ngreyborder changeblue2 mt20">
							<h2 class="png_bg">课程学习详情报表</h2>
								<div class="courseupload pt15">
									<div>
										<div class="dataTables_wrapper" style="width:99%">
													<h3 class="reHeight">
													<div class="y"><a href="javascript:;" class="functionbutton" id="dataleadout">导出</a></div>
													</h3>
													<table class="datatable" width="100%">
														<thead>
															<tr>
																  <th>课程编号</th>
																  <th>课程名称</th>
																  <th>所属机构</th>
																  <th>学习总人数</th>
																  <th>学习总人次</th>
																  <th>学习总时长</th>
																  <th>平均学习时长</th>
																  <th>完成人数</th>
																  <th>完成率</th>
															</tr>
														  </thead>
														  <tbody>
															<tr class="gradeA odd">
																<td>CW-A-00-000-SN0580</td>
																<td>创业管理培训系列之识别机会和市场</td>
																<td>福建分公司</td>
																<td>114</td>
																<td>221</td>
																<td>228</td>
																<td>2</td>
																<td>100</td>
																<td>95%</td>
															 </tr>
															 <tr class="gradeA even">
																<td>CW-A-00-000-SN0580</td>
																<td>创业管理培训系列之识别机会和市场</td>
																<td>福建分公司</td>
																<td>114</td>
																<td>221</td>
																<td>228</td>
																<td>2</td>
																<td>100</td>
																<td>95%</td>
															  </tr>
														   
															
															  
															 </tbody>
															 
														</table>
													<div class="reHeight" style="padding:0 0 20px 0;">
														<div class="dataTables_length z">
															<div class="z pt10">每页</div>
															<div class="selector z" id="uniform-undefined"><span style="-moz-user-select: none;">10</span><select size="1" style="opacity: 0;"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></div>
															<div class="z pt10">条</div>
															<div class="z m10">|</div>
															<div class="z pt10">共58条</div>
															<div class="z m10">|</div>
															<div class="z pt10">当前1-20条</div>
														</div>
														<div class="dataTables_paginate paging_full_numbers"><span class="first paginate_button paginate_button_disabled">第一页</span><span class="previous paginate_button paginate_button_disabled">前一页</span><span><span class="paginate_active">1</span><span class="paginate_button">2</span><span class="paginate_button">3</span><span class="paginate_button">4</span><span class="paginate_button">5</span></span><span class="next paginate_button">后一页</span><span class="last paginate_button">最后页</span></div>
													</div>
												</div>
					
										
									</div>
									
								</div>
							
						</div>
						<div class="taR"><a href="course.html"><input type="button" id="databack" style="height:30px;" hidefocus="true" value="返回" class="step mt10" name=""></a></div>
					</div>
					</div>
		        </div>
		    	<div class="newleft">
		    		<c:set var="menu_sn" value="9" scope="request"></c:set>
		        	<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div> 
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath }/js/statistic/user.js" charset="gbk"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.min.js"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.hotkeys.js"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.cookie.js"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.ui.min.js"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.uniform.min.js"></script>
		<script type="text/javascript" src="${basepath }/js/jquery.jstree.js"></script>
		<script type="text/javascript" src="${basepath }/js/menu.js" charset="utf-8"></script>
		<script type="text/javascript" src="${basepath }/js/activity.js"></script>
		<script src="${basepath }/js/lhgdialog.min.js?self=true&skin=idialog"></script>
	</body>
</html>
