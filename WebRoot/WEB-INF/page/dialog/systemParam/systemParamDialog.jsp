<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="ngreyborder changeblue2">
    <h2 class="png_bg">
    <c:if test="${spb.spId != null && spb.spId != '' }">修改系统参数</c:if><c:if test="${spb.spId == null || spb.spId == '' }">新建系统参数</c:if></h2>
    <div class="basic_information mt2"> 
        <table border="0" cellspacing="10" cellpadding="10">
            <tr>
                <td width="60">分类</td>
                <td>
                    <c:if test="${spb.spId != null && spb.spId != '' }">
                        <input type="text" class="input vm" value="${spb.typeName }" readonly="readonly"/>
                        <input id="paramType" type="hidden" value="${spb.upId }" />
                    </c:if>
                    <c:if test="${spb.spId == null || spb.spId == '' }">
                        <select id="paramType" class="select">
                            <option value="">--请选择--</option>
                            <c:forEach items="${paramList }" var="p">
                                <option value="${p.spId }">${p.name }</option>
                            </c:forEach>
                        </select>
                    </c:if>
                </td>
            </tr>
            <tr>
                <td>参数名</td>
                <td>
                    <input id="paramName" type="text" class="input vm" value="${spb.name }"/>
                    <input id="paramId" type="hidden" value="${spb.spId }" />
                </td>
            </tr>
        </table>
    </div>
    <div class="taR m10">
        <input id="press_ok" type="button" class="step mr10 closebutton" value="确定"/>
    </div>
</div>

<script type="text/javascript">
$(function(){    
    //新建保存系统参数
    $("#press_ok").click(function(){
        var query = "";
        var paramName = $("#paramName").val();
        if(paramName != null && paramName !=""){
            query += "paramName="+paramName;
        }
        else{
            alert("参数名称不能为空,保存失败!");
        }
        var paramType = $("#paramType").val();
        if(paramType != null && paramType != ""){
            query += "&paramType="+paramType;
        }
        else{
            alert("参数类型不能为空,保存失败!");
        }
        var paramId = $("#paramId").val();
        if(paramId != null && paramId != ""){
            query += "&paramId="+paramId;
        }
        $.ajax({
            url : basepath+"/systemParam/newSystemParam.html",
            type : "POST",
            data : query,
            dataType : "json",
            success : function(data){
                $("#dialog").hide();
                if(data == null){
                    $.dialog.alert("添加数据为空");
                }else{
	                page(1);
                }
            },
            error:function(){
                $.dialog.alert("数据添加失败");
            }
        });
    });
});
</script>
