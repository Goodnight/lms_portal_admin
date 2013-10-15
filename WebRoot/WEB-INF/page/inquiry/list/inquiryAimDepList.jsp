<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table cellspacing="0" cellpadding="0" class="basic_list mt10">
            		<colgroup>
                    </colgroup>
                	<tbody>
                    	<tr>
                            <th><input name="" type="checkbox" value=""/></th>
                            <th>部门组名称</th>
                            <th>部门组类型</th>
                       </tr>
                        <c:forEach items="${list.data}" var="depList" varStatus="st">
	                       <tr class="grey">
	                        	 <td><input name="iadId" type="checkbox" value="${depList.iadId}"/></td>
	                            <td>${depList.dep.name}</td>
	                            <td>部门组类型</td>
	                        </tr>
                        </c:forEach>
                        <tr>
                        	<td colspan="11">
                          <!-- 分页对象 -->
					<c:set var="pager" value="${list.page}" scope="request"></c:set>
					<!-- 分页回调函数 -->
					<c:set var="pageFn" value="${page_dep}" scope="request"></c:set>
					<jsp:include page="/WEB-INF/page/list/pager.jsp" />
                    		 </td>
                        </tr>
                    </tbody>
                 </table>