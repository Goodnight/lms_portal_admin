<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content=utf-8 />
<title>培训统计</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
<div class="blackall hidden">&nbsp;</div>
<div class="treewindow" >
	<div id="choose_org_jstree" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
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
                         培训统计
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
            		<li class="faceadmin"><a href="bbs.html?tcid=${tcid }" class="green png_bg">讨论区管理</a></li>
            		<li class="discuss"><a href="#" class="png_bg">培训统计</a></li>
            	</c:when>
            	<c:otherwise>
            		<li class="faceadmin"><a href="facecourse.html?tcid=${tcid }" class="green png_bg">面授管理</a></li>
            		<li class="discuss"><a href="bbs.html?tcid=${tcid }" class="green png_bg">讨论区管理</a></li>
            		<li class="trainsta"><a href="#" class="png_bg">培训统计</a></li>
            	</c:otherwise>
            </c:choose>
            <!-- 
            <c:choose>
   				<c:when test="${tc.isGrantCertificate==1 }">
   					<li class="certificate"><a href="certificate.html?tcid=${tcid }" class="grey png_bg">证书发布</a></li>
   				</c:when>
   				<c:otherwise>
   					<li class="certificate"><a href="#" class="grey png_bg">证书发布</a></li>
   				</c:otherwise>
   			</c:choose>
   			 -->
        </ul>
    	<div class="window sclassroom">
   			<!-- 建设中提示 -->
	        <div style="text-align:center;font-size:20px" class="hidden">
	        	功能完善中，请等待...
	        </div>
    		<div class="">
	   	  		<ul class="dpnav reHeight">
	                <li class="now">员工学习情况</li>
	                <li>课程学习情况</li>
	            </ul>
            	<div></div>
	            <div>
	            	<div>
		                <div class="searchblock">
		                    <table border="0" cellspacing="0" cellpadding="0" class="ml30">
		                     <tr>
		                        <td colspan="6" class="taL" style="font-size:14px">查询</td>
		                      </tr>	
		                      <tr>
		                        <td class="taR">员工编号</td>
		                        <td class="taL"><input id="search_sn" type="text" class="input"/></td>
		                        <td class="taR">员工姓名</td>
		                        <td class="taL"><input id="search_name" type="text" class="input"/></td>
		                        <td class="taR">所属部门</td>
		                        <td class="taL">
		                        	<input id="search_depname" type="text" class="input " value="" readonly="readonly"/>
		                        	<input id="search_depid" type="hidden" value=""/>
		                        	<input id="btn_choose_org" type="button" class="newshowtree" value="选择"/>
		                        	<input id="btn_clear_org" type="button" value="清除"/>
		                        </td>
		                      </tr>
		                    </table>
		                    <div class="taR"><input id="btn_search" type="button" class="searchbutton m10" value="搜索" hidefocus="true" /></div>       	
		                </div>
		                <div class="mr10 ml12 mt20 taR">
		                    <a href="javascript:;" class="functionbutton" onclick="exportUserList('${tcid }')">导出</a>
		                </div>
		                <div>
		                	<div id="list_student" class="dataTables_wrapper" style="margin-top:3px"></div>
		                </div>
	                </div>
	                <div class="hidden">
	                	<div class="mr10 ml12 mt20 taR">
	                        <a href="javascript:;" class="functionbutton" onclick="exportCourseList('${tcid }')">导出</a>
	                    </div>
	                    <div>
	            			<div id="list_course" class="dataTables_wrapper" style="margin-top:3px"></div>
	            		</div>
	                </div>
	            </div>
	           </div>
        </div>
        <div class="windowlast">
        	<p>
        		<a class="step vm"  href="bbs.html?tcid=${tcid}">上一步</a>
        		<!-- 
        		<c:choose>
	   				<c:when test="${tc.isGrantCertificate==1 }">
	   					<a class="step ml30 vm"   href="certificate.html?tcid=${tcid}">下一步</a>
	   				</c:when>
	   				<c:otherwise>
	   					<a class="step ml30 vm cls_close_window" href="javascript:;">完成</a>
	   				</c:otherwise>
   				</c:choose>
   				 -->
   				<a class="step ml30 vm" href="javascript:window.close();">完成</a>
	        	<input type="button" class="back resourceDetailClose" value="关闭" />
        	</p>
    	</div>
    </div>
