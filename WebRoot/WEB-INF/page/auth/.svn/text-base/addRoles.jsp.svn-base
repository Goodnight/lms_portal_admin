<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>       
<div class="ngreyborder">
   <h2 class="png_bg">选择角色</h2>
   <div class="scroll h300 mt20">
       <div class="dataTables_wrapper mt10">
            <table class="datatable" width="100%" id="dataTableRole">
                <thead>
                  <tr>
                      <th width="30"><input name="input" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall" /></th>
                      <th>角色名称</th>
                  </tr>
                </thead>
                <tbody>
                    <c:forEach items="${roleList }" var="rl" varStatus="rls">
                    	<c:if test="${rl.type !=4 }">
                        <tr class="gradeA <c:out value="${rls.index%2==0?'even':'odd' }"/>"> 
                            <td><input id="${rl.rId }" name="roleId" type="checkbox" value="${rl.rId }" class="checkbox cls_chooseitem" /></td>
                            <td>${rl.name }</td>
                        </tr>
                        </c:if>
                    </c:forEach>
                </tbody>
             </table>
        </div>              
   </div>
   <div class="taR m10"><a href="javascript:;" class="step mr10 windowbutton addRoles">确定</a></div>
</div>
<script type="text/javascript">
$(".cls_chooseall").live("click",function(){
    bindChooseAll("cls_chooseall",true);
});
</script>