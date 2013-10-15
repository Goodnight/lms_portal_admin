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
        <h2 class="png_bg">选择人员</h2>
        <div class="scroll h400 mt20">
        	<form id="query_form">
                <div class="searchblock m10">
                    <table>
                        <tr>
                            <td class="taR">员工姓名</td>
                            <td class="taL">
                                <input type="text" class="input" id="dialog_search_name"/>
                                <input type="hidden" id="dialog_search_org" />
                            </td>
                            <td class="taR">员工编号</td>
                            <td class="taL"><input type="text" class="input" name="dialog_search_sn" id="dialog_search_sn"/></td>
                            <td><input id="query" type="button" class="searchbutton mr10" value="搜索"  /></td>
                          </tr>
                      </table>
                  </div>
                 </form>
                <div class="choosedcourse" style="margin-top:20px;">
                      <ul class="png_bg">
                          <li class="now">员工列表</li>
                      </ul>
                      <div id="list_user" class="dataTables_wrapper mt10"></div>
                </div>
         </div>
         <div class="taR m10"><input id="urId" type="hidden" value="${urId }" /><a href="#" class="step mr10 cls_ok turnStaff">确定</a></div>
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
            var urId = $("#urId").val();
            var userId = $("input[name=uid]:checked").val();
            var param = "urId="+urId+"&userId="+userId;
            $.ajax({
                url : basepath +"/auth/saveStaff.html",
                type : "POST",
                data : param,
                dataType : "json",
                success : function(data){
                    page(1);
                },
                error:function(){
                    alert("移交出错");
                    page(1);
                }
            });
            $("#dialog").hide();
        });
        
        $("#query").click(function(){
            userpage(1);
        });
    });
    
    function userpage(i){
        $.dialog.tips('数据加载中...',600,'loading.gif');
        var max = $("#list_user .page_max").val()?$("#list_user .page_max").val():10;
        var sn = $("#dialog_search_sn").val();
        var name = $("#dialog_search_name").val();
        var orgid = $("#dialog_search_org").val();
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
        var url = basepath + "/list/user.html?from=common_radio&pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+query;
        $("#list_user").load(encodeURI(url),function(){
            $.dialog.tips('数据加载完毕',1,'tips.gif');
            //选择每页记录数量
            $("#list_user .page_max").change(function(){
                userpage(1);
            });
        });
        
    }
</script>
