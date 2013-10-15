<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>   
 <table class="datatable" width="100%"><!-- 未参与 -->
    <thead>
   	<tr>
   	       <th width="30"><input type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
       	   <th>员工编号</th>
           <th>员工姓名</th>
           <th>所属机构</th>
         <c:if test="${flagU == 'behavior'|| flagU == 'lpi'}">
	           <th>评估对象</th>
	           <th>评估关系</th>
	           <th>指定人</th>
   		 </c:if>
       </tr>
     </thead>
     <tbody>
       <c:forEach items="${inquiryPersonListInfo.data}" var="list" varStatus="st">
      	<tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
      	    <td><input name="cls_user" type="checkbox" value="${list.sauId }" class="checkbox cls_chooseitem" /></td>
        	<td>${list.user.sn}</td>
            <td><a href="javascript:;">${list.user.name}</a></td>
            <td>${list.user.org.name }</td>
           <c:if test="${flagU == 'behavior'|| flagU == 'lpi'}">
	            <td>${list.aim.objectName }</td>
	            <td>
	            	<c:if test="${list.relation==0}">上级</c:if>
	            	<c:if test="${list.relation==1}">平级</c:if>
	            	<c:if test="${list.relation==2}">下级</c:if>
	            	<c:if test="${list.relation==3}">其他</c:if>
	            	<c:if test="${list.relation==4}">本身</c:if>
	            </td>
	            <td>${list.creater.name}</td>
           </c:if>
         </tr>
        </c:forEach>
        </tbody>                                    
 </table>
<div class="cl">
<!-- 分页对象 -->
<c:set var="pager" value="${inquiryPersonListInfo.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />
</div>
