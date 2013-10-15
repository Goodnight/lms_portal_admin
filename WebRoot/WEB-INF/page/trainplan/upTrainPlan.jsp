<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
	<meta http-equiv="Content-Type" content="text/xhtml; charset=utf-8" />
	<meta http-equiv="content-language" content="utf-8" />
	<title>上级培训计划列表</title>
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
                            <li><a href="${basepath }/trainplan/upTrainPlan.html">查看上级培训计划</a></li>
                        </ul>
                    </div>
                    <div class="y"></div>
                </div>
              </div>
            </div>
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
	                   <input id="searchUpButton" type="button" class="searchbutton m10" value="搜索"/>
                    </div>
                </div>
                        
                <div>
                <!-- 查看上级培训计划列表首页 -->
                  <div class="dataTables_wrapper">
                  	<h3 class="reHeight">
                      	<div class="z">查看上级培训计划列表</div>
                    </h3>
	               <div id="list_upTrainPlanList"></div>	
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

<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/trainplan/upTrainPlan.js" charset="gbk"></script>	
</body>
</html>
