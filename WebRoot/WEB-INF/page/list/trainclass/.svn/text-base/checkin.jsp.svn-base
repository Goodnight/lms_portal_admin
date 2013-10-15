<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
       <thead>
           <tr>
               <th>员工编号</th>
               <th>员工姓名</th>
               <th>性别</th>
               <th>参与方式</th>
               <th>手机号码</th>
               <th>邮箱</th>
               <th>报到情况</th>
               <th>考勤情况</th>
               <th>改进计划</th>
           </tr>
       </thead>
       <tbody>
           <c:forEach items="${list.data }" var="stu" varStatus="st">
           		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	                <td>${stu.student.sn }</td>
	            	<td>${stu.student.name }</td>
	                <td>
	                	<c:choose>
	                		<c:when test="${stu.student.gender==0 }">女</c:when>
	                		<c:otherwise>男</c:otherwise>
	                	</c:choose>
	                </td>
	                <td>
	                	<c:choose>
	                		<c:when test="${stu.applyWay==0 }">个人报名</c:when>
	                		<c:when test="${stu.applyWay==1 }">直接指定</c:when>
	                		<c:when test="${stu.applyWay==2 }">部门指派</c:when>
	                		<c:when test="${stu.applyWay==3 }">部门指派名额</c:when>
	                	</c:choose>
	                </td>
	                <td>${stu.student.mobile }</td>
	                <td>${stu.student.email }</td>
	                <td>
	                	<c:choose>
	                		<c:when test="${stu.status eq '2' }">
			                	<a href="javascript:;" studentid="${stu.tcsId}" class="cls_showEnrolInfo">已报到</a>
	                		</c:when>
	                		<c:when test="${stu.status eq '3' }">
	                			已报到
	                		</c:when>
	                		<c:otherwise>
	                			未报到
	                		</c:otherwise>
	                	</c:choose>
	                </td>
	                <td>${stu.to_ground }/${stu.all_check_work }</td>
	                <td>
	                	<c:choose>
	                		<c:when test="${stu.hasImprove }">
	                			<a id="${stu.student.uid }" tcId="${tcId }" href="javascript:;" class="checkImprovePlan">有</a>
	                		</c:when>
	                		<c:otherwise>
	                			无
	                		</c:otherwise>
	                	</c:choose>
	                </td>
            	</tr>
          </c:forEach>
       </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>

<script type="text/javascript">
$(".checkImprovePlan").click(function(){
    var url = basepath+"/trainclass/checkImprovePlan.html?uid="+$(this).attr("id")+"&tcid="+$(this).attr("tcId");
    $("#dialog_content").load(url);
    $("#dialog").show();

});

$(".cls_showEnrolInfo").click(function(){
	var url = basepath+"/trainclass/studentEnrolInfo.html?studentid="+$(this).attr("studentid");
    $("#dialog_content").load(url);
	$("#dialog").show();
});
</script>
