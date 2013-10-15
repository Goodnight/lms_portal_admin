<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
	<thead>
    	<tr>
        	<th></th>
        	<th>培训班编号</th>
        	<th>培训班名称</th>
            <th>每期人数</th>
            <th>课程列表</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${trainPlanList.data }" var="p" varStatus="st">
    		<c:if test=""></c:if>
    		<tr class="<c:out value="${st.index%2==0?'grey':'' }" />">
         	<td>
         		<input type="radio" class="checkbox cls_tpradio" name="choosePlan"  value="${p.tpId }"/>
         		<input id="${p.tpId }" type="hidden" value="${p.name }" />
         	</td>
             <td>${p.sn }</td>
         	 <td>${p.name }</td>
             <td></td>
             <td></td>
         </tr>
    	</c:forEach>
         </tbody>
</table>
<div class="reHeight pager">
		<c:set var="pager" value="${trainPlanList.page }" scope="request"></c:set>
	    <c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	    <jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>	
</div>