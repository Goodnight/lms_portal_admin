<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>员工积分管理列表</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
<body class="bg">
<form id="form1">
			<input type="hidden" id="importType" name="importType"
				value="userCredits" />
			<input type="hidden" id="objId" name="objId"  />
		</form>
		<div class="blackall hidden">
			&nbsp;
		</div>
<!-- 导入个人积分 -->
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
                                            <a href="${basepath }/rewardScoreUser/scoreUserList.html">员工积分</a>
                                        </li>
                                        <li class="last">
                                                                                                       员工积分列表
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
                               		<td class="taR">员工姓名</td>
                                	<td class="taL"><input type="text" class="input" name="name" id="name" value=""/></td>
                               		<td><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" onclick="sechBottonClick(1)"/></td>
                                 </tr>
                                </table>
                        </div>
                        
                        	<div>
                        	
                            <div class="dataTables_wrapper">
                            	<h3 class="reHeight">
                            	<div class="z">员工积分列表</div>
                                <div class="y"><a target="_blank" class="functionbutton" id="btn_toAdd">积分奖励</a><a href="javascript:;" class="functionbutton" id="leadin">导入</a><a href="javascript:;" class="functionbutton leadout">导出</a></div>
                            	</h3>
												<!-- 文档列表 -->
									<div id="list_scoreUser"><div>
											</div>
                            </div>
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
		</script>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript">
			var rootId = "${node.id}";			
		</script>

		<script type="text/javascript" src="${basepath }/js/score/scoreUser.js" charset="gbk"></script>
		<jsp:include page="/WEB-INF/page/include/upload.jsp"></jsp:include>
</body>

</html>






