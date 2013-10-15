<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th class="sorting">员工编号</th>
            <th class="sorting">员工姓名</th>
            <th class="sorting">所属部门</th>
            <th class="sorting">学习课程总数</th>
            <th class="sorting">学习总次数</th>
            <th class="sorting">平均学习次数</th>
            <th class="sorting">学习总时长</th>
            <th class="sorting">平均学习时长</th>
            <th class="sorting">完成课程数</th>
            <th class="sorting">课程完成率</th>
        </tr>
    </thead>
    <tbody>
         <c:forEach items="${list.data }" var="r" varStatus="st">
         	<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
             <td><c:if test="${r.sn == null }">${st.index }</c:if>${r.sn }</td>
             <td>${r.name }</td>
             <td>${r.orgName }</td>
             <td><c:if test="${r.courseNum == null}">0门</c:if><a id="" href="#" class="checkCourse">${r.courseNum }</a></td>
             <td><c:if test="${r.studyTime == null}">0次</c:if>${r.studyTime }</td>
             <td><c:if test="${r.studyTimeAvg == null}">0次</c:if>${r.studyTimeAvg }</td>
             <td><c:if test="${r.studyHour == null}">0小时</c:if>${r.studyHour }</td>
             <td><c:if test="${r.studyHourAvg == null}">0小时</c:if>${r.studyHourAvg }</td>
             <td><c:if test="${r.ompleteCourseNum == null}">0门</c:if>${r.ompleteCourseNum }</td>
             <td><c:if test="${r.courseCompletionRate ==null}">0%</c:if>${r.courseCompletionRate }</td>
            </tr>
         </c:forEach>
    </tbody>
</table>
<!-- 分页对象 -->
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/> 

<script type="text/javascript">
$(".checkCourse").click(function(){        //查看考试
    var url = basepath+"/dialog/checkCourse.html?id="+$(this).attr("id");
    //$("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});
</script>