<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/page/include/taglibs.jsp"%>   
<form id="" action="doSaveRole.html" method="post">
<div class="ngreyborder">
   <h2 class="png_bg">选择角色</h2>
   <div class="scroll h400 mt20">
       <div class="dataTables_wrapper mt10">
       <input id="uId" name="uId" type="hidden" value="${uId }">
            <table class="datatable" width="100%" id="dataTableRole">
                <thead>
                  <tr>
                      <th width="30"><!-- <input name="input" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/> --></th>
                      <th>角色名称</th>
                  </tr>
                </thead>
                <tbody>
                    <c:forEach items="${roleList}" var="rl" varStatus="rls">
                    <c:if test="${rl.type!=4}">
                        <tr class="gradeA <c:out value="${rls.index%2==0?'even':'odd' }"/>">
                        
                            <%boolean flag = false; %>
                            <c:forEach items="${roleListOwn}" var="rlo">
                                <c:if test="${rl.rId == rlo.role.rId }"><%flag = true; %></c:if>
                            </c:forEach>
                            
                            <td>
                                <%if(flag){ %>
                                    <input id="${rl.rId }" name="groupId" type="checkbox" value="${rl.rId }" class="checkbox cls_chooseitem" checked="checked" />
                                <%}else{ %>
                                    <input id="${rl.rId }" name="groupId" type="checkbox" value="${rl.rId }" class="checkbox cls_chooseitem" />
                                <%} %>                                
                            </td>
                            <td>${rl.name }</td>
                        </tr>
                        </c:if>
                    </c:forEach>
                </tbody>
             </table>
        </div>              
   </div>    
</div>
<div class="taR mr10 mt10">
    <c:if test="${roleList != null && !empty roleList}"><input type="submit" value="确定" class="step m10 vm" name="_next"></c:if>
    <c:if test="${roleList == null || empty roleList}"><input type="button" value="确定" class="step m10 vm shutdown" name="_next"></c:if>
</div>
</form>
	
<script type="text/javascript">
$(function(){
	$(".cls_chooseall").live("click",function(){
	    bindChooseAll("cls_chooseall",true);
	});
	$(".shutdown").live("click",function(){
	    $("#dialog").hide();
	});
	
}):
</script>
