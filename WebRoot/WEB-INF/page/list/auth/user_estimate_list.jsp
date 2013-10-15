<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="dataTables_wrapper">
	<!-- dateTable -->
	<div class="dataTables_wrapper learning-archive">
		<h3 class="reHeight">
			<div class="z m learning-h3">参加调查评估${list.page.records
				}次，需求调查${countOne }次，反应层评估${countTwo }次，行为层评估${countThree
				}次，综合评估${countFore }次，LPI测评${countFife }次</div>
		</h3>
		<table class="datatable" width="100%">
			<thead>
				<tr>
					<th>调查评估主题</th>
					<th>起止时间</th>
					<th>类型</th>
					<th>评估对象</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${list.data }" var="s" varStatus="st">
					<tr
						class='<c:out value="${st.index%2==0?'gradeA even':'gradeA odd' }"/>'>
						</td>
						<td>${s.survey.topic}</td>
						<td>${s.survey.startDt} 至 ${s.survey.endDt}</td>
						<td><c:if test="${s.survey.type == 0}">
	                                                              培训需求调查
	                    </c:if> <c:if test="${s.survey.type == 1}">
	                                                            反应层评估
	                    </c:if> <c:if test="${s.survey.type == 2}">
	                   	行为层评估
	                    </c:if> <c:if test="${s.survey.type == 3}">
	                    LPI测评
	                    </c:if> <c:if test="${s.survey.type == 4}">
	                                                            综合评估
	                    </c:if></td>
						<td>${s.aim.objectName}</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		<!-- 分页对象 -->
		<c:set var="pager" value="${list.page }" scope="request"></c:set>
		<!-- 分页回调函数 -->
		<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
		<jsp:include page="/WEB-INF/page/list/pager.jsp" />

	</div>
</div>

