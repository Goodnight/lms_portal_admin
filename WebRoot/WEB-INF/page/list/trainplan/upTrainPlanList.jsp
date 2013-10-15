<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
    	<tr>
            <th>年度</th>
            <th>培训计划名称</th>
            <th>计划类型</th>
            <th>创建机构</th>
            <th>培训班数量</th>
            <th>发布状态</th>
        </tr>
    </thead>
	<tbody>    
		<c:if test="${trainPlanList != null }">
		<c:forEach items="${trainPlanList.data }" var="t" varStatus="ts">  
			<tr class="gradeA <c:out value="${ts.index%2==0?'even':'odd' }"/>">
			<td>${t.year}</td>
			<td><a id="${t.tpId }" href="javascript:;" class="showInfo">${t.name }</a></td>
			<td>
			    <c:choose>
                    <c:when test="${t.planType==0}">正式</c:when>
                    <c:when test="${t.planType==1}">临时</c:when>
                </c:choose>
			</td>
			<td>${t.departmentName }</td>
			<td><a href="viewPlanClass.html?id=${t.tpId }&ban=1&symbol=3" >${t.trainClassNum }</a></td>
            <td>
                <c:choose>
                    <c:when test="${t.status==1 }">已发布</c:when>
                    <c:when test="${t.status==0 }">未发布</c:when>
                </c:choose>
            </td>
			</tr>
		</c:forEach>
		</c:if>
	</tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${trainPlanList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>

<script type="text/javascript">
$(".showInfo").click(function(){
    var url = basepath+"/trainplan/viewUpTrainPlan.html?id="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});
</script>
