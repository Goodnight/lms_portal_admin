<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
 	<div class="companylist w164 h455 newtree2">
     		<div class="creatlesson">
     			<h2 class="png_bg organize_h2">组织部门</h2>
         	</div>
			<div id="dialog_orgtree" class="demo mt20"></div>   
    </div>
</div>
<div class="y w780 ">
   	<div class="ngreyborder h470 scroll">
    	<h2 class="png_bg">${dep.tc.name }--名额指配</h2>
  		<div class="choosedcourse" style="margin-top:40px;">	
         	<div class="mt20">
         		<span class="mr10 ml13">员工编号： <input type="text" id="dialog_search_sn" nam="dialog_search_sn" class="input" style="border:1px solid;"/></span>
         		<span class="mr10">员工姓名： <input type="text" id="dialog_search_name" name="dialog_search_name" class="input" style="border:1px solid;"	/></span>
         		<span class="ml30">包含子部门：<select id="ischilddep" name="ischilddep"><option value="0">包含</option><option value="1">不包含</option></select></span>
         		<input type="hidden" id="dialog_search_org" />
         	</div>
            <div align="right"><input type="button" onclick="userPage(1)" class="searchbutton m10" value="搜索"/></div>
         </div>
         <div class="choosedcourse">
         	<ul class="png_bg">
                <li class="now">员工列表</li>
            </ul>
            <div id="list_users"></div>
         </div>
         <div class="choosedcourse">
         	<ul class="png_bg">
                <li class="now">已选员工</li>
            </ul>
            <div id="list_students"></div>
             <div class="makesure">
            	<input type="button" class="step cls_ok" value="确定" id="choosepersonsure2"/>
            </div>
         </div>
    </div>
</div>
    <script type="text/javascript">
    	var tcdid = "${dep.tcdId}";
    	var depid = "${dep.dep.orgId}";
    	var tcid = "${dep.tc.tcId}";
    	
    	$(function(){
    		studentPage(1);
    		
    		initTree("#dialog_orgtree",userdeppath,userdeppath,"org",function(type,id,name){
    			$("#dialog_search_org").val(id);
    			userPage(1);
    		});
    		
    		$(".cls_ok").click(function(){
    			assignPage(1);
    			$("#dialog").hide();
    		});
    	});
    	
    	function add(obj){
    		if($(obj).attr("checked")=="checked"){
    			var uid = $(obj).attr("id");
       			var url = basepath+"/trainclass/addstudent.html";
       			var param = "from=assign&applyWay=3&tcdid="+tcdid+"&pid="+tcid+"&id="+uid+"&name="+encodeURI($(obj).attr("username"));
       			$.ajax({
       				url : url,
       				type : 'post',
       				async:false,
       				data : param,
       				dataType : 'json',
       				success : function(data){
       					if(data.code == "checknum" || data.code=="error"){
       						$.dialog.alert(data.content);
       						$(obj).attr("checked",false);
       					}else{
       						$.dialog.tips('添加人员成功',1,'tips.gif');
    	   					studentPage(1);
       					}
       				}
       			});
    		};
    	}
    	
    	function remove(obj){
    		var id = $(obj).attr("id");
   			var url = basepath+"/trainclass/setStudent.html";
   			var param = "type=delete&id="+id;
   			$.ajax({
   				url : url,
   				type : 'post',
   				data : param,
   				dataType : 'json',
   				success : function(data){
   					userPage(1);
   					studentPage(1);
   				}
   			});
    	}
    	
    	function userPage(i){
    		$.dialog.tips('数据加载中...',600,'loading.gif');
    		var max = $("#list_users .page_max").val()?$("#list_users .page_max").val():10;
    		var sn = $("#dialog_search_sn").val();
    		var name = $("#dialog_search_name").val();
    		var orgid = $("#dialog_search_org").val();
    		var ischilddep = $("#ischilddep").val();
    		var query = "&ischilddep="+ischilddep;
    		if(sn!=null&&sn!=""){
    			query+="&sn="+sn;
    		}
    		if(name!=null&&name!=""){
    			query+="&name="+encodeURI(name);
    		}
    		if(orgid!=null&&orgid!=""){
    			query+="&orgid="+orgid;
    		}
    		var url = basepath+"/list/user.html?from=upclass&pagefn=userPage&page="+i+"&max="+max+"&r="+Math.random();
    		$("#list_users").load(encodeURI(url+query),function(){
    			$.dialog.tips('数据加载完毕',1,'tips.gif');
    			$("#list_users .page_max").change(function(){
    				userPage(1);
    			});
    		});
    	}
    	
    	function studentPage(i){
    		var max = $("#list_students .page_max").val()?$("#list_students .page_max").val():10;
    		var url = basepath+"/list/student.html?from=upclass&pagefn=studentPage&page="+i+"&max="+max+"&depid="+depid+"&applyway=3&tcid="+tcid+"&r="+Math.random();
    		$("#list_students").load(url,function(){
    			$.dialog.tips('数据加载完毕',1,'tips.gif');
    			$("#list_students .page_max").change(function(){
    				studentPage(1);
    			});
    		});
    	}
    </script>