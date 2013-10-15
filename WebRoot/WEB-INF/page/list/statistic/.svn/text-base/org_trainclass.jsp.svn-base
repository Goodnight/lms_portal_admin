<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable datatable2" width="100%">
    <thead>
        <tr>
            <th>机构名称</th>
            <th>培训计划</th>
            <th>培训班总数</th>
            <th>在线培训班数</th>
            <th>混合培训班数</th>
            <th>面授培训班数</th>
            <th>有辅导教师的班数</th>
            <th>利用同步课堂的班数</th>
            <th>利用考试的班数</th>
            <th>考试平均分</th>
            <th>利用反应层评估的班数</th>
            <th>满意度调查平均分</th>
            <th>利用行为层评估的班数</th>
            <th>发放证书的班数</th>
            <th>利用训后改进计划</th>
            <th>利用讨论区的班数</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	             <td>${r.orgName }</td>
                 <td>${r.planName }</td>
                 <td>${r.classNumTotal }</td>
                 <td>${r.onlineNum }</td>
                 <td>${r.complexNum }</td>
                 <td>${r.faceNum }</td>
                 <td>${r.teacherNum }</td>
                 <td>${r.videoNum }</td>
                 <td>${r.examNum }</td>
                 <td>${r.examAvgScore }</td>
                 <td>${r.responseNum }</td>
                 <td>${r.statisfactionAvgScore }</td>
                 <td>${r.behaviorNum }</td>
                 <td>${r.certificateNum }</td>
                 <td>${r.improvePlan }</td>
                 <td>${r.forumNum }</td>
             </tr>
         </c:forEach>
    </tbody>
</table>
