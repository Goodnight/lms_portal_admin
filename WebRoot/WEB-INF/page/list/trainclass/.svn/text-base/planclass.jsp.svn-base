<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table cellspacing="0" cellpadding="0" class="datatable" width="100%">
<tbody>
   	<tr>
       	<c:if test="${ban == null || ban == '' || ban != 1 }">
       	    <th><input name="groupTypeId" type="checkbox" value="cls_item_trainplan"  class="checkbox cls_chooseall_trainplan"/></th>
       	</c:if>
       	<th>培训班编号</th>
        <th>培训班名称</th>
        <th>预期举办时间</th>
        <th>每期天数</th>
        <th>计费方式</th>
        <th>每期人数</th>
        <th>实施状态</th>
    </tr>
    <c:forEach var="tc" items="${list.data }" varStatus="st">
    	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>"> 
	    	<c:if test="${ban == null || ban == '' || ban != 1 }">
	    	    <td><input name="groupTypeId" type="checkbox" value="${tc.tcId}" class="checkbox cls_item_trainplan"}"/></td>
	    	</c:if>
	       	<td>${tc.sn }</td>
	        <td>
	            <c:if test="${ban == null || ban == '' || ban != '1' }">
	                <a href="modifyTrainClass.html?tcId=${tc.tcId}&tpId=${tc.plan.tpId}">${tc.name }</a>
	                <input type="hidden" value="${tc.plan.tpId }" /><!-- test -->
	            </c:if>
	            <c:if test="${ban == '1'}">${tc.name }</c:if>
	        </td>
	        <td>            
                <c:if test="${tc.expectStartQuarter == 1}">第一季度</c:if>
                <c:if test="${tc.expectStartQuarter == 2}">第二季度</c:if>
                <c:if test="${tc.expectStartQuarter == 3}">第三季度</c:if>
                <c:if test="${tc.expectStartQuarter == 4}">第四季度</c:if>
            </td>
	        <td>${tc.trainDuration }</td>
			<td>
				<c:if test="${tc.charge_way.spId == 'ff808081385bcac601385bd003770021'}">平均费用</c:if>
				<c:if test="${tc.charge_way.spId == 'ff808081385bcac601385bd0034c0020'}">总费用</c:if>
			</td>
	        <td>${tc.attendNum }</td>
	        <td>
	        	<c:if test="${tc.status == 0}">不限</c:if>
	        	<c:if test="${tc.status == 1 && tc.plan.status == 1}">实施</c:if>
	        	<c:if test="${tc.status == 3 && tc.plan.status == 1}">完成</c:if> <!-- 20130307LTC且培训计划为已发布 -->
	        	<c:if test="${tc.status == 4 || tc.plan.status == 0}">计划中</c:if>
	        </td>
	    </tr>
    </c:forEach>
    <tr>
    	<td colspan="8">
    		<!-- 分页对象 -->
			<c:set var="pager" value="${list.page }" scope="request"></c:set>
			<!-- 分页回调函数 -->
			<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
			<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
    	</td>
    </tr>
</tbody>
</table>
