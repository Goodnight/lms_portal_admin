<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>${pageTitle }</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow">
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
                                    <li><a href="#">培训评估</a></li>
                                    <c:choose>
                                    	<c:when test="${surveyType==2 }">
                                    		<li><a href="${basepath }/behavior/index.html">${pageTitle }</a></li>
                                    	</c:when>
                                    	<c:otherwise>
		                                    <li><a href="${basepath }/survey/index.html?type=${surveyType}">${pageTitle }</a></li>
                                    	</c:otherwise>
                                    </c:choose>
                                    <li class="last">结果明细</li>
                                </ul>
                            </div>
                            <div class="y"></div>
                        </div>
                    </div>
                </div>
                <div class="searchblock">
                      <ul class="dpnav2 m10 reHeight">
                          <li class="now">查询</li>
                      </ul>
                      <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td class="taR">员工编号</td>
                          <td class="taL"><input id="objectSn" name="objectSn" type="text" class="input"/></td>
                          <td class="taR">员工姓名</td>
                          <td class="taL"><input id="objectName" name="objectName" type="text" class="input"/></td>
                          <td><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" style="height:30px;"/></td>
                        </tr>
                      </table>
              	</div>
              	
	            <div class="dataTables_wrapper mt10" style="padding-bottom:0">
	            	<h3 class="reHeight">
	               		<div class="z" style="font-size:14px">结果明细列表</div>
	               	</h3>
	               	<div id="detail_list"></div>
	            </div>
	              
		                
            </div>
        </div>
        
    	<div class="newleft">
    		<c:set var="menu_sn" value="8" scope="request"></c:set>
        	<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
        </div>
    </div> 
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
	var sid = "${su.sId}";
</script>
<script type="text/javascript" src="${basepath }/js/estimate/result.js" charset="gbk"></script>
</body>

</html>






