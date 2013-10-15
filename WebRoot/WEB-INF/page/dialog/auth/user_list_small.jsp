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
        <h2 class="png_bg">员工</h2>
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
                <div class="choosedcourse">
                    <ul class="png_bg">
                        <li class="now">已选员工</li>
                    </ul>
                    <div class="dataTables_wrapper mt10">
                        <table id="datatable1"  class="datatable" width="100%">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th class="sorting">所在部门</th>
                                    <th class="sorting" >员工编号</th>
                                    <th class="sorting" >员工姓名</th>
                                </tr>
                            </thead>
                        <tbody id="list_user_choosed"></tbody>
                     </table>
                     </div>
                 </div>
         </div>
         <div class="taR m10 pr"><a href="#" class="step mr10 cls_ok windowbutton">确定</a></div>
    </div>
</div>

<script type="text/javascript">
    var close = "${param.close}";
    $(function(){
        //初始化列表
        userpage(1);
        $("#dialog_orgtree").jstree({
            "plugins":["themes","json_data","ui"],
            "json_data":{
                "ajax" : {
                    "url" : basepath+"/list/org4jstree.html",
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
            var ids = $("input[name=chooseduser]");
            var names = $("input[name=username]");
            if(ids.length>0){
                var param = "pid="+pid;
                for(n=0;n<ids.length;n++){
                    param += "&id="+$(ids[n]).attr("id")+"&name="+$(names[n]).val();
                }
                $.ajax({
                    url : userurl,
                    type : "POST",
                    data : encodeURI(param),
                    dataType : "json",
                    success : function(data){
                        $.dialog.tips("添加成功",2,"tips.gif");
                        page(1);
                        if(close=="false"){
                        }else{
                            $("#dialog").hide();
                        }
                    },
                    error : function(){
                        $.dialog.tips("添加失败",2,"tips.gif");
                        $("#dialog").hide();
                    }
                });
            }else{
                $("#dialog").hide();
            }
        });
        
        $("#query").click(function(){
            userpage(1);
        });
        
        $(".cls_dlg_user").die("click");
        $(".cls_dlg_user").live("click",function(){
			if($(this).attr("checked") == "checked"){
				add(this);
			}else{
				remove($(this).val());
			}
		});
    });
    
    //添加人员
    function add(obj){
        var newTr = "<tr><td>"
                            +"<input type='button' class='removebutton' id='"+$(obj).val()+"' name='chooseduser' onclick='remove(\""+$(obj).val()+"\")'/>"
                            +"<input type='hidden' name='username' value='"+$(obj).attr("username")+"'/>"
                            +"</td>"
                            +"<td>"+$(obj).parent().next().text()+"</td>"
                            +"<td>"+$(obj).parent().next().next().text()+"</td>"
                            +"<td>"+$(obj).parent().next().next().next().text()+"</td></tr>";
        $(obj).attr("checked",true);
        $("#list_user_choosed").append($(newTr));
    }
    
    //移除人员
    function remove(v){
        var cbList = $("input:checkbox[name=userid]:checked");
        for(i=0;i<cbList.length;i++){
            var cb = cbList[i];
            if($(cb).val()==v){
                $(cb).attr("checked",false);
            }
        }
        $("#"+v).parent().parent().remove();
    }
    
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
        var url = basepath + "/list/user.html?from=common&pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+query;
        $("#list_user").load(encodeURI(url),function(){
            $.dialog.tips('数据加载完毕',1,'tips.gif');
            $("#list_user .page_max").change(function(){
                userpage(1);
            });
            //禁用已经选择的选项
            var cbList = $("input:checkbox[name=userid]");
            var ctList = $("input[name=chooseduserid]");
            if(cbList.length>0 && ctList.length>0){
                for(i=0;i<cbList.length;i++){
                    for(j=0;j<ctList.length;j++){
                        var cb = cbList[i];
                        var ct = ctList[j];
                        if($(cb).val() == $(ct).attr("id")){
                            $(cb).attr("checked",true);
                        }
                    }
                }
            }
        });
        
    }
</script>
