<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table border="0" cellspacing="0" cellpadding="0" width="100%">
	<colgroup>
		<col width="80" />
	   	<col width="50" />
	   	<col width="200" />
	   	<col width="200" />
	   	<col width="200" />
	   	<col width="150" />
	</colgroup>
    	<thead>
        	<tr>
            	<th></th>
            	<th>课程编号</th>
                <th>课程名称</th>
                <th>创建公司</th>
                <th>学时</th>
            </tr>
        </thead>
        <tbody>
        	<c:forEach items="${onlineList.data }" var="c" varStatus="st">
        		<tr class='<c:out value="${st.index%2==0?'grey':'' }" />'>
                <td><input class="cls_chooseCourse" name="cId" type="checkbox" onclick="add(this)" value="${c.cId }"/></td>
                <td>${c.sn }</td>
                <td>${c.name }</td>
                <td>${c.creater.dep.org.name }</td>
                <td>${c.hour }</td>
             </tr>
        	</c:forEach>
         </tbody>
</table>
<div class="reHeight pager">
	<c:set var="pager" value="${onlineList.page }" scope="request"></c:set>
   	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
   	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>		
</div>