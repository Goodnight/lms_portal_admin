<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>员工编号</th>
            <th>员工姓名</th>
            <th>所属部门</th>
            <th>课程完成数</th>
            <th>学习课程总数</th>
            <th>学习总次数</th>
            <th>学习总时长</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach var="s" items="${list.data }">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
         		<td>${s.sn }</td>
         		<td>${s.name }</td>
         		<td title="${s.depNamePath }">${s.dep }</td>
         		<td><a class="groupadds" id="${s.sn }" href="javascript:;">${s.complete }</a></td>
         		<td><a class="groupadd" id="${s.sn }" href="javascript:;">${s.courses }</a></td>
         		<td>${s.time }</td>
         		<td>${s.hours }</td>
         	</tr>
         </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
<script type="text/javascript" >

$(".groupadd").click(
		function() {
			var sn = $(this).attr("id");
			var tcid = $("#cisa").val();
			windowkey = true;
			$(".blackall").show();
			var url = basepath + "/trainclass/number.html?tcid="
					+ tcid + "&sn=" + sn + "&r=" + Math.random();
			$("#dialog_content").load(encodeURI(url));
			$("#dialoges").show();
			$("#choosepersonco").show();

		});
		
		
$(".groupadds").click(
		function() {
			var sn = $(this).attr("id");
			var tcid = $("#cisa").val();
			windowkey = true;
			$(".blackall").show();
			var url = basepath + "/trainclass/number.html?tcid="
					+ tcid + "&sn=" + sn + "&op=1&r="
					+ Math.random();
			$("#dialog_content").load(encodeURI(url));
			$("#dialoges").show();
			$("#choosepersonco").show();

		});
</script>
