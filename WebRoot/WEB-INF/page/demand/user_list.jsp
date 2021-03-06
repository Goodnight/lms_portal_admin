 <%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="">
	<div class="ngreyborder changeblue2 mt20" >
    	<h2 class="png_bg">选择人员</h2>
  		<div class="choosedcourse" style="margin-top:40px;">
         	<div class="mt20 ml13">
         		<span class="mr10 ml13">员工编号： <input id="sn" type="text" class="input" /></span>
         		<span class="mr10">员工姓名： <input id="name" type="text" class="input" /></span>
         	</div>
            <div align="right"><input id="searchButton" type="button" class="btn btn-info btn-small searchbutton m10" value="搜索"/></div>
         </div>
        
         <div class="choosedcourse">
         <div class="pd5">
             <ul class="nav nav-tabs">
                  <li class="active"><a>员工列表</a></li>
             </ul>
             </div>
            <!-- 导入人员列表 -->
            <div id="list_user" class="pd5"></div>
         </div>
         <div class="choosedcourse pd5">

            <ul class="nav nav-tabs">
                      <li class="active"><a>已选员工</a></li>
                  </ul>
            </div>
            <div class="pd5">
            <table id="datatable2" class="table table-striped table-bordered table-hover datatable" width="100%">
            	<colgroup>
                	<col width="25%" />
                	<col width="25%" />
                    <col width="25%" />
                	<col width="25%" />       
            	</colgroup>
            	<thead>
                	<tr>
                    	<th></th>
                        <th>所在部门</th>
                    	<th>员工编号</th>
                    	<th>员工姓名</th>
                    </tr>
                </thead>
                <tbody id="list_user_choosed"></tbody>
   			 </table>

   			 <div align="right" class="mr10 mb20">
					<input id="org_Id" type="hidden" value="${user.org.orgId }" />
            		<input id="newpersonbutton" type="button" class="btn btn-info btn-small step nchoosepersonbutton cls_ok" value="确定"/>
			 </div>

               </div>
             
         </div>
    </div>
</div>
<script type="text/javascript">
	$(function(){
		//初始化列表
		userpage(1);
		$("#searchButton").click(function(){
		  userpage(1);
		});
		oncekey = true;
		$(".bta").attr("cid","0");
		
		
		//提交保存数据
		$(".cls_ok").click(function(){
			var ids = $("input[name=chooseduser]");
			var names = $("input[name=username]");
			var id = "";
			var name = "";
			if(ids.length>0){
				$("#dialog").hide();
			}else{
				$("#dialog").hide();
			}
		});
	    $(".dialog_user_chooseall").die().live("click",function(){
           var checked = $(this).attr("checked");
           var objs = $("input[name=userid]").not("input:checked");
           if(checked == "checked"){
               for(i=0;i<objs.length;i++){ 
                   add(objs[i]);
               }
           }else{
               var cbList = $("input:checkbox[name=userid]");
               var ctList = $("input[name=chooseduser]");
               if(cbList.length>0 && ctList.length>0){
                   for(i=0;i<cbList.length;i++){
                       for(j=0;j<ctList.length;j++){
                           var cb = cbList[i];
                           var ct = ctList[j];
                           if($(cb).val() == $(ct).attr("id")){
                               $(cb).attr("checked",false);
                               $(cb).attr("disabled",false);
                               $(ct).parent().parent().remove();
                           }
                       }
                   }
               }
           }
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
		var newTr = "<tr ><td class='center'><input type='button' class='btn btn-warning btn-mini removebutton' id='"+$(obj).val()+"' name='chooseduser' onclick='remove(this)' value='移除'/></td>"
							+"<td>"+$(obj).parent().parent().next().text()+"</td>"
							+"<td>"+$(obj).parent().parent().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().parent().next().next().next().text()+"</td><input name='username' type='hidden' value="+$(obj).parent().next().next().next().text()+" /></tr>";
		$(obj).attr("checked",true);
		$(obj).attr("disabled",true);
		$("#list_user_choosed").append($(newTr));
	}
	
	//移除人员
	function remove(obj){
		var cbList = $("input:checkbox[name=userid]:checked");
		for(i=0;i<cbList.length;i++){
			var cb = cbList[i];
			if($(cb).val()==$(obj).attr("id")){
				$(cb).attr("checked",false);
				$(cb).attr("disabled",false);
			}
		}
		$(obj).parent().parent().remove();
	}
	
	function userpage(i){
	    var max = $("#list_user .page_max").val()?$("#list_user .page_max").val():10;
	    var name = $("#name").val();
	    var sn = $("#sn").val();
	    var query = "";
	    if(null!=name && name!=""){
	       query += "&name="+name;
	    }
	    if(null!=sn && sn!=""){
           query += "&sn="+sn;
        }
	    var orgId = $("#org_Id").val();
		var url = basepath + "/list/user.html?from=demand&pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+"&orgId="+orgId+query;
		$("#list_user").load(encodeURI(url),function(){
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
							$(cb).attr("disabled",true);
						}
					}
				}
			}
			//选择每页记录数量
            $("#list_user .page_max").change(function(){
                userpage(1);
            });
		});	
	}
</script>
