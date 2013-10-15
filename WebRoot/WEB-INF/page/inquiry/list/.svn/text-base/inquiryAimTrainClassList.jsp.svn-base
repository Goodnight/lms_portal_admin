<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table cellspacing="0" cellpadding="0" class="basic_list mt10">
            		<colgroup>
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<th><input name="" type="checkbox" value="" /></th>
                        	<th>培训班名称</th>
                            <th>参与评估</th>
                        </tr>
                        <c:forEach items="${classList.data}" var="classList" varStatus="st">
                       <tr class="grey">
                        	<td><input name="iacId" type="checkbox" value="${classList.iacId}"/></td>
                        	<td>${classList.tc.name }</td>
                            <td><a href="javascript:;" class="previewbutton">参与人员</a></td>
                        </tr>
                        </c:forEach>
                        <tr>
                        	<td colspan="11">
                        	  <!-- 分页对象 -->
					<c:set var="pager" value="${classList.page}" scope="request"></c:set>
					<!-- 分页回调函数 -->
					<c:set var="pageFn" value="${page_trainclass}" scope="request"></c:set>
					<jsp:include page="/WEB-INF/page/list/pager.jsp" />
                     </td>
                        </tr>
                    </tbody>
                 </table>