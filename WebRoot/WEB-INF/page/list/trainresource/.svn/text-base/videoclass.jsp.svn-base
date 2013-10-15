<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th class="pl10" >
            	<input name="" type="checkbox" value="cls_item_videoclass" class="checkbox cls_chooseall" />
            </th>
            <th width="200" class="sorting">课堂名称</th>
            <th width="100" class="sorting">课堂类型</th>
            <th width="250" class="sorting">课堂开始时间和结束时间</th>
            <th width="100" class="sorting">主持人</th>
            <th width="100" class="sorting">主讲人</th>
            <th width="100">发布状态</th>
            <th width="100">指定人员</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="res" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td class="pl10">
	            	<c:choose>
	            		<c:when test="${res.resVideo.status==0}">
	            			<input  id="${res.resVideo.vId }"  name="resourceId" type="checkbox" value="${res.trId }" delete="1" class="checkbox cls_item_videoclass" />
	            			<input type="hidden" name="videoId" value="${res.resVideo.vId }" />
	            		</c:when>
	            		<c:otherwise>
	            			<input id="${res.resVideo.vId }"  name="resourceId" type="checkbox" value="${res.trId }" delete="0" class="checkbox cls_item_videoclass" />
	            			<input type="hidden" name="videoId" value="${res.resVideo.vId }" />
	            		</c:otherwise>
	            	</c:choose>
	            	
	            </td>
	            <td><a href="${basepath }/videoclass/toupdate.html?rvid=${res.resVideo.vId}&tcid=${res.tClass.tcId}">${res.resVideo.name }</a></td>
	            <td>
	            	<c:choose>
	            		<c:when test="${res.resVideo.isPub==0}">非公开</c:when>
	            		<c:otherwise>公开</c:otherwise>
	            	</c:choose>
	            </td>
	            <td>${res.resVideo.startTm }/${res.resVideo.endTm }</td>
	            <td>${res.resVideo.compere.name }</td>
	            <td>${res.resVideo.speaker.name }</td>
	            <td>
	            	<c:choose>
	            		<c:when test="${res.resVideo.status==0}">
	            			<a href="#" onclick="javascript:changeStatus(this,1,'${res.resVideo.vId }');">未发布</a>
	            		</c:when>
	            		<c:otherwise>
	            			<a  href="#" onclick="javascript:changeStatus(this,0,'${res.resVideo.vId }');">已发布</a>
	            		</c:otherwise>
	            	</c:choose>
	            </td>
	            <td><em vid="${res.resVideo.vId }" class="tochoose chooseperson">参与人员</em></td>
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
