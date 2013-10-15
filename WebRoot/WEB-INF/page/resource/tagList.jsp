<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 

"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>标签库管理</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>

<body class="bg">
<div class="container">
			<jsp:include page="/WEB-INF/page/include/header.jsp" />
			<div class="blackall hidden"></div>

   	
   	<!-- 新增标签库弹出框 -->
   	
<div class="newwindow hidden" id="choosegroup" style="width:500px;height:220px;">
	<div class="taR"><a href="javascript:;" onclick="closed()"><img class="png_bg 

closed" src="${basepath}/images/close.png" width="40" height="40" /></a></div>
	<div class="ngreyborder mt10" style="background:#fff;">
	<h2 class="png_bg">新增标签</h2>
	<div id="dialog_content">
	</div>
            	
            </div>
</div>
			<div class="cl">
				<div class="newright">
					<div class="newrightco">
						<div class="listpagenav">
							<div class="breadCrumbHolder pf">
								<div class="breadCrumb 

reHeight" id="breadCrumb3">
									<div class="z">
										<ul>
                                        <li class="first">
                                         <a href="${basepath }/">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath}/courseware/coursewareList.html">培训资源</a>
                                        </li>
                                        <li class="last">
                                                                                                            标签库管理
                                        </li>
                                	</ul>
									</div>
									<div 

class="y"></div>
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
                                    <td class="taR">标签名</td>
                                    <td class="taL"><input type="text" class="input" id="tagname" name="tagname"/></td>
                                    <td class="taR">标签分类</td>
                                    <td class="taL"><select class="select" id="tagGroupId" name="tagGroupId"><option value="">全部</option><c:forEach items="${tagGroupList.data }" var="t"><option value="${t.tagGpId }">${t.name }</option></c:forEach></select></td>
                                  </tr>
                                  <!--  
                                  <tr>
                                    <td class="taR">培训班</td>
                                    <td class="taL" colspan="3"><select class="select" id="trainClassId" name="trainClassId"><option value="">全部</option><c:forEach items="${trainClassList.data }" var="t"><option value="${t.tcId }">${t.name }</option></c:forEach></select></td>
								</tr>-->
								<tr>
                                    <td class="taR">类型</td>
                                    <td class="taL" colspan="3"><label><span class="option choosed"><input name="createType" type="radio" value="0" /></span> 自建</label><label><span class="option"><input name="createType" type="radio" value="1" /></span> 采集</label></td>
                                  </tr>
                                  <!--  
                                  <tr>
                                    <td class="taR">培训计划</td>
                                    <td class="taL" colspan="3"><select class="select" id="trainPlanId" name="trainPlanId"><option value="">全部</option><c:forEach items="${trainPlanList.data }" var="ta"><option value="${ta.tpId }">${ta.name }</option></c:forEach></select></td>
                                  </tr>-->
                                </table>
                                <div align="right" class="mt10"><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" onclick="selectBottonClick(1)"/></div>
									</div>
									
									<div>
										<div class="dataTables_wrapper">
										 <h3 class="reHeight mt10">
                            	    <div class="z">标签库列表</div>
                                <div class="y mr5"><a href="javascript::" class="functionbutton groupadd" id="btn_add">新增</a><a href="javascript::" class="functionbutton" id="btn_delete">删除</a></div>
                            </h3>
												

<div class="reHeight">
												

	
												

	
												

</div>
												

<!-- 标签库列表 -->
									<div 

id="list_tagList"></div>
										</div>
									</div>
								</div>
							</div>
							
							<div class="newlefttree">
								<div class="pftree">
									<h3>
										知识分类树
									</h3>
									
									<div id="kno_jstree"></div>
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
		        	<c:set var="menu_sn" value="11" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
			</div>
		</div>
		<script type="text/javascript">
			var basepath = "${basepath}";
		</script>
		
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript">
			var rootId = "${node.id}";
			
		</script>

		<script type="text/javascript" src="${basepath }/js/res/tagList.js" charset="gbk"></script>

	</body>

</html>






