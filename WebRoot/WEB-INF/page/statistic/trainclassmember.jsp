<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta http-equiv="content-language" content="utf-8" />
		<title>培训班详情统计</title>
		<jsp:include page="/WEB-INF/page/include/css.jsp" />
	</head>
	<body class="bg">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">人员信息</h2>
            <div class="courseupload pt15">
                <div>
                    <div class="dataTables_wrapper">
								<h3 class="reHeight">
                                <div class="y"><a href="javascript:;" class="functionbutton">导出</a></div>
                            	</h3>
                                <table class="datatable" width="100%">
                                	<thead>
                                    	<tr>
                                              <th>员工编号</th>
                                              <th>员工姓名</th>
                                              <th>所属机构</th>
                                              <th>岗位</th>
                                              <th>职位</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                      	<tr class="gradeA odd">
                                          	<td>FJ-AA-2011-02-23-001</td>
                                            <td>张三</td>
                                            <td>中国电信福建分公司</td>
                                            <td>网管工程师</td>
                                            <td>业务经理</td>
                                         </tr>
                                         <tr class="gradeA even">
                                           <td>FJ-AA-2011-02-23-001</td>
                                            <td>李四</td>
                                            <td>中国电信福建分公司</td>
                                            <td>网管工程师</td>
                                            <td>业务经理</td>
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
