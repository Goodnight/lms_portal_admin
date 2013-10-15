<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>员工学习信息统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">课程信息</h2>
            <div class="courseupload pt15">
                <div>
                    <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                                <table class="datatable" width="100%">
                                	<thead>
                                      	<tr>
                                      	  <th>员工编号</th>
                                      	  <th>员工姓名</th>
                                      	  <th>所属部门</th>
                                      	  <th>课程编号</th>
                                      	  <th>课程名称</th>
                                      	  <th>开始学习时间</th>
                                      	  <th>上次学习时间</th>
                                      	  <th>学习次数</th>
                                          <th>学习时长</th>
                                          <th>学习进度</th>
                               	      </tr>
                                      </thead>
                                      <tbody>
                                      	<tr class="gradeA odd">
                                          	<td>e00230200</td>
                                            <td>张三</td>
                                            <td>技术部</td>
                                            <td>CW-A-00-000-SN0580</td>
                                            <td>创业管理培训系列之识别机会和市场</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>43</td>
                                            <td>35</td>
                                            <td>80%</td>
                                         </tr>
                                         <tr class="gradeA even">
                                         	<td>e00230201</td>
                                            <td>顾四</td>
                                            <td>技术部</td>
                                            <td>CW-A-00-000-SN0580</td>
                                            <td>创业管理培训系列之识别机会和市场</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>43</td>
                                            <td>35</td>
                                            <td>80%</td>
                                          </tr>
                                          <tr class="gradeA odd">
                                          	<td>e00230200</td>
                                            <td>张三</td>
                                            <td>技术部</td>
                                            <td>CW-A-00-000-SN0580</td>
                                            <td>创业管理培训系列之识别机会和市场</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>2012.2.15 9:20</td>
                                            <td>43</td>
                                            <td>35</td>
                                            <td>80%</td>
                                         </tr>
                                         </tbody>
                                         
                                    </table>
                                	<div class="reHeight" style="padding:0 0 20px 0;">
                                    <div class="dataTables_length z">
                                    	<div class="z pt10">每页</div>
                                        <div class="selector z" id="uniform-undefined"><span style="-moz-user-select: none;">10</span><select size="1" style="opacity: 0;"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></div>
                                        <div class="z pt10">条</div>
                                        <div class="z m10">|</div>
                                        <div class="z pt10">共58条</div>
                                        <div class="z m10">|</div>
                                        <div class="z pt10">当前1-20条</div>
                                    </div>
                                    <div class="dataTables_paginate paging_full_numbers"><span class="first paginate_button paginate_button_disabled">第一页</span><span class="previous paginate_button paginate_button_disabled">前一页</span><span><span class="paginate_active">1</span><span class="paginate_button">2</span><span class="paginate_button">3</span><span class="paginate_button">4</span><span class="paginate_button">5</span></span><span class="next paginate_button">后一页</span><span class="last paginate_button">最后页</span></div>
                                </div>
                            </div>

                    
                </div>
				
            </div>
        </div>
		    
	</body>
</html>
