<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="dataTables_wrapper learning-archive">
	<h3 class="reHeight">
		<div class="z m learning-h3" style="padding: 18px 0 16px;">
			共参加了
			<c:if test="${classList.page.records != 0}">${classList.page.records}</c:if>
			<c:if test="${classList.page.records == 0}">0</c:if>
			个培训班， 其中在线培训班
			<c:if test="${countOnline != 0}">${countOnline}</c:if>
			<c:if test="${countOnline == 0}">0</c:if>
			个， 混合式培训班
			<c:if test="${countMix != 0}">${countMix}</c:if>
			<c:if test="${countMix == 0}">0</c:if>
			个， 面授培训班
			<c:if test="${countLive != 0}">${countLive}</c:if>
			<c:if test="${countLive == 0}">0</c:if>
			个
		</div>
	</h3>

	<c:forEach items="${classList.data }" var="c" varStatus="cs">
		<!-- dateTable -->
		<table class="datatable mix-datatable" id="" width="100%">
			<colgroup>
				<col width="200px" />
				<col width="100px" />
			</colgroup>
			<thead>
				<tr class="gradeA odd">
					<th class="taL" colspan="3"><span class="mlmgroup">主办单位：${c.tcb.dep.name
							}</span> <span class="mlmgroup mrmgroup">|</span> <span>起止时间：${c.tcb.start_date
							} 至 ${c.tcb.end_date }</span></th>
				</tr>
			</thead>
			<tbody>
				<tr class="gradeA odd">
					<td rowspan="9"
						<a class="xw1" target="_blank" href="">${c.tcb.name }</a></td>
					<td>培训方式</td>
					<td class="taL">${c.tcb.way.name }</td>
				</tr>
				<tr class="gradeA odd">
					<td>在线课程</td>
					<td class="taL"><c:forEach items="${c.cbList }" var="online">
							<span class="pip">《</span>
			      	${online.res.name }
			      	<span class="pip">》</span>
						</c:forEach></td>
				</tr>
				<tr class="gradeA odd">
					<td>面授课程</td>
					<td class="taL"><c:forEach items="${c.tfcbList }" var="face">
							<span class="pip">《</span>
				      ${face.name }
				      <span class="pip">》</span>
						</c:forEach></td>
				</tr>
				<tr class="gradeA odd">
					<td>直播课程</td>
					<td class="taL"><c:forEach items="${c.zbList }" var="live">
							<span class="pip">《</span>
			      ${live.res.name }
			      <span class="pip">》</span>
						</c:forEach></td>
				</tr>
				<tr class="gradeA odd">
					<td>文档案例</td>
					<td class="taL"><c:forEach items="${c.dbList }" var="document">
							<span class="pip">《</span>
				      ${document.res.name }
				      <span class="pip">》</span>
						</c:forEach></td>
				</tr>
				<tr class="gradeA odd">
					<td>同步课堂</td>
					<td class="taL">
						<!-- ><span class="pip">《</span>
       				 <span class="pip">》</span>  -->
					</td>
				</tr>
				<tr class="gradeA odd">
					<td>考试</td>
					<td class="taL"></td>
				</tr>
				<tr class="gradeA odd">
					<td>评估</td>
					<td class="taL">${c.surveyNum }</td>
				</tr>
				<tr class="gradeA odd">
					<td>讨论区</td>
					<td class="taL">${c.tcb.forum.name }</td>
				</tr>
			</tbody>
		</table>
	</c:forEach>

</div>
</div>
<!-- 分页对象 -->
<c:set var="pager" value="${classList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />