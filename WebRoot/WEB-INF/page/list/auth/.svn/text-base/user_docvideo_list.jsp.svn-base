<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
      <div class="dataTables_wrapper">
        <!-- dateTable -->
        <div class="dataTables_wrapper learning-archive">
          <table class="datatable" width="100%">
            <thead>
              <tr> 
              	<th rowspan="2">课堂名称</th>
                <th rowspan="2">起止时间</th>
                <th rowspan="2">课堂类型</th>
                <th rowspan="2">主持人</th>
                <th rowspan="2">主讲人</th>
              </tr>
            </thead>
            <tbody>
              <c:forEach var="v" items="${videoList.data }" varStatus="st">
				<tr class="gradeA even">
	                <td>${v.name}</td>
	                <td>${v.startTm } 至 ${v.endTm }</td>
	                <td>
	                	<p>
		                    <c:choose>
		                        <c:when test="${v.isPub=='1' }">公开</c:when>
		                        <c:when test="${v.isPub=='0' }">未公开</c:when>
		                    </c:choose>
               			 </p>
	                </td>
	                <td>${v.compere.name }</td>
                  	<td>${v.speaker.name }</td>
	              </tr>
			</c:forEach>
           </tbody>
          </table>
          <!-- 分页对象 -->
<c:set var="pager" value="${videoList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
        </div>
      </div>
 
     