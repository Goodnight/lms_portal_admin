<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>机构名称</th>
            <th>用户总数</th>
            <th>案例总数</th>
            <th>精品案例数</th>
            <th>更新案例数</th>
            <th>浏览总次数</th>
            <th>下载总次数</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	             <td>${r.orgName }</td>
                 <td>${r.userTotal }</td>
                 <td>${r.docTotal }</td>
                 <td>${r.eliteNum }</td>
                 <td>${r.updateNum }</td>
                 <td>${r.views }</td>
                 <td>${r.downloads }</td>
             </tr>
         </c:forEach>
    </tbody>
</table>
