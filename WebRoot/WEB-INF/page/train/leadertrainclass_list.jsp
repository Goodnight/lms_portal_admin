<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>负责人培训班</title>
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
		                                      	<a href="${basepath }/trainclass/leadertrainclass/list.html">负责人培训班管理</a>
		                                      </li>
		                                      <li class="last">
			                                       负责人培训班列表
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
                    	<div class="searchblock">
                                <ul class="dpnav2 m10">
                                    <li class="now">查询</li>
                                </ul>
                                <table border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td class="taR">培训班名称</td>
                                    <td class="taL" colspan="3">
                                    	<input id="search_name" type="text" class="input"/>
                                    	<input id="search_orgid" type="hidden" value="" />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="taR">开始时间</td>
                                    <td class="taL"><input id="search_start_date" name="" type="text" class="timetext"/></td>
                                    <td class="taR">结束时间</td>
                                    <td class="taL"><input id="search_end_date" name="" type="text" class="timetext"/></td>
                                  </tr>
                                </table>
                            <div align="right" class="mt10"><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" /></div>
                        </div>
                           <div class="dataTables_wrapper">
                            <!-- 负责人培训班列表 -->
                            <div id="list_leadertrainclass"></div>
                        </div>
		            </div>
		        </div>
		        <div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="6" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>
		    </div>
		    
		</div>
		<jsp:include page="/WEB-INF/page/include/script.jsp" />
		<script type="text/javascript" src="${basepath }/js/train/leadertrainclass.js" charset="gbk"></script>
	</body>

</html>
