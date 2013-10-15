<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>行为层评估列表</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl scroll"></div>
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
                                      <li class="first"><a href="${basepath }/index.html">首页</a></li>
                                      <li><a href="#">培训评估</a></li>
                                      <li class="last">行为层评估</li>
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
	                                    <td class="taR">评估主题</td>
	                                    <td class="taL" colspan="3">
	                                    	<input id="search_depid" type="hidden" value=""/>
	                                    	<input id="search_topic" type="text" class="input"/>
	                                    </td>
	                                  </tr>
	                                  <tr>
	                                    <td class="taR">起始时间</td>
	                                    <td class="taL" colspan="3">
	                                    	<input id="search_start_date" name="" type="text" class="timetext"/>
	                                    	<em>到</em>
	                                    	<input id="search_end_date" name="" type="text" class="timetext"/>
	                                    </td>
	                                  </tr>
	                                </table>
								<div align="right" class="mt10"><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" /></div>
	                        </div>
	                        <div class="classlist">
	                            <!-- 行为层评估列表 -->
	                            <div class="dataTables_wrapper">
	                            	<h3 class="reHeight">
		                            	<div class="z">行为层评估</div>
		                                <div class="y">
		                                	<a href="${basepath }/behavior/new.html?type=2" class="functionbutton">新建</a>
		                                	<input id="btn_notice" type="button" class="functionbutton mailreminder" value="邮件提醒" />
		                                	<input type="button" class="functionbutton leadin" value="导入评估结果" />
		                                	<input id="btn_delete" type="button" class="functionbutton " value="删除" />
		                                </div>
		                            </h3>
		                            <div id="list" style="margin-top:3px"></div>
						 		</div>
	                        </div>
	                    </div>
	                </div>
	                <div class="newlefttree">
	                	<div class="pftree">
		                	<h3>机构部门</h3>
	                        <div class="m10">
	                        	是否包含下级
	                        	<label class="ml12"><input name="1" type="radio" value="1" class="vm" checked="checked"/> 是</label>
	                        	<label class="ml12"><input name="1" type="radio" value="0" class="vm"/> 否</label>
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
        	<c:set var="menu_sn" value="8" scope="request"></c:set>
    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/estimate/behavior.js" charset="gbk"></script>
</body>

</html>






