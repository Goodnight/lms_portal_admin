<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="20" >
            	<input type="checkbox" value="cls_choose_online" class="checkbox cls_chooseall" />
            </th>
            <th width="100">课程编号</th>
            <th width="400">课程名称</th>
            <th width="100">学时</th>
            <th width="300">创建公司</th>
            <th width="100">预览课程</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach items="${list.data }" var="res" varStatus="st">
   			<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
     			<td><input name="onlineRes" type="checkbox" value="${res.trId }" class="checkbox cls_choose_online" /></td>
              	<td>${res.resCw.res.sn }</td>
              	<td>${res.resCw.res.name }</td>
              	<td><fmt:formatNumber value="${res.resCw.courseHour / 60}" pattern="##.##" minFractionDigits="2"></fmt:formatNumber></td>
              	<td>${res.resCw.res.org.name }</td>
              	<td>
              		<c:forEach items="${res.resCw.data }" var="d">
              			 <!-- ff808081385bcac601385bd006740033:SCORM课件 -->
                       <c:if test="${d.type == 0 && res.resCw.type.spId == 'ff808081385bcac601385bd006740033'}">
                       	<a class="${d.outCode}" id="${basepath }/ctu-resource-agent?player=scorm&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${res.resCw.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)">预览</a>
                       </c:if>
                        	<!-- ff808081385bcac601385bd006230031:单一入口课件 -->
                       <c:if test="${d.type == 0 && res.resCw.type.spId == 'ff808081385bcac601385bd006230031'}">
                       	<a class="${d.outCode}" id="${basepath }/ctu-resource-agent?player=simple&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${res.resCw.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)">预览</a>
                       </c:if>
                       	 <!-- ff808081385bcac601385bd006142d3e:外链课件 , resource_id为必填参数,但是外链课件并没有有效的resource_id值,1234为默认值.-->
                       <c:if test="${d.type == 0 && res.resCw.property.spId == 'ff808081385bcac601385bd005a7002e' && res.resCw.type.spId == 'ff808081385bcac601385bd006142d3e'}">
                       	<a class="${d.outCode}" id="${basepath }/ctu-resource-agent?player=external&resource_id=${d.outCode}&user=${sessionScope.user.uid}&index=${res.resCw.url}&is_trace=false" href="javascript:;" onclick="clickshpw(this)">预览</a>
                       </c:if>
                   	</c:forEach>
               
              	</td>
     		</tr>
    	</c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>