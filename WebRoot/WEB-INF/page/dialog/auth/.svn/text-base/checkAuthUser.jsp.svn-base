<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
    <div class="companylist w164 h455 newtree2">
            <div class="creatlesson">
                <div class="pr"><h2 class="png_bg organize_h2">组织部门</h2></div>
            </div>
            <div id="dialog_orgtree" class="demo mt20"></div>   
    </div>
</div>
<div class="y w780">
    <div class="ngreyborder h470">
        <h2 class="png_bg">角色用户</h2>
        <div class="scroll h400 mt20">
                <div class="searchblock m10">
                    <table>
                        <tr>
                            <td class="taR">员工姓名</td>
                            <td class="taL">
                                <input type="text" class="input" id="dialog_search_name"/>
                                <input type="hidden" id="dialog_search_org" />
                            </td>
                            <td class="taR">员工编号</td>
                            <td class="taL"><input type="text" class="input" id="dialog_search_sn"/></td>
                            <td><input id="query" type="button" class="searchbutton mr10" value="搜索"  /></td>
                          </tr>
                      </table>
                  </div>
                <div class="choosedcourse" style="margin-top:20px;">
                      <input id="rId" type="hidden" value="${rb.rId }" />
                      <ul class="png_bg">
                          <li class="now" style="width:190px">${rb.name }角色用户列表</li>
                      </ul>
                      <div id="list_user_auth" class="dataTables_wrapper mt10"></div>
                </div>
         </div>
         <div class="taR m10"><a href="#" class="step mr10 cls_ok turnStaff">确定</a></div>
    </div>
</div>

<script type="text/javascript">

    $(function(){
        initTree("#dialog_orgtree",userdeppath,userdeppath,"org",function (type,id,name){
            $("#dialog_search_org").val(id);
            userpage(1);
        });
        
        //提交保存数据
        $(".cls_ok").click(function(){
            $("#dialog").hide();
        });
        
        $("#query").click(function(){
            userpage(1);
        });
    });
    
    function userpage(i){
        $.dialog.tips('数据加载中...',600,'loading.gif');
        var max = $("#list_user_auth .page_max").val()?$("#list_user_auth .page_max").val():10;
        var sn = $("#dialog_search_sn").val();
        var name = $("#dialog_search_name").val();
        var orgid = $("#dialog_search_org").val();
        var rId = $("#rId").val();
        var query = "&ischilddep=0";
        if(sn!=null&&sn!=""){
            query+="&sn="+sn;
        }
        if(name!=null&&name!=""){
            query+="&name="+encodeURI(name);
        }
        if(orgid!=null&&orgid!=""){
            query+="&orgid="+orgid;
        }
        if(rId!=null&&rId!=""){
            query+="&rId="+rId;
        }
        var url = basepath + "/list/auth/checkAuthUser.html?pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+query;
        $("#list_user_auth").load(encodeURI(url),function(){
            $.dialog.tips('数据加载完毕',1,'tips.gif');
            //选择每页记录数量
            $("#list_user_auth .page_max").change(function(){
                userpage(1);
            });
        });  
    }
</script>
