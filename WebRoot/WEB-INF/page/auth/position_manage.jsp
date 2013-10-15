<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>基准岗位管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
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
                                      <li><a href="#">基础数据</a></li>
                                      <li class="last">基准岗位管理</li>
                                  </ul>
                              </div>
                              <div class="y"></div>
                          </div>
                      </div>
                </div>
       			<div class="reHeight">
	            	<div class="newmain">
	                	<div class="newmainco">
	                    	<div id="detail_position">&nbsp;</div>
	                    </div>
	                </div>
	                <div class="newlefttree">
	                	<div class="pftree">
	                        <ul class="listnav reHeight">
                                <li class="now">岗位树</li>
                                <li>层级树</li>
                            </ul>
                            <div>
                            	<div><div id="standard_pos_jstree"></div></div>
                            	<div class="hidden"><div id="pos_level_tree"></div></div>
                            </div>
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
        	<c:set var="menu_sn" value="3" scope="request"></c:set>
    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
        </div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/auth/position.js" charset="gbk"></script>
<script type="text/javascript">
   
    function export_blocPosition(){
		
		 loadingStart();
		 var poId = $("#objId").val();
		 var url = basepath + "/position4org/exportPositionList.html?poId="+poId;
		 post(encodeURI(url));
		 loadingEnd();
	}
	
	function export_ethnicGroup(poId){
		
		 loadingStart();
		 var countUrl = basepath + "/position/exportEthnicGroupCount.html?poId="+poId;
		 var listUrl = basepath + "/position/exportEthnicGroupList.html?poId="+poId;
		 postCount(countUrl,listUrl);
	}

</script>
</body>

</html>








