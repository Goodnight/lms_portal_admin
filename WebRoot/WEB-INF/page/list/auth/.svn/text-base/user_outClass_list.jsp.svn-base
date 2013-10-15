<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="dataTables_wrapper learning-archive">
          <!-- dateTable -->
          <table class="datatable" width="100%">
            <thead>
              <tr>
                <th>培训班名称</th>
                <th>开始时间</th>
                <th>结束时间</th>
                <th>培训时长</th>
                <th>组织机构</th>
                <th>培训地点</th>
                <th>培训信息</th>
              </tr>
            </thead>
            <tbody>
              <c:forEach var="c" items="${outClassList.data }" varStatus="cs">
				 <tr class='<c:out value="${cs.index%2==0?'gradeA even':'gradeA even' }"/>'>
                <td>${c.tcb.name }</td>
                <td>${c.tcb.start_date }</td>
                <td>${c.tcb.end_date }</td>
                <td>${c.tcb.trainDuration }天</td>
                <td>${c.tcb.dep.name }</td>
                <td>${c.tcb.address }</td>
                <td>${c.tcb.content }</td>
              </tr>
			</c:forEach>
           </tbody>
          </table>
        </div>
      
 <!-- 分页对象 -->
<c:set var="pager" value="${outClassList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>