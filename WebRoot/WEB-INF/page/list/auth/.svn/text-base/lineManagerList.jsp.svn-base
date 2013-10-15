<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
   <table class="datatable" width="100%">
       <thead>
           <tr>
                 <th width="30"><input name="index" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
                 <th class="sorting">直线经理编号</th>
                 <th class="sorting">直线经理姓名</th>
                 <th class="sorting">授权人</th>
                 <th class="sorting">授权时间</th>
                 <th class="sorting">所管辖员工</th>
                 <th class="sorting">分配人员</th>
         </thead>
         <tbody>
         <c:forEach items="${lineManagerList.data }" var="lm" varStatus="lms">
         <tr class="gradeA <c:out value="${lms.index%2==0?'even':'odd' }"/>"> 
             <td><input name="index" type="checkbox" value="${lm.lmId}" class="checkbox cls_chooseitem"}"/></td>
             <td>${lm.sn}</td>
             <td>${lm.manager.name}</td>
             <td>${lm.accreditor.name}</td>
             <td>${lm.accredit_time}</td>
             <td>0</td>
             <td><a id="${lm.lmId}" href="#" class="assignStaff">分配人员</a></td> 
         </c:forEach>       
         </tbody> 
   </table>

<!-- 分页对象 -->
<c:set var="pager" value="${lineManagerList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>  

<script type="text/javascript">
$(".assignStaff").click(function(){
    var url = basepath+"/dialog/assignStaff.html?page=page&r="+Math.random()+"&lmId="+$(this).attr("id");
    $("#dialog_content").load(url);
    $("#dialog").show();
});
</script> 
 