</div>
<div class="hidden" id="dialoges">
			<!-- 半透明背景 -->
			<div class="newwindow" id="choosepersonco">
				<!-- 关闭按钮 -->
				<div class="taR">
					<a href="javascript:;"><img class="closed"
							src="${basepath }/images/close.png" width="40" height="40" /> </a>
				</div>
				<!-- 对话框内容 -->
				<div id="dialog_content" class="cl"></div>
				 <div align="right" class="mr3 mt3"><input name="" type="button" class="step m10 vm windowbutton" value="导出"/><a href="javascript:;" class="back windowbutton vm">关闭</a></div>
			</div>
		</div>
		<input value="${tcid}" type="hidden" id="cisa" name="cisa"/>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<jsp:include page="/WEB-INF/page/include/download.jsp"></jsp:include>
<script type="text/javascript" src="${basepath}/js/demand/newblock.js" charset="gbk"></script>
<script type="text/javascript">
	$(function(){
		
		
		studentPage(1);
		coursePage(1);
		
		$("#btn_choose_org").click(function(){
			initTree("#choose_org_jstree",[""],[""],"org",function(type,id,name){
				$("#search_depid").val(id);
				$("#search_depname").val(name);
			});
		});
		
		$("#btn_search").click(function(){
			studentPage(1);
		});
		
		$("#btn_clear_org").click(function(){
			$("#search_depid").val("");
			$("#search_depname").val("");
		});
		
	});
	
	
	function studentPage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var sn = $("#search_sn").val();
		var name = $("#search_name").val();
		var dep = $("#search_depid").val();
		var max = $("#list_student .page_max").val()?$("#list_student .page_max").val():10;
		var query = "";
		if(sn!=""){
			query+="&sn="+sn;
		}
		if(name!=""){
			query+="&name="+name;
		}
		if(dep!=""){
			query+="&depid="+dep;
		}
		var url = basepath+"/list/statistic/trainclass/student.html?pagefn=studentPage&page="+i+"&max="+max+"&tcid=${tcid}&r="+Math.random();
		$("#list_student").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//选择每页记录数量
			$("#list_student .page_max").change(function(){
				studentPage(1);
			});
		});
	}
	
	function coursePage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_course .page_max").val()?$("#list_course .page_max").val():10;
		var url = basepath+"/list/statistic/trainclass/course.html?pagefn=coursePage&page="+i+"&max="+max+"&tcid=${tcid}&r="+Math.random();
		$("#list_course").load(encodeURI(url),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//选择每页记录数量
			$("#list_course .page_max").change(function(){
				coursePage(1);
			});
		});
	}
	
	function exportCourseList(trainClassId){
		
		loadingStart();
		var countUrl = basepath + "/learnstats/exportCoursewareCount.html?tcid="+trainClassId;
		var listUrl = basepath + "/learnstats/exportCoursewareList.html?tcid="+trainClassId;
		postCount(encodeURI(countUrl),encodeURI(listUrl));
	}
	
	function exportUserList(trainClassId){
		
		loadingStart();
		
		var sn = $("#search_sn").val();
		var name = $("#search_name").val();
		var dep = $("#search_depid").val();
		var query = "&tcid="+trainClassId;
		if(sn!=""){
			query+="&sn="+sn;
		}
		if(name!=""){
			query+="&name="+name;
		}
		if(dep!=""){
			query+="&depid="+dep;
		}
		
		var countUrl = basepath + "/learnstats/exportCount.html?r="+Math.random();
		var listUrl = basepath + "/learnstats/exportList.html?r="+Math.random();
		postCount(encodeURI(countUrl+query),encodeURI(listUrl+query));
	}

</script>
</body>

</html>






