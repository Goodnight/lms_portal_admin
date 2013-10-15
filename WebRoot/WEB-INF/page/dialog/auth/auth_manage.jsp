<%@page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div id="authManage">
    <div class="cl">
        <div class="z w176">
            <div class="companylist w164 windowtree" style="padding-top:2px;height:400px;overflow-y:scroll;">            
                <div id="menu_jstree"></div>           
            </div>
        </div>
        <div class="y w750">
            <div class="ngreyborder">
                <h2 class="png_bg">权限管理</h2>
                
                <!-- ############################ 角色查看列表使用  ######################### -->
                <c:if test="${rb.rId != null && rb.rId != '' && userId == null }">
                <form id="saveRoleAuthority" action="${basepath }/auth/saveRoleAuthority.html" method="post" onsubmit="return saveRoleAuthority();">
                <div class="scroll h300 mt20">
                    <div class="dataTables_wrapper mt10">
                        <!-- 动态导入角色的具体权限 -->
                        <div id="list_roleAuthority"></div>
                    </div>              
                </div>
                <div class="taR m10">
                    <!-- LMSWD-2639 by LTC 20130517 只有集团管理员才可以进行保存-->
                    <c:if test="${user.type==1 }"><input type="submit" class="step m10 saveAuth" value="保存"/></c:if>
                    <a type="button" href="javascript:;" class="searchbutton m10 windowbutton shutdown">关闭</a>
                </div>
                </form>
                </c:if>
                
                <!-- ############################ 新建管理人员/角色选择模块使用  ################################## -->
                <c:if test="${rb.rId == null && roleId == null }">
                <form id="newRoleAuthority" action="${basepath }/auth/saveRoleAuthority.html" method="post">
                <div class="scroll h300 mt20">
                    <div class="dataTables_wrapper mt10">
                        <!-- 动态导入角色的具体权限 -->
                        <div id="list_roleAuthority"></div>
                    </div>              
                </div>
                <div class="taR m10">
                    <c:if test="${type == 0 }"><input type="button" class="step m10 showAuth" value="保存"/></c:if>
                    <c:if test="${type == 1 }"><input type="submit" class="step m10 newAuth" value="保存"/></c:if>
                    <a type="button" href="javascript:;" class="searchbutton m10 windowbutton shutdown">关闭</a>
                </div>
                </form>
                </c:if>
                
                <!-- ############################# 修改管理人员列表模块列时使用  ################################ -->
                <c:if test="${roleId != null && roleId != '' }">
                <form id="changeRoleAuthority" action="${basepath }/auth/changeRoleAuthority.html" method="post">
                <div class="scroll h300 mt20">
                    <div class="dataTables_wrapper mt10">
                        <!-- 动态导入角色的具体权限 -->
                        <div id="list_roleAuthority"></div>
                    </div>              
                </div>
                <div class="taR m10">
                   <input type="submit" class="step m10 changeAuth" value="保存"/>
                   <!-- <c:if test="${userId != null && userId != '' }">
                            <input type="button" class="step m10 changeAuth" value="保存"/>
                            <input id="user_id" type="hidden" value="${userId }" />
                            <input id="role_id" type="hidden" value="${roleId }" />
                        </c:if> --> 
                    <a type="button" href="javascript:;" class="searchbutton m10 windowbutton shutdown">关闭</a>
                </div>
                </form>
                </c:if>
            </div>
        </div>
    </div>
</div>

<script type="text/j avascript" src="${basepath }/js/auth/roleManage.js" charset="gbk"></script>
<script type="text/javascript">
$(function(){
    
    //提前加载当前角色在所有菜单的全部权限
    var rId = "${rb.rId }";                //真实角色Id
    if(rId == null || rId == ""){
        rId = "${roleId }";                //虚拟角色Id
    }
    var ini_url = basepath+"/list/auth/roleAuthority.html?rId="+rId+"&r="+Math.random();  //初始载入
    $.dialog.tips("数据加载中...",600,"loading.gif");
    $("#list_roleAuthority").load(encodeURI(ini_url),function(){
        $.dialog.tips("数据加载完毕",1,"tips.gif");
    });
                
    //$(".saveAuth").click(function(){
        
    //});
    
    //$(".newAuth").click(function(){
        //alert("角色新建完毕, 返回角色管理列表");
    //});
    
    $(".shutdown").click(function(){
        $(".blackall").hide();
    });
    
    $(".changeAuth").click(function(){  //修改管理人员列表首页菜单权限
        /* var param = "";
        var user_id = $("#user_id").val();
        var oTable=$(this).parent().parent().find("#datatable").find("tbody").find("tr");
        if(oTable){
            for(i=0;i<oTable.length;i++){
                var id=$(oTable).eq(i).children().eq(0).find("input").attr("id");
                param += "menu_ids="+id+"&";
            }
        }
        if(param!=""){
            param += "&user_id="+user_id;
            var url = basepath+"/auth/saveUserMenu.html";
            $.ajax({
                url: url,
                type : "post",
                data : param,
                dataType : "json",
                success : function(msg){
                    page(1);
                    $.dialog.tips("操作成功",2,"tips.gif");
                },
                error : function(){
                    $.dialog.tips("操作失败",2,"tips.gif");
                }
            });
        }
        $("#dialog").hide();
        $(".blackall").hide(); */
        
        alert("权限修改完毕, 返回管理人员列表");
    });
    
    $("#menu_jstree").jstree({                   //构建左侧菜单模块树
    "plugins":["themes","json_data","ui"],
    "json_data":{
        "ajax" : {
            "url" : basepath+"/list/menu4jstree.html",
            "data" : function(n){
                return {
                    "operation":"",
                    "id":n.attr?n.attr("id"):0
                };
            }
        }
    },
    "ui":{
        "initially_select":[""]
    },
    "core":{
        "initially_open":[""]
    }

    }).bind("select_node.jstree",function(e,data){
        var mId = data.rslt.obj.attr("id");
        var type = data.rslt.obj.attr("type");
        var roleId = rId;
        menuClick(type,mId,roleId);
    });
});

function saveRoleAuthority(){
    // jquery 表单提交  
    $("#saveRoleAuthority").ajaxSubmit(function(message){
        // 对于表单提交成功后处理，message为提交页面saveReport.htm的返回内容  
    });
    alert("权限修改完毕, 可继续操作");
    return false; //必须返回false，否则表单会自己再做一次提交操作，并且页面跳转  
}

function menuClick(type,mId,rId){                //定义点击菜单节点事件
    var url = "";
    if(type == "menu" && rId != null && rId != ""){
        if(null == mId){
            mId = "4028ce8139f6421b0139f6cc655d000a"; //角色初次分配权限默认定位至待办事项
        }
        url = basepath+"/list/auth/roleAuthority.html?mId="+mId+"&rId="+rId+"&r="+Math.random();
        $("#list_roleAuthority").load(encodeURI(url));
    }
    else{
        url = basepath+"/list/auth/newRoleAuthority.html?mId="+mId+"&r="+Math.random();
        $("#list_roleAuthority").load(encodeURI(url));
    }
}
</script>
 