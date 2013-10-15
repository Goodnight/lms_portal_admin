<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th>机构名称</th>
            <th>用户总数</th>
            <th>课程总数</th>
            <th>精品课程数</th>
            <th>更新课程数</th>
            <th>已用课程数</th>
            <th>课程使用率</th>
            <th>学习总人数</th>
            <th>学习总人次</th>
            <th>学习总时长</th>
            <th>平均学习时长</th>
            <th>学习率</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	             <td>${r.orgName }</td>
	             <td>${r.userTotal }</td>
	             <td>${r.coursetotal }</td>
	             <td>${r.eliteNum }</td>
	             <td>${r.updateNum }</td>
	             <td>${r.usedNum }</td>
	             <td>${r.courseUseRate }</td>
	             <td>${r.studentTotal }</td>
	             <td>${r.studyTimeTotal }</td>
	             <td>${r.studyHourTotal }</td>
	             <td>${r.studyHourAvg }</td>
	             <td>${r.studyRate }</td>
             </tr>
         </c:forEach>
    </tbody>
</table>