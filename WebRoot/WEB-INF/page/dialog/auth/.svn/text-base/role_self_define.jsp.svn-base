<%@page language="java" contentType="text/html; charset=UTF-8" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div id="roleSelfDefine">
    <div class="ngreyborder changeblue2 mt20">
        <h2 class="png_bg">自定义角色<!--修改角色--></h2>
        <div class="basic_information mt2">
            <table border="0" cellspacing="15" cellpadding="15">
                <colgroup>
                    <col width="90" />
                </colgroup>
                <tbody>
                    <tr>
                        <td class="taR"><em>*</em>角色编号</td>
                        <td colspan="3">
                            <input name="sn" id="snId" type="text" class="input vm si" value="${rb.sn}"/>
                            <input id="rId" type="hidden" value="${rb.rId}"/>
                        </td>
                    </tr>
                    <tr>
                        <td class="taR"><em>*</em>角色名称</td>
                        <td colspan="3"><input name="name" id="rolenameId" type="text" class="input vm si" value="${rb.name}"/></td>
                    </tr>
                    <tr>
                        <td class="taR vt">说明</td>
                        <td colspan="3"><textarea name="remark" id="remarkId" cols="" rows="">${rb.remark}</textarea></td>
                    </tr>
                </tbody>
            </table>

            <div align="right" class="mr10" >
                <input name="" type="button" class="step m10 windowbutton confirm" value="保存"/>
                <input name="" type="hidden" class="step longstep m10 save" value="保存并设置权限"/>
                <input id="close" type="button" class="back m10 windowbutton" value="关闭"/>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
$(function(){
    //关闭弹出窗口
    $("#close").click(function(){
        $("#dialog").hide();
    });
    
    //保存自定义角色信息
    $(".confirm").click(function(){
        var query = "";
        var name = $("#rolenameId").val();
        if(name != null && name != ""){
            query += "name="+name;
        }
        if($("#rolenameId").val() == ""){
            alert("姓名不能为空,请重新输入!");
            $("#rolenameId").focus();
            return false;
        }
        /////////////////////////////
        var rId = $("#rId").val();
        if(rId != null && rId != ""){
            query+= "&rId="+rId;
        }
        /////////////////////////////
        var sn = $("#snId").val();
        if(sn != null && sn != ""){
            query += "&sn="+sn;
        }
        if($("#snId").val() == ""){
            alert("编号不能为空,请重新输入!");
            $("#snId").focus();
            return false;
        }
        /////////////////////////////
        var remark = $("#remarkId").val();
        if(remark != null && remark !=""){
            query += "&remark="+remark;
        }
        /////////////////////////////
        $.ajax({
            url : basepath+"/auth/modifyRoleDefine.html",
            type : "POST",
            data : query,
            dataType : "json",
            success : function(data){
                if(data == null){
                    alert("添加数据为空");
                }else{
                    alert("数据已添加");
                }
            },
            error:function(){
                page(1);
            }
        });
    });
    
    //设置权限
    $(".save").click(function(){
        var query = "";
        var name = $("#rolenameId").val();
        if(name != null && name != ""){
            query += "name="+name;
        }
        var rId = $("#rId").val();
        if(rId != null && rId != ""){
            query+= "&rId="+rId;
        }
        var sn = $("#snId").val();
        if(sn != null && sn != ""){
            query += "&sn="+sn;
        }
        var remark = $("#remarkId").val();
        if(remark != null && remark !=""){
            query += "&remark="+remark;
        }
        $.ajax({
            url : basepath+"/auth/modifyRoleDefine.html",
            type : "POST",
            data : query,
            dataType : "json",
            success : function(data){
                if(data == null){
                    alert("添加数据为空");
                }else{
                    alert("数据已添加");
                }
            },
            error:function(){
                page(1);
            }
        });
        var type = 1; //新建角色设置权限type=1,需表单提交
        var url_2 = basepath+"/dialog/authManage.html?rId="+rId+"&type="+type;
        $("#dialog_content").load(encodeURI(url_2));
        $("#dialog").show();    
        $("#choosepersonco").show();
    });
});
</script>
