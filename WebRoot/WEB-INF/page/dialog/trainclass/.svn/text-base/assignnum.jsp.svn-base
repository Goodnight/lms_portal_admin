<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%><%@ 
	include file="/WEB-INF/page/include/taglibs.jsp"%>
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
         		<h2 class="png_bg">部门名额指派</h2>
	              <div class="scroll choosedcourse">
	              	<ul class="png_bg">
	                     <li class="now">已指定的部门</li>
	                 </ul>
	                 <table  class="datatable"  border="0" cellspacing="0" cellpadding="0" width="100%">
	                 	<thead>
	                     	<tr>
	                         	<th>&nbsp;</th>
	                         	<th>部门名称</th>
	                         	<th>指派人数</th>
	                         </tr>
	                     </thead>
	                     <tbody id="dialog_choosedDepNum"></tbody>
	        			 </table>
	                 <div class="makesure">
	                 	<input id="btn_save_depnum" type="button" class="back" value="确定"/>
	                 </div>
	              </div>
         </div>
     </div>
       	<script type="text/javascript">
       		var tcid="${tcid}";
       		$(function(){
       			initTree("#dialog_orgtree",null,null,"org",function(type,id,name){
       				var ids = $("input[name=choosedorg]");
					var isExist = false;
					for(j=0;j<ids.length;j++){
						var choosedid = $(ids[j]).attr("id");
						if(id == choosedid){
							isExist = true;
							break;
						}
					}
					if(!isExist){
						var newTR = "<tr><td><input type='button' name='choosedorg' class='removebutton' id='"+id+"' onclick='removeChoosedDepNum(this)'/></td>"
							+"<td>"+name+"</td>"
							+"<td><input type='text' class='inputtext inputtext2' name='num' value='0' /></td></tr>";
						$("#dialog_choosedDepNum").append($(newTR));
					}
       			});
       			
       			//向服务器中保存指定的部门人数
       			$("#btn_save_depnum").click(function(){
       				var url = basepath+"/trainclass/setDepartment.html";
       				var param = "tcid="+tcid+"&operation=save&status=num&r="+Math.random();
       				var ids = $("input[name=choosedorg]");
       				var nums = $("input[name=num]");
       				for(i=0;i<ids.length;i++){
       					var id = $(ids[i]).attr("id");
       					var num = $(nums[i]).val();
       					param+="&id="+id+"&num="+num;
       				}
       				$.ajax({
       					url:url,
       					type:"post",
       					data:param,
       					dataType:"json",
       					success:function(msg){
       						if(msg.code=="checknum"){
       							$.dialog.alert(msg.content);
       						}else{
	   							$.dialog.tips("添加成功",2,"tips.gif");
	   							assignNumPage(1);
	   							$("#dialog").hide();
       						}
       					},
       					error:function(){
       						$.dialog.tips("添加失败",2,"tips.gif");
       					}
       				});
       			});
       			
       		});
       		
       		//移除已经选择的部门人数
       		function removeChoosedDepNum(obj){
				$(obj).parent().parent().remove();
       		}
       		
       	</script>