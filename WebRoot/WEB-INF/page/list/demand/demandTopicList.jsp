<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="datatable1"  class="table table-striped table-bordered table-hover" width="100%">
	<thead>
		<tr>
			<th>
				<input name="all" id="alll" type="checkbox" value=""  class="ace" /><span class="lbl"></span>
			</th>
			<th class="classname">
				年度
			</th>
			<th>
				开始时间
			</th>
			<th>
				结束时间
			</th>
			<th>
				发布状态
			</th>
			<th>
				详情
			</th>
		</tr>
	</thead>
	<tbody>
	<c:forEach items="${dmdTopicList.data }" var="t" varStatus="st">
	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
		<td>
			<input name="groupTypeId" type="checkbox" value="${t.dtId}" class="ace" /><span class="lbl"></span>
		</td>
		<td>
			${t.year}
		</td>
		<td>
			${t.startDt}
		</td>
		<td>
			${t.endDt}
		</td>
		<td>
			<c:if test="${t.status==0}">
				<c:if test="${flag=='0'}"><a href="javascript:changeStatus(${t.status},'${t.dtId}');" >未发布</a></c:if>
				<c:if test="${flag=='1'}">未发布</c:if>
			</c:if>
			<c:if test="${t.status==1}">
				<a href="javascript:changeStatus(${t.status},'${t.dtId}');" >已发布</a>
			</c:if>
		</td>
		<td>
			<a href="demandTopicNew.html?id=${t.dtId}">点击查看</a>
		</td>
	</tr>
	</c:forEach>
	</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${dmdTopicList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp"/>

<script type="text/javascript">
function changeStatus(t,id) {
    var bool = confirm("是否确定要改变发布状态?");
    if(bool){
    	var s = 0;
    	if(t==0){
    		s=1;
    	}
    	if(t==1){
    		s=0;
    	}
           location="updateTopic.html?id="+id+"&status="+s;
    }   
}
</script>
				







