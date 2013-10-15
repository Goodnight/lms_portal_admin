<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
									  
<table class="datatable" width="100%">
                	<thead>
                    	<tr>
                        	<th width="25"><input name="" type="checkbox" value="cls_choose_online" class="checkbox cls_chooseall" /></th>
                        	<th class="sorting">资源编号</th>
                            <th class="sorting">资源名称</th>
                            <th class="sorting">主要内容</th>
                            <th class="sorting">资源类别</th>
                        </tr>
						</thead>
                                      <tbody>
                       <c:forEach items="${onlineCaseDocList.data }" var="res" varStatus="st">
                       <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                        	<td><input name="onlineRes" type="checkbox" value="${res.arId }" class="checkbox cls_choose_online"/></td>
                            <td>${res.arId}</td>
                        	<td>${res.destSrcName}</td>
                            <td>${res.destSrcContent}</td>
                            <td>${res.destResType}</td>
                        </tr>
                        </c:forEach>
                    </tbody>
                 </table>
                <div class="reHeight pager">
                	<!-- 分页对象 -->
                	<c:set var="pager" value="${onlineCaseDocList.page }" scope="request"></c:set>
                	<!-- 分页回调函数 -->
                	<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
                	<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
               </div>