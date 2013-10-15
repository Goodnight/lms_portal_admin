<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=gbk" />
  <meta http-equiv="content-language" content="gbk" />
  <title>员工培训档案</title>
  <link href="${basepath }/css/jquery-ui-1.8.18.custom.css" rel="stylesheet" type="text/css" />
  <jsp:include page="/WEB-INF/page/include/css.jsp" /></head>
</head>
<body class="bg">
<div class="container">
	<!-- 导入头部文件 -->
	<jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="content">
      <div class="listpagenav">
        <div class="breadCrumbHolder pf">
          <div class="breadCrumb reHeight" id="breadCrumb3">
            <div class="z">
              <ul>
                <li class="first"><a href="${basepath }/index.html">首页</a></li>
	                    <li>基础数据</li>
	                    <li><a href="${basepath }/user/list.html">员工信息</a></li>
	                    <li class="last">
	                    	员工档案 - ${u.name }
	                    </li>
              </ul>
            </div>
            <div class="y"></div>
          </div>
        </div>
      </div>
      <div style="margin: 0 12px;">
        <div class="searchblock pt15 reHeight">
          <ul class="dpnav-arch m10">
            <li class="now"><a href="${basepath}/user/documetForAll.html?op=cours&uid=${uid}">在线课程</a></li>
            <li><a href="${basepath}/user/documetForAll.html?op=class&uid=${uid}">培训班</a></li>
            <li><a href="${basepath}/user/documetForAll.html?op=video&uid=${uid}">同步课堂</a></li>
            <!--  <li><a href="javascipt:;">考试</a></li>
            <li><a href="javascipt:;">岗位认证</a></li> -->
            <li><a href="${basepath}/user/documetForAll.html?op=estimate&uid=${uid}">调查评估</a></li>
          </ul>
        </div>
      </div>
      <!-- /dpnav -->

      <!-- 在线课程 ------------------------------------------------------------ -->
      <div class="train-search">
        <!-- 搜索 -->
        <table border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td class="taR">学习时间：</td>
            <td class="taL" colspan="3">
              <input name="startDate" type="text"  id="search_start_date">
			  <em class="mr10 ml10">到</em>
              <input name="endDate" type="text" id="search_end_date"></td>
            <td class="taR">课程类型：</td>
            <td class="taL">
              <select name="coursewareType" class="select" id="coursewareType">
                       	    <option value="">全部</option>
                            <option value="1">自选</option>
                            <option value="2">培训班</option>
                            <option value="3">岗位</option>
               </select>
            </td>
            <td>
              <input name="" type="button" class="searchbutton m10" onclick="selectForCoursByYear(1)" value="搜索" hidefocus="true" />
            </td>
          </tr>
        </table>
        
      </div>
      <div name="list_documetForCourse" id="list_documetForCourse"></div>
      <!-- /在线课程 --> 
      
      <div align="right" class="mr3 mt3"><input  type="button" class="back resourceDetailClose" value="关闭" /></div>
      </div>
      <input type="hidden" value="${uid}" id="uid" name="uid"/>
      
       
  </div>
  <jsp:include page="/WEB-INF/page/include/script.jsp" />
  <script type="text/javascript" src="${basepath}/js/demand/documentForCours.js"></script>
  <script type="text/javascript">

    $('.trainType').on('click', 'li', function () {

      $(this).addClass('active').siblings().removeClass('active');
  
    })
;
  </script>
</body>
</html>
