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
<div class="y w780">
   	<div class="ngreyborder h470">
       	<h2 class="png_bg">参与人员</h2>
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
                      <ul class="png_bg">
                          <li class="now">员工列表</li>
                      </ul>
                      <div id="list_user" class="dataTables_wrapper mt10"></div>
                </div>
                <div class="choosedcourse">
		         	<ul class="png_bg">
		                <li class="now">已选员工</li>
		            </ul>
		            <div id="list_videouser" class="dataTables_wrapper mt10"></div>
		         </div>
       	 </div>
       	 <div class="taR m10"><a href="#" class="step mr10 cls_ok newpersonbutton">确定</a></div>
    </div>
</div>

<script type="text/javascript">
	var vid = "${vid}";
	$(function(){
		//初始化列表
		videoUserPage(1);
		
		initTree("#dialog_orgtree",null,null,"org",function (type,id,name){
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
		
		//批量添加
		$(".dialog_user_chooseall").die("click");
		$(".dialog_user_chooseall").live("click",function(){
			var checked = $(this).attr("checked");
			var objs = $("input[name=userid]");
			if(checked == "checked"){
				var params = "pid="+vid;
				for(i=0;i<objs.length;i++){
					params+="&id="+$(objs[i]).val()+"&name="+$(objs[i]).attr("username");
					$(objs[i]).attr("checked","checked");
				}
				$.ajax({
					url : basepath+"/videoclass/user/add.html",
					type : "POST",
					data : encodeURI(params),
					dataType : "json",
					success : function(data){
						if(data.code=="checknum"){
							$.dialog.alert(data.content);
						}else{
							$.dialog.tips("添加成功",2,"tips.gif");
							videoUserPage(1);
						}
					},
					error : function(){
						$.dialog.tips("添加失败",2,"tips.gif");
					}
				});
			}
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
		var url = basepath + "/list/user.html?from=common&pagefn=userpage&page="+i+"&max="+max+"&r="+Math.random()+query;
		$("#list_user").load(encodeURI(url),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			$("#list_user .page_max").change(function(){
				userpage(1);
			});
		});
	}
	
	
	function videoUserPage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_videouser .page_max").val()?$("#list_videouser .page_max").val():10;
		var url = basepath+"/videoclass/chooseduser/list.html?vid="+vid+"&pagefn=videoUserPage&page="+i+"&max="+max+"&r="+Math.random();
		$("#list_videouser").load(url,function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			$("#list_videouser .page_max").change(function(){
				videoUserPage(1);
			});
		});
	}
	
	//单个添加
	function add(obj){
		if($(obj).attr("checked")=="checked"){
			var uid = $(obj).val();
			var name = $(obj).attr("username");
			var param = "pid="+vid+"&id="+uid+"&name="+name;
			$.ajax({
				url : basepath+"/videoclass/user/add.html",
				type : "POST",
				data : encodeURI(param),
				dataType : "json",
				success : function(data){
					if(data.code=="checknum"){
						$.dialog.alert(data.content);
					}else{
						$.dialog.tips("添加成功",2,"tips.gif");
						videoUserPage(1);
					}
				},
				error : function(){
					$.dialog.tips("添加失败",2,"tips.gif");
				}
			});
		}
	}
	
	function remove(obj){
		var id = $(obj).attr("id");
		var param = "id="+id;
		$.ajax({
			url : basepath+"/videoclass/user/remove.html",
			type : "POST",
			data : param,
			dataType : "json",
			success : function(data){
				$.dialog.tips("删除成功",2,"tips.gif");
				videoUserPage(1);
			},
			error : function(){
				$.dialog.tips("删除失败",2,"tips.gif");
			}
		});
	}
</script>
