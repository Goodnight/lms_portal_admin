<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="20">
            	<input name="" type="checkbox" value="cls_choose_face" class="checkbox cls_chooseall_face" />
            </th>
            <th width="100">课程编号</th>
            <th width="300">课程名称</th>
            <th width="100">授课讲师</th>
            <th width="50">学时</th>
            <th width="150">开始时间</th>
            <th width="150">结束时间</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${list.data }" var="res" varStatus="st">
   			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
     			<td><input name="face" type="checkbox" value="${res.trId }" class="checkbox cls_choose_face" /></td>
              	<td>${res.resFc.sn }</td>
              	<td><a href="${basepath }/facecourse/update.html?cid=${res.resFc.cId}&tcid=${res.tClass.tcId}">${res.resFc.name }</a></td>
              	<td>${res.resFc.teacherType==1?res.resFc.teacherName:res.resFc.speaker.name }</td>
              	<td><fmt:formatNumber value="${res.resFc.classHour / 60}" pattern="##.##" minFractionDigits="2"></fmt:formatNumber></td>
              	<td>${res.resFc.startTime }</td>
              	<td>${res.resFc.endTime }</td>
     		</tr>
    	</c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>