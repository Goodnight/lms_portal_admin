<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
                                      <tbody>
                                       <c:forEach items="${postList.data}" var="t" varStatus="st">
	                                       <c:if test="${st.index%3==0}">
	                                       		<tr class="<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>">
	                                       </c:if>
                                      		<%int i=0;
                                      			i++;
                                      		 %>
                                        	<td ><input name="postId" type="radio" value="${t.pId}" class="vm mr10"/>${t.name}</td>
                                            
	                                       <%if(i==3){ %>
	                                       		<tr >
	                                       <%} %>
                                         
                                          </c:forEach>
                                         
                                         
                                         </tbody>
                                         
                                    </table>
                                <div class="reHeight" style="padding:0 0 20px 0;">
                                <!-- 分页对象 -->
<c:set var="pager" value="${postList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />
                                </div>