<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="sample-table-1" class="table table-striped table-bordered table-hover" width="100%">
	<thead>
    	<tr>
            <th width="10"><input name="" type="checkbox" value="" class="checkbox cls_checkbox  cls_chooseall"/></th>
            <th class="classname">年度</th>
            <th>部门</th>
            <th>岗位</th>
            <th>直线经理</th>
            <th>填写时间</th>
            <th>迫切性</th>
        </tr>
      </thead>
      <tbody>
      <c:forEach items="${dmdPostList.data}" var="t" varStatus="st">   
      	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
        	<td><input id="groupTypeId" name="groupTypeId" type="checkbox" value="${t.dpId}" class="checkbox cls_checkbox  cls_chooseitem"/><label class="lbl"></td>
            <td class="classname">${t.topic.year}年</td>
            <td>${t.creater.org.name}</td>
            <td><a href="demandPostNewModify.html?dpId=${t.dpId}" target="_blank">${t.position.name}</a></td>
            <td>${t.creater.name}</td>
            <td>${t.createTm}</td>
            <td>
                <c:choose>
                    <c:when test="${t.urgentLevel==2}">迫切</c:when>
                    <c:when test="${t.urgentLevel==0}">不迫切</c:when>
                    <c:otherwise>一般</c:otherwise>
                </c:choose>
            </td>
         </tr>
       </c:forEach>                                                                             
       </tbody>                                        
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${dmdPostList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />
