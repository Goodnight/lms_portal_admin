<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table  id="datatable3"  class="table table-striped table-bordered table-hover" width="100%">
<thead>
   	<tr>
       <th class="center"><label><input name="chooseAll" type="checkbox" class="dialog_user_chooseall"/><span class="lbl"></span></label></th>
       <th class="classname">培训班名称</th>
       <th>主办部门</th>
       <th>时间</th>
    </tr>
   </thead>
   <tbody>
    <c:forEach items="${trainClassList.data}" var="list" varStatus="st">
	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
    	<td class="center"><label><input name="trianClassId" type="checkbox" value="${list.tcId }" /><span class="lbl"></span></label></td>
        <td id="className" ><a href="#">${list.name}</a></td>
        <td>${list.dep.name}</td>
        <td>${list.start_date} -${list.end_date}</td>
    </tr>
   </c:forEach>
</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${trainClassList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp"/>
<script>
$(function() {
	$('table th input:checkbox').on('click' , function(){
		var that = this;
		$(this).closest('table').find('tr > td:first-child input:checkbox')
		.each(function(){
			this.checked = that.checked;
			$(this).closest('tr').toggleClass('selected');
		});
			
	});
});

</script>
                     