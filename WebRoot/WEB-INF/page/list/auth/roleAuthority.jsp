<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table id="datatable" class="datatable" width="100%">
     <thead>
         <tr>
             <th>权限名</th>
             <th width="45" class="taC">查看</th>
             <!--  
             <th width="45" class="taC">增加</th>
             <th width="45" class="taC">修改</th>
             <th width="45" class="taC">删除</th>  
             -->
         </tr> 
     </thead>
     <tbody>
        <c:if test="${flag == '1' }">
         <c:forEach items="${roleAuthorityList }" var="ra" varStatus="ras">
             <input name="rolePermit" type="hidden" value="${ra.rpId}"/>
             <input name="roleId" type="hidden" value="${ra.role.rId}"/>
             <input name="menuId" type="hidden" value="${ra.menu.mId}"/>
             <tr class="gradeA <c:out value="${ras.index%2==0?'even':'odd' }"/>">
             
             <c:if test="${ra.isInquiry == '1' }"><!-- 当具有查看权限时才显示该条菜单记录 by LTC 20130416 LMSWD-2200 -->
                <td>${ra.menu.namePath }<input id="${ra.menu.mId }" type="hidden" value="${ra.menu.mId }"></td>
             </c:if>
             <!-- 查看 -->
             <td class="pl10">
                <c:choose>
                    <c:when test="${ra.isInquiry == '1'}">
                        <c:if test="${ra.role.type != '1'}">
                            <input name="inquiry" type="checkbox" value="1" class="checkbox" checked="checked"/>
                        </c:if>
                        <c:if test="${ra.role.type == '1'}">
                            <img src="${basepath }/images/right.png"/>
                        </c:if>
                    </c:when>
                    <%-- 当具有查看权限时才显示该条菜单记录 by LTC 20130416 LMSWD-2200 --%>
                </c:choose>
             </td>
             
       
             </tr>
         </c:forEach>
        </c:if>
        
        <!-- ########################################################################################################################## -->
        
        <c:if test="${flag == '0' }">
         <input name="roleId" type="hidden" value="${rId}"/>
         <input name="menuId" type="hidden" value="${mId}"/>
         <tr class="gradeA"> 
             <td>${menu.name }<input id="${menu.mId }" type="hidden" value="${menu.mId }"></td>
             <!-- 查看 -->
             <td class="pl10">
                <input id="${menu.mId }inquiry" name="inquiry" type="checkbox" value="0" class="checkbox inquiry"/>
             </td>
             <!-- 增加 -->
             <!--  
             <td class="pl10">
                <input id="${menu.mId }" name="add" type="checkbox" value="0" class="checkbox add"/>
             </td>
             -->
             <!-- 修改 -->
             <!--  
             <td class="pl10">
                <input id="${menu.mId }" name="modify" type="checkbox" value="0" class="checkbox modify"/>
             </td>
             -->
             <!-- 删除 -->
             <!--  
             <td class="pl10">
                <input id="${menu.mId }" name="delete" type="checkbox" value="0" class="checkbox delete"/>
             </td>
             -->
         </tr>        
        </c:if>       
     </tbody>
</table>
<script type="text/javascript">       //勾选增删改时自动勾选查, 并将checkbox的值置为1
$(function(){		
    $(".inquiry").live('click', function(){
        if(this.checked){
            $(this).val(1);
        }
        else{
            $(this).val(0);
        }
    });
    
    $(".add").live('click', function(){
        var id = $(this).attr("id");
        if(this.checked){
            $("#"+id+"inquiry").attr("checked",true);
            $("#"+id+"inquiry").val(1);
            $(this).val(1);
        }
        else{
            $(this).val(0);
        }
    });
    
    $(".modify").live('click', function(){
        var id = $(this).attr("id");
        if(this.checked){
            $("#"+id+"inquiry").attr("checked",true);
            $("#"+id+"inquiry").val(1);
            $(this).val(1);
        }
        else{
            $(this).val(0);
        }
    });
    
    $(".delete").live('click', function(){
        var id = $(this).attr("id");
        if(this.checked){
            $("#"+id+"inquiry").attr("checked",true);
            $("#"+id+"inquiry").val(1);
            $(this).val(1);
        }
        else{
            $(this).val(0);
        }
    });
});
</script>
