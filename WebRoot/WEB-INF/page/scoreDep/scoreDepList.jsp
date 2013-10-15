<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>部门积分管理列表</title>
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
								<div class="breadCrumb reHeight" id="breadCrumb3">
									<div class="z">
										<ul>
											<li class="first">
                                            <a href="${basepath }/">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/rewardScoreDep/scoreDepList.html">集团积分</a>
                                        </li>
                                        <li class="last">
                                                                                                                部门积分列表
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
									
									<div class="searchblock">
										<ul class="dpnav2 m10 reHeight">
                                	<li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                               		<td class="taR">部门名称</td>
                                	<td class="taL"><input type="text" class="input" name="name" id="name" value=""/></td>
                               		<td><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" onclick="sechBottonClick(1)"/></td>
                                 </tr>
                                </table>
                                
									</div>
									<div>
										<div class="dataTables_wrapper">
										 <h3 class="reHeight">
                            	            <div class="z" style="font-size:14px;">部门积分列表</div>
                                            <div class="y">
                                            <a target="_blank" href="${basepath }/rewardScoreDep/toSaveScoreDep.html" class="functionbutton">分配</a>
                                            <a target="_blank" href="${basepath }/rewardScoreDepCost/scoreDepCostApplyList.html?depId=${depId}" class="functionbutton">申请兑换</a>
                                            <a target="_blank" href="${basepath }/rewardScoreDepCost/scoreDepCostAllApplyList.html" class="functionbutton">审批</a>
                                            <a href="javascript:;" class="functionbutton leadout">导出</a></div>
                                         </h3>
												<div class="reHeight">
													
													
												</div>
												<!-- 文档列表 -->
									<div id="list_scoreDep"></div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="newlefttree">
								<div class="pftree">
									<h3>
										机构部门
									</h3>
									<div class="m10">
										是否包含下级
										<label class="ml12">
											<input id="isChildOrg" name="isChildOrg" type="radio" value="1" class="vm" checked="checked"/>
											是
										</label>
										<label class="ml12">
											<input id="isChildOrg" name="isChildOrg" type="radio" value="0" class="vm"
												/>
											否
										</label>
									</div>
									<div id="org_jstree_dep"></div>
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
				<div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="4" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
			</div>
		</div>
		<script type="text/javascript">
			var basepath = "${basepath}";
			var rootPosition = ["${sessionScope.rootposition}"];
		</script>
		<script type="text/javascript">
			var rootId = "${node.id}";
		</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		

		<script type="text/javascript" src="${basepath }/js/score/scoreDep.js" charset="gbk"></script>

	</body>

</html>






