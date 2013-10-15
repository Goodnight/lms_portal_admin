<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th class="sorting" width="200">培训班编号</th>
			<th class="sorting" width="400">培训班名称</th>
			<th class="sorting" width="150">主办部门</th>
			<th class="sorting" width="200">时间</th>
			<th class="sorting" width="100">培训方式</th>
			<th class="sorting" width="90">状态</th>
			<th class="sorting" width="100">考试</th>
			<th class="sorting" width="100">评估</th>
			<th class="sorting" width="100">讨论区</th>
		</tr>
	</thead>
	<tbody>
		<c:forEach var="t" items="${list.data }" varStatus="st">
			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
				<td>${t.tclass.sn }</td>
				<td><a href="../information.html?tcid=${t.tclass.tcId }"
					target="_blank">${t.tclass.name}</a></td>
				<td>${t.tclass.dep.name }</td>
				<td>${t.tclass.start_date } 到${t.tclass.end_date }</td>
				<td>${t.tclass.way.name }</td>
				<td><c:choose>
						<c:when test="${t.tclass.status==1 || t.tclass.status==4 }">新建</c:when>
						<c:when test="${t.tclass.status==2 }">实施</c:when>
						<c:when test="${t.tclass.status==3 }">完成</c:when>
						<c:otherwise>不限</c:otherwise>
					</c:choose></td>
				<td>无</td>
				<td>	<c:choose>
						<c:when test="${t.tclass.hasResponse==0 || t.tclass.hasResponse==null}">
						<c:choose>
						<c:when test="${t.tclass.hasBehavior==1}">
							有
						</c:when>
						 <c:otherwise>
	           			 	   无
	           		    </c:otherwise>
						</c:choose>
						</c:when>
						<c:when test="${t.tclass.hasResponse==1}">
								有
						</c:when>
						<c:otherwise>
	           			    无 
	           		    </c:otherwise>
					</c:choose></td>
				<td><c:choose>
						<c:when test="${t.tclass.forum!=null }">
							<a href="../bbs.html?tcid=${t.tclass.tcId }">讨论区</a>
						</c:when>
						<c:otherwise>
	           			无
	           		</c:otherwise>
					</c:choose></td>
			</tr>
		</c:forEach>
	</tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />