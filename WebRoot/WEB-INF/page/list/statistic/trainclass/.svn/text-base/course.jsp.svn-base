<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
        	<th>课程编号</th>
            <th>课程名称</th>
            <th>学习总人数</th>
            <th>学习总时长</th>
            <th>完成人数</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach var="c" items="${list.data }">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
         		<td>${c.sn}</td>
         		<td>${c.name }</td>
         		<td><a class="courses" id="${c.sn }" href="javascript:;">${c.students }</a></td>
         		<td>${c.hours }</td>
         		<td>${c.complete }</td>
         	</tr>
         </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 
<script type="text/javascript">
$(".courses").click(
		function() {
			var sn = $(this).attr("id");
			var tcid = $("#cisa").val();
			windowkey = true;
			$(".blackall").show();
			var url = basepath + "/trainclass/number.html?tcid="
					+ tcid + "&sn=" + sn + "&op=2&r="
					+ Math.random();
			$("#dialog_content").load(encodeURI(url));
			$("#dialoges").show();
			$("#choosepersonco").show();

		});
</script>
