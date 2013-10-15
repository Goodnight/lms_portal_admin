<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>讨论区管理</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div id="dialog" class="hidden">
	<div class="blackall">&nbsp;</div>
	<div class="newwindow" id="choosepersonco">
		<div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	    <div id="dialog_content" class="cl"></div>
	</div>
</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
  <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
             <div class="z">
             	<ul>
                     <li class="first">
                         <a href="${basepath }/index.html">首页</a>
                     </li>
                     <li>
                         <a href="${basepath }/trainclass/index.html">培训班管理</a>
                     </li>
                     <li>${tc.name }</li>
                     <li class="last">
                         讨论区管理
                     </li>
             	</ul>
             </div>
             <div class="y"></div>
      </div> 
    </div>
  </div>
  <div class="content">
        <ul class="window_nav">
            <li class="basic"><a href="information.html?tcid=${tcid }" class="green png_bg">基本信息</a></li>
            <li class="course"><a href="course.html?tcid=${tcid }" class="green png_bg">课程设置</a></li>
            <li class="person"><a href="staffing.html?tcid=${tcid }" class="green png_bg">人员设置</a></li>
            <li class="sameclass"><a href="videoclass.html?tcid=${tcid }" class="green png_bg">同步课堂</a></li>
            <li class="examadmin"><a href="examination.html?tcid=${tcid }" class="green png_bg">考试管理</a></li>
            <li class="evaluate"><a href="estimate.html?tcid=${tcid }" class="green png_bg">评估设置</a></li>
            <c:choose>
            	<c:when test="${tc.way.name eq '在线' }">
            		<li class="faceadmin"><a href="#" class="png_bg">讨论区管理</a></li>
            		<li class="discuss"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
            	</c:when>
            	<c:otherwise>
            		<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }" class="green png_bg">面授管理</a></li>
            		<li class="discuss"><a href="#" class="png_bg">讨论区管理</a></li>
            		<li class="trainsta"><a href="statistics.html?tcid=${tcid }" class="grey png_bg">培训统计</a></li>
            	</c:otherwise>
            </c:choose>
            <!-- 
            <li class="certificate"><a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
             -->
        </ul>
    	<div class="window sclassroom p0">
            <div class="basic_information">
            	<!-- 建设中提示 -->
		        <div style="text-align:center;font-size:20px" class="hidden">
		        	功能完善中，请等待...
		        </div>
            	<div class="">
           			<h2>讨论区设置</h2>
	       			<form id="forum_form" action="${basepath }/trainclass/forum/setting.html" method="post" target="_self">
		            	<c:choose>
		            		<c:when test="${tc.forum==null }">
			            			<table border="0" cellspacing="15" cellpadding="15">
					                    	<tr>
					                        	<td class="taR"><em>*</em>是否配置讨论区</td>
					                        	<td>
					                        		<em class="option" id="setdiscuz"><input name="isAdd" type="radio" value="1" /></em> 是　　
					                        		<em class="option choosed" id="nodiscuz"><input name="isAdd" type="radio" value="0" checked="checked"/></em> 否
					                        	</td>
					                        </tr>
					                    	<tr class="hidden">
					                        	<td class="taR">配置方式</td>
					                        	<td >
					                        		<em class="option groupadd" id="btn_choose"><input name="addWay" type="radio" value="choose" /></em> 选择已有讨论区　　
					                        		<em class="option choosed" id="btn_new"><input name="addWay" type="radio" value="new" checked="checked"/></em> 创建新讨论区
					                        	</td>
					                        </tr>
					                        <tr class="hidden">
					                        	<td class="taR">讨论区名称</td>
					                        	<td><input id="forum_name" name="name" type="text" class="input vm" value=""/></td>
					                        </tr>
					                        <tr class="hidden">
					                        	<td class="taR">讨论区状态</td>
					                        	<td>
					                        		<em class="option" ><input name="status" type="radio" value="0" /></em> 封闭　　
					                        		<em class="option choosed"><input name="status" type="radio" value="1" checked="checked"/></em> 开放
					                        	</td>
					                        </tr>
					                </table>
					                <input id="forum_id" type="hidden" name="tcfId" value="" />
					                <input type="hidden" name="tcid" value="${tcid }" />
		            		</c:when>
		            		<c:otherwise>
			            			<table border="0" cellspacing="15" cellpadding="15">
			            				<tr>
				                        	<td class="taR">讨论区名称</td>
				                        	<td><input name="name" type="text" class="input vm" value="${tc.forum.name }" readonly="readonly"/></td>
				                        </tr>
				                        <tr>
				                        	<td class="taR">讨论区状态</td>
				                        	<td>
				                        		<c:choose>
				                        			<c:when test="${tc.forum.status==0 }">封闭</c:when>
				                        			<c:otherwise>开放</c:otherwise>
				                        		</c:choose>
				                        	</td>
				                        </tr>
			            			</table>
			            			<input type="hidden" name="isAdd" value="0" />
			            			<input type="hidden" name="addWay" value="new" />
			            			<input type="hidden" name="tcfId" value="${tc.forum.tcfId }" />
			            			<input type="hidden" name="tcid" value="${tcid }" />
		            		</c:otherwise>
		            	</c:choose>
	            	</form>
	            </div>
            </div>
        </div>
        <div class="windowlast">
        	<p>
        		<c:choose>
	            	<c:when test="${tc.way.name eq '在线' }">
	            		<a class="step vm"  href="estimate.html?tcid=${tcid}">上一步</a>
	            	</c:when>
		        	<c:otherwise>
		        		<a class="step vm"  href="facecourse.html?tcid=${tcid}">上一步</a>
		        	</c:otherwise>
		        </c:choose>
	        	<a id="btn_next" class="step ml30 vm longstep"   href="javascript:;">保存并下一步</a>
	        	<a href="#" class="back ml30 vm allclose" >关闭</a>
        	</p>
    	</div>
    </div>
    
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
	$(function(){
		$("#btn_choose").click(function(){
			var url = basepath + "/trainclass/dialog/choosefourm.html?r="+Math.random();
			$("#dialog_content").load(url,function(){});
			$("#dialog").show();
			$('.newwindow').show();
			$("#forum_name").attr("readonly","readonly");
			$("input[name=status]").attr("disabled","disabled");
			
		});
		
		$("#btn_new").click(function(){
			$("#forum_name").removeAttr("readonly");
			$("input[name=status]").removeAttr("disabled");
			$("#forum_id").val("");
		});
		
		$("#btn_next").click(function(){
			$("#forum_form").submit();
		});
	});
</script>
</body>
</html>
