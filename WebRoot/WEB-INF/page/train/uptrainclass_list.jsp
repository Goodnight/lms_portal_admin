<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>上级培训班</title>
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
		                                      	<a href="${basepath }/trainclass/uptrainclass/index.html">上级培训班</a>
		                                      </li>
		                                      <li class="last">
			                                       上级培训班列表
			                                   </li>
		                                  </ul>
		                              </div>
		                              <div class="y"></div>
		                          </div>
		                      </div>
		                </div>
		       			<div>
							<ul class="dpnav dpnav2 reHeight">
	                            <li>名额指配</li>
	                            <li class="now">上级培训班查询</li>
	                        </ul>
	                        <div></div>
							<div>
		                        <!-- 名额分配 -->
		                       	<div class="hidden">
				                        <div class="searchblock">
					                          <table border="0" cellspacing="0" cellpadding="0">
					                            <tr>
					                              <td class="taR">培训班名称</td>
					                              <td class="taL">
					                              	<input id="search_num_name" type="text" class="input"/>
					                              </td>
					                              <td class="taR">时间</td>
					                              <td class="taL">
					                              	<input id="search_num_start_date" name="input" type="text" class="timetext cls_date"/>
					                              	<em>到</em>
					                              	<input id="search_num_end_date" name="input" type="text" class="timetext cls_date"/>
					                              </td>
					                            </tr>
					                          </table>
					                          <div align="right" class="mt10"><input id="btn_num_search" type="button" class="searchbutton m10" value="搜索" hidefocus="true" /></div>
					                      </div>
				                        <!-- 部门分配名额 -->
				                        <div class="dataTables_wrapper">
						                     <div id="list_assignednum"></div>
									 	</div>
				                </div>
		                        <!-- 上级培训班 start -->
		                        <div>
		                        	<div class="searchblock">
				                          <table border="0" cellspacing="0" cellpadding="0">
				                            <tr>
				                              <td class="taR">培训班名称</td>
				                              <td class="taL"><input id="search_name" type="text" class="input"/></td>
				                              <td class="taR">时间</td>
				                              <td class="taL">
				                              	<input id="search_start_date" name="input" type="text" class="timetext"/>
				                              	<em>到</em>
				                              	<input id="search_end_date" name="input" type="text" class="timetext"/>
				                              </td>
				                            </tr>
				                          </table>
				                          <div align="right" class="mt10"><input id="btn_search" type="button" class="searchbutton m10" value="搜索" hidefocus="true" /></div>
				                      </div>
			                            <!-- 上级培训班列表 -->
			                            <div class="dataTables_wrapper">
				                            <div id="list_uptrainclass"></div>
									 	</div>
		                        </div>
		                        <!-- 上级培训班 end -->
	                        </div>
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
		<script type="text/javascript" src="${basepath }/js/train/uptrainclass.js" charset="gbk"></script>
	</body>

</html>






