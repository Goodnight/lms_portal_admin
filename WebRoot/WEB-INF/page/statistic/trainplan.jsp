<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>培训计划统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<script type="text/javascript">
			orgId = '${orgId}';
			flag= '${flag}';
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
			                                      培训计划统计
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
		       			<div class="reHeight">
						<form id="trainplanForm">
			            	<div class="newmain">
			                	<div class="newmainco">
                                    <div class="searchblock">
                                        <ul class="dpnav2 m10">
                                            <li class="now">查询</li>
                                        </ul>
                                        <table border="0" cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td class="taR">计划名称</td>
                                            <td class="taL">
                                                <input type="hidden" id="search_orgid" name="orgId" value=""/>
                                                <input name="name" type="text" class="inputtext" id="nameid" value="输入培训计划的名称"/>
												<input id="sub_org" type="hidden" name="suborg" value="1" />
                                            </td>
                                            <td class="taR">年度</td>
                                            <td class="taL">
                                                <select name="year" class="select" id="yearid">
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
                                                </select>
                                            </td>
                                            <td class="taR">计划类型</td>
                                            <td class="taL">
                                                <select name="planType" class="select" id="planTypeid">
                                                    <option value="">全部</option>
                                                    <option value="0">正式</option>
                                                    <option value="1">临时</option>
                                                </select>
                                            </td>
                                        </tr>
                                        </table>
                                        <div align="right" class="mt10">
                                            <input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                                        </div>
                                    </div>
			                        <div>
			                            <div class="dataTables_wrapper">
									 		<h3 class="reHeight">
				                            	<div class="z" style="font-size:14px;">培训计划统计报表</div>
				                              <!--  <div class="y"><a href="#" class="functionbutton leadout">导出</a></div>-->
			                            	</h3>
											<table class="datatable" width="100%">
												<thead>
													<tr>
														  <th>机构名称</th>
														  <th>年度</th>
														  <th>计划类型</th>
														  <th>编号</th>
														  <th>培训计划名称</th>
														  <th>计划培训班数</th>
														  <th>实际培训班数</th>
														  <th>计划内培训班完成率</th>
													</tr>
												  </thead>
												  <tbody>
														<c:forEach items="${rows}" var="d" varStatus="st">
														  <tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
															<td>${d.orgname}</td>
															<td>${d.year}</td>
															<td><c:choose>
																	<c:when test="${d.planType=='0'}">正式计划</c:when>
																	<c:when test="${d.planType=='1'}">临时计划</c:when>
																</c:choose>
															</td>
															<td>${d.sn}</td>
															<td>${d.name}</td>
															<td><c:out value="${d.trainClassAmount}" escapeXml="false" default="0"></c:out></td>
															<td><c:out value="${d.finishAmount}" escapeXml="false" default="0"></c:out></td>
															<td><c:choose>
																	<c:when test="${d.trainClassAmount=='0'}">-</c:when>
																	<c:when test="${d.trainClassAmount!='0'}">${d.trainClassAmount/d.finishAmount}</c:when>
																</c:choose>
															</td>
														 </tr>
														 </c:forEach>
												 </tbody>
													 
												</table>
											<div id="trainplan_pager">
												<c:set var="pager" value="${pager}" scope="request"></c:set>
												<!-- 分页回调函数 -->
												<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
												<jsp:include page="/WEB-INF/page/list/pager.jsp" />
											</div>
									 	</div>
			                        </div>
			                    </div>
			                </div>
							</form>
							<form id="pagerForm" name="pagerForm" method="post">
								<input type="hidden" id="max" name="max" />
								<input type="hidden" id="page" name="page" />
								<input type="hidden" id="orgId" name="orgId" />
								<input type="hidden" id="name" name="name" />
								<input type="hidden" id="year" name="year" />
								<input type="hidden" id="planType" name="planType" />
								<input type="hidden" id="suborg" name="suborg" />
								<input type="hidden" id="flag" name="flag" value="1" />
							</form>
			                <div class="newlefttree">
			                	<div class="pftree">
				                	<h3>机构部门</h3>
			                        <div class="m10">
			                        	是否包含下级
			                        	<label class="ml12"><input id="issuborg1" name="suborg" type="radio" value="1" class="vm"/> 是</label>
			                        	<label class="ml12"><input id="issuborg0"  name="suborg" type="radio" value="0" class="vm"/> 否</label>
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
		<script type="text/javascript" src="${basepath }/js/statistic/trainplan.js" charset="utf-8"></script>
		<script type="text/javascript">
			orgId = '${orgId}';	
			year='${year}';
			name='${name}';
			planType='${planType}';
			suborg='${suborg}';
			
			if(suborg == '0') {
				$('#issuborg0').attr('checked', 'checked');
			} else {
				$('#issuborg1').attr('checked', 'checked');
			}
			
			$('#nameid').val(name);
			$('#yearid').val(year);
			$('#planTypeid').val(planType);
			$('#searchButton').on('click', function () {
				var suborg_obj = document.getElementsByName("suborg");
				var i = 0;
				for(; i < suborg_obj.length; i++){ if(suborg_obj[i].checked){ break; } };
				$('#sub_org').val(suborg_obj[i].value);
				
				if(name=="输入培训计划的名称"){
					$('#nameid').val("");
				}
				
				if($('#nameid').val()=="输入培训计划的名称"){
					$('#nameid').val("");
				}
				var d = $('#trainplanForm').serialize();
				var url = 'trainplan/searchresult.html';
			
				$.post(url, d, function(data) {
					data=data.split(',');
					name = data[0];	
					year=data[1];
					planType=data[2];
					orgId=data[3];
					suborg=data[4];
					page(1);
				});

			});
			$("#trainplan_pager .page_max").change(function(){
				page(1);
			});
			function page(i){
				$.dialog.tips('数据加载中...',600,'loading.gif');
			
				var page_max = $("#trainplan_pager .page_max").val();
				var max = page_max ? page_max : 10;
			
				var url = basepath + "/statistic/trainplan.html";

				var form = $('#pagerForm');
				form.attr('action', url);
				form.find('#max').val(max);
				form.find('#page').val(i);
				form.find('#orgId').val(orgId);
				form.find('#name').val(name);
				form.find('#year').val(year);
				form.find('#planType').val(planType);
				form.find('#suborg').val(suborg);
				
				form.submit();
			}		
		</script>
	</body>

</html>