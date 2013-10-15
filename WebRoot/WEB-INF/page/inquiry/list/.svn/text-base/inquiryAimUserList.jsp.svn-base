<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
    <%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table cellspacing="0" cellpadding="0" class="basic_list mt10">
            		<colgroup>
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<th><input name="" type="checkbox" value="" /></th>
                        	<th>学员编号</th>
                            <th>学员姓名</th>
                        </tr>
                        <c:forEach items="${userList.data}" var="userList" varStatus="st">
                       <tr class="grey">
                        	<td><input name="iauId" type="checkbox" value="${userList.iauId}"/></td>
                        	<td>${userList.user.sn}</td>
                            <td><a href="">${userList.user.name}</a></td>
                        </tr>
                      </c:forEach>
                        <tr>
                        	<td colspan="11">
                      		      <!-- 分页对象 -->
					<c:set var="pager" value="${userList.page}" scope="request"></c:set>
					<!-- 分页回调函数 -->
					<c:set var="pageFn" value="${page_user}" scope="request"></c:set>
					<jsp:include page="/WEB-INF/page/list/pager.jsp" />
                     		</td>
                        </tr>
                    </tbody>
                 </table>