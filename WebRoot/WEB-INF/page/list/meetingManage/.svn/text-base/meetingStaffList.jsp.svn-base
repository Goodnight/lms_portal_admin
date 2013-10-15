<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
      <tr>
          <th width="30"><input name="staffIndex" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
          <th class="sorting">员工编号</th>
          <th class="sorting">员工姓名</th>
          <th class="sorting">所属部门</th>
      </tr>
	</thead>
	<tbody>
      <c:forEach items="${meetingStaffList.data }" var="mt" varStatus="mts">
      <tr class="gradeA <c:out value="${mts.index%2==0?'even':'odd' }"/>">
      	<td><input name="staffIndex" type="checkbox" value="${mt.maId}" class="checkbox cls_chooseitem"}"/></td>	
      	<td>${mt.user.sn}</td>
      	<td><a href="#">${mt.user.name}</a></td>
      	<td>${mt.user.org.name}</td>
      </tr>
      </c:forEach>
   </tbody>   
</table> 
<input id="leng" name="leng" type="hidden" value="${maxA}"/>
<script type="text/javascript">
var allowNum = $("#maxAtt").val() - "${maxA}";
$(".objId").attr("value",allowNum);
</script>
<!-- 分页对象 -->
<c:set var="pager" value="${meetingStaffList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>  
