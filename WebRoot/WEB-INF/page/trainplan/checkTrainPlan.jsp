<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>省审查市培训计划</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
<body class="bg">
<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content"></div>
    </div>
</div>

<c:if test="${user.type == 3 }">
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
    <div class="cl">
        <div class="newright">
            <div class="newrightco">
                                        您不是省公司员工, 无此权限!
            </div>
        </div>
        <div class="newleft">
        <c:set var="menu_sn" value="7" scope="request"></c:set>
        <jsp:include page="/WEB-INF/page/include/leftNav.jsp"></jsp:include>
        </div>
    </div> 
</div> 
</c:if>
<c:if test="${user.type != 3 }">
<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
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
                            <li><a href="${basepath }/trainplan/checkTrainPlan.html">省审核市培训计划</a></li>
                        </ul>
                    </div>
                    <div class="y"></div>
                </div>
              </div>
            </div>
            <div class="reHeight">
                <div class="newmain">
                    <div class="newmainco">
                    	<div class="searchblock pt15">
                                <ul class="dpnav2 m10">
                                	<li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td class="taR">计划名称</td>
                                    <td class="taL">
                                    	<input name="name" type="text" class="inputtext" id="nameid" value="输入培训计划的名称"/>
                                    	<input type="hidden" id="search_orgDepId" value=""/>
                                    	<input id="orgDepOriId" type="hidden" value="${orgDepOriId }" />
                                    </td>
                                    <td class="taR">年度</td>
                                    <td class="taL">
                                    	<select name="year" class="select" id="yearid">
                                    		<option value="">全部</option>
                                    		<option value="2008">2008</option>
                                    		<option value="2009">2009</option>
                                    		<option value="2010">2010</option>
                                    		<option value="2011">2011</option>
                                    		<option value="2012">2012</option>
                                			<option value="2013">2013</option>	
                                    	</select>
                                    </td>
                                  </tr>
                                </table>
								<div align="right" class="mt10">
									<input id="searchCheckButton" type="button" class="searchbutton m10" value="搜索"/>
								</div>
                        </div>
                        <div>
                        <!-- 省审核市培训计划列表首页 -->
                        <div class="dataTables_wrapper">
                        	<h3 class="reHeight">
                            	<div class="z">省审核市培训计划列表</div>
                            </h3>
							    <div id="list_checkTrainPlanList"></div>
					    </div>
                        </div>
                    </div>
                </div>
                <div class="newlefttree">
                   <div class="pftree">
                       <h3>机构部门</h3>
                       <div class="m10">
                                                                                  是否包含下级
                           <label class="ml12"><input name="1" type="radio" value="" class="vm" /> 是</label>
                           <label class="ml12"><input name="1" type="radio" value="" class="vm" checked="checked" /> 否</label>
                       </div>
                       <div id="org_jstree"></div>
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
            <c:set var="menu_sn" value="7" scope="request"></c:set>
            <jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
        </div>
    </div>
</div>
</c:if>  
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript" src="${basepath }/js/trainplan/checkTrainPlan.js" charset="gbk"></script>
</body>
</html>
