<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
    <div class="companylist w164 newtree2 h251">
            <div class="creatlesson">
                <h2 class="png_bg organize_h2">组织部门</h2>
            </div>
            <div id="dialog_orgtree" class="demo mt20 h200"></div>   
    </div>
</div>
<div class="y w720">
    <div class="ngreyborder">
        <h2 class="png_bg">选择人员</h2>
        <div class="mt20 h200">
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
         <div class="taR m10"><a href="#" class="step mr10 cls_ok windowbutton">确定</a></div>
    </div>
</div>

<script type="text/javascript">

    $(function(){
        //初始化列表
        userpage(1);
        $("#dialog_orgtree").jstree({
            "plugins":["themes","json_data","ui"],
            "json_data":{
                "ajax" : {
                    "url" : basepath+"/list/org4jstree.html",
                    "cache":false,
                    "data" : function(n){
                        return {
                            "operation":"",
                            "type":n.attr?n.attr("type"):'org',
                            "id":n.attr?n.attr("id"):0
                        };
                    }
                }
            }
        }).bind("select_node.jstree",function(e,data){
            var id = data.rslt.obj.attr("id");
            var type = data.rslt.obj.attr("type");
            var name = data.rslt.obj.attr("name");
            $("#dialog_search_org").val(id);
            userpage(1);
        });
        
        //提交保存数据
        $(".cls_ok").click(function(){
            var html_id = "${html_id}";
            var html_name = "${html_name}";
            var id = $("input[name=uid]:checked").val();
            var name = $("#"+id).val();
            $("#"+html_id).val(id);
            $("#"+html_name).val(name);
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
