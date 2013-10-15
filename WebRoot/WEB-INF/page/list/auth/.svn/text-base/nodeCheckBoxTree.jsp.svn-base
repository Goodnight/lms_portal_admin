<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="companylist w164">
	<!-- 根据type决定搜索框的内容 -->
	<c:choose>
		<c:when test="${type eq 'dialog' }">
		</c:when>
		<c:otherwise>
			<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
			<div class="searchline"><input name="" type="button" class="button" /><input name="" type="text" class="input w120" /></div>
		</c:otherwise>
	</c:choose>
    <div class="bigtree">
    	<div class="tree_title"><a href="javascript:${clickName }('${node.type }','${node.id }','${node.name }');">${node.name }</a></div>
        <div class="tree_co">
           	<c:forEach var="node" items="${treeNode.subs }" varStatus="st">
           	
      				<div class="plus" onclick="${clickName }('${node.type }','${node.id }','${node.name }')">${node.name }</div>
		            <div class='rightline <c:out value="${fn:length(treeNode.subs)==st.index+1?'b0':''}" />'>
		            	<ul class="hidden">
		            		<c:set var="nodes" value="${node.subs }" scope="request"></c:set>
		            		<c:set var="clickName" value="${clickName }" scope="request"></c:set>
		            		<jsp:include page="/WEB-INF/page/list/auth/node.jsp"></jsp:include>
		            	</ul>
		            </div>
           	</c:forEach>
        </div>
    </div>
</div>