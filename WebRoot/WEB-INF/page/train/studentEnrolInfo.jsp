<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="scroll">
      <div class="ngreyborder changeblue2">
      	<h2 class="png_bg">${info.student.student.name }报道信息</h2>
          <div class="basic_information mt2">
          	<table border="0" cellspacing="10" cellpadding="10">
	          <tr>
	            <td width="20%">员工姓名</td>
	            <td width="30%" class="answer">${info.student.student.name }</td>
	            <td width="20%">员工编号</td>
	            <td width="30%" class="answer">${info.student.student.sn }</td>
	          </tr>
	          <tr>
	          	<td>所属部门</td>
	            <td class="answer">${info.student.student.org.name }</td>
	            <td>机构变动</td>
	            <td class="answer">${info.depChange }</td>
	          </tr>
	          <tr>
	          	<td>是否需要接站</td>
	            <td class="answer" colspan="3">
	            	<c:choose>
	            		<c:when test="${info.pickup==0 }">否</c:when>
	            		<c:otherwise>是</c:otherwise>
	            	</c:choose>
	            </td>
	          </tr>	
			   <tr>
	          	<td>出发地点</td>
	            <td class="answer">${info.leaveAddress }</td>
	            <td>出发时间</td>
	            <td class="answer">${info.leaveDt }</td>
	          </tr>
			   <tr>
	          	<td>抵达地点</td>
	            <td class="answer">${info.arrivalAddress }</td>
	            <td>出发时间</td>
	            <td class="answer">${info.arrivalDt }</td>
	          </tr>
	          <tr>
	          	<td>航班号(车次)</td>
	            <td class="answer">${info.no }</td>
	            <td>机场(火车站)</td>
	            <td class="answer">${info.station }</td>
	          </tr>
	        </table>
          </div>
          <div class="taR m10"><a class="step mr10 windowbutton" href="javascript:;">关闭</a></div>
    </div>
</div>
<script type="text/javascript">
<!--
	$(function(){
		$(".cls_close").click(function(){
			$("#dialog").hide();
		});
	});
//-->
</script>
