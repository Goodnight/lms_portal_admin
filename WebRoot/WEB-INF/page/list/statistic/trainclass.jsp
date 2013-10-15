<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable datatable2" width="100%">
    <thead>
        <tr>
            <th>培训班编号</th>
            <th>培训班名称</th>
            <th>计划内/外</th>
            <th>人数</th>
            <th>起止时间</th>
            <th>培训级别</th>
            <th>培训类别</th>
            <th>培训形式</th>
            <th>同步课堂</th>
            <th>考试</th>
            <th>考试平均分</th>
            <th>反应层评估</th>
            <th>行为层评估</th>
            <th>改进计划</th>
            <th>培训班讨论区</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${list.data }" var="r" varStatus="st">
            <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
                <td>${st.index+1}</td> <!-- ${r.sn } -->
	            <td>${r.name }</td>
	            <td>${r.plan }</td>
	            <td><a href="#">${r.attendNum }</a></td>
	            <td>${r.startDate }-${r.endDate }</td>
	            <td>${r.level }</td>
	            <td>${r.type }</td>
	            <td>${r.form }</td>
	            <td>${r.video }</td>
	            <td>
	               <c:if test="${r.exam == null || r.exam == ''}">无</c:if>
	               <c:if test="${r.exam != null && r.exam != ''}"><a id="" href="#" class="checkExam">有</a></c:if>
	            </td>
	            <td>${r.examAvgScore }</td>
	            <td>
	               <c:if test="${r.response == null || r.response == ''}">无</c:if>
	               <c:if test="${r.response != null && r.response != ''}"><a id="" href="#" class="checkResponse">有</a></c:if>
	            </td>
	            <td>
	               <c:if test="${r.behavior == null || r.behavior == ''}">无</c:if>
	               <c:if test="${r.behavior != null && r.behavior != ''}"><a id="" href="#" class="checkBehavior">有</a></c:if>
	            </td>
	            <td>${r.improvePlan }</td>
	            <td>
	               <c:if test="${r.forum == null || r.forum == ''}">无</c:if>
	               <c:if test="${r.forum != null && r.forum != ''}"><a id="" href="#" class="checkForum">有</a></c:if>
	            </td>
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
$(".checkExam").click(function(){        //查看考试
    var url = basepath+"/dialog/checkExam.html?id="+$(this).attr("id");
    //$("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".checkResponse").click(function(){    //查看反应层评估   
    var url = basepath+"/dialog/checkResponse.html?id="+$(this).attr("id");
    //$("#dialog_content").load(url);
    //$("#dialog").show();
    $(".newwindow").show();
});

$(".checkBehavior").click(function(){    //查看行为层评估
    var url = basepath+"/dialog/checkBehavior.html?id="+$(this).attr("id");
    //$("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});

$(".checkForum").click(function(){    //查看讨论区
    var url = basepath+"/dialog/checkForum.html?id="+$(this).attr("id");
    //$("#dialog_content").load(url);
    $("#dialog").show();
    $(".newwindow").show();
});
</script>
