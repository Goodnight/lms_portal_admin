<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="UTF-8" xml:lang="UTF-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta http-equiv="content-language" content="UTF-8" />
<title>培训计划中的培训班</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>

<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
    <div id="new_org_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>

<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		<div id="dialog_content" class="cl scroll"></div>
	</div>
</div>
<div class="container">
  <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="breadCrumbHolder breadCrumbPage">
    <div class="headerco">
        <div class="breadCrumb reHeight noborder" id="breadCrumb3">
            <div class="z">
                <ul>
                    <li class="first">
                        <a href="${basepath }/index.html">首页</a>
                    </li>
                    <li>
                        <a href="${basepath }/trainplan/trainPlanList.html">培训计划</a>
                    </li>
                    <li class="last">${p.name }</li>
                </ul>
            </div>
            <div class="y"></div>
        </div> 
    </div>
  </div> 
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">培训计划中的培训班</h2>
        	<!--<c:if test="${ban == null || ban == '' || ban != '1' }">--><!-- 20130227YHL says 无论计划是否发布均有搜索 -->
            <ul class="png_bg mt40">
             	<li class="now">查询</li>
            </ul>
            <div class="choosedcourse basic_list" style="background:transparent;border:0;">	
                 	<div class="mt20">
                    	<div>
                    		培训班名称： <input name="name" id="nameid" value="请输入培训班名称" type="text" class="input" style="border:1px solid;"/>
                    		<span class="ml13">实施状态：
                            <select name="status" id="statusid" class="select">
                                <option value="">全部</option>
                                <option value="4">计划中</option>
                                <option value="1">实施</option>
                                <option value="3">完成</option>
                            </select>
                            </span>
                    	</div>
                        <div class="mt10">
                            <div><div class="z">组织部门：</div>
                            <div id="class_dep_name" style="width:300px; border:1px solid; height:20px; float:left; margin-left:14px;">${trainClass.dep.namepath }${trainClass.dep.name }</div>
                            </div> 
                            <input id="class_dep_id" name="class_dep" type="hidden" value="${trainClass.dep.orgId }" />
                            <span id="class_dep" class="vm newshowtree choosedep tochoose z">选择部门</span>
                            <span id="clean" class="vm tochoose z">重置</span>

                        	<span class="ml30 z mt10">包含子部门：</span>
                        	<span clas="z mt10">
                        	<select name="dep_contain" id="dep_containid" class="select" style="margin-top:10px">
                        		<option value="1">包含</option>
                        		<option value="0">不包含</option>
                        	</select>
                        	</span>
                        </div>
                   	</div>
                    <div align="right" style="clear:both;">
                    	<input id="searchButton" type="button" class="searchbutton m10" value="搜索"/>
                    </div>
            </div>
            <!--</c:if>-->
            <div class="mt20">   
                <!-- 培训计划中的培训班列表 -->
                <input name="tpid" id="tpid" type="hidden" value="${p.tpId}"/>
                <input id="ban" type="hidden" value="${ban }" />
                <div class="dataTables_wrapper">
                    <div class="reHeight">
                      <p class="z" style="font-size:14px;">培训班列表</p>
                      <!--<c:if test="${ban == null || ban == '' || ban != '1' }">-->
                            <!-- 20130227YHL says 无论计划是否发布均可对其中培训班修改-添加-删除 -->
                            <p class="y"><a href="addTrainClass.html?id=${p.tpId}" class="functionbutton">添加</a>
                            <input id="tpc_delete" type="button" class="functionbutton" value="删除"/></p>
                      <!--</c:if>-->
                    </div>
				    <div id="list_trainPlanClass"></div>
                </div>
                <div align="right" class="mr10">
                	<c:choose>
                		<c:when test="${symbol == '1' }">
                			<a href="${basepath }/trainplan/trainPlanList.html" class="back m10 vm">返回</a>
                		</c:when>
                		<c:when test="${symbol == '2' }">
                			<a href="${basepath }/trainplan/checkTrainPlan.html" class="back m10 vm">返回</a>
                		</c:when>
                		<c:when test="${symbol == '3' }">
                			<a href="${basepath }/trainplan/upTrainPlan.html" class="back m10 vm">返回</a>
                		</c:when>
                		<c:otherwise>
                			<a href="${basepath }/trainplan/trainPlanList.html" class="back m10 vm">返回</a>
                		</c:otherwise>
                	</c:choose>
                </div>
            </div>
        </div>
    </div>
</div>

<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript">
	var tpId = "${p.tpId }";
	var tcid = "${trainClass.tcId}";
</script>
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/train/information.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/trainplan/trainplanclass.js" charset="gbk"></script>
</body>
</html>
