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
       	<h2 class="png_bg">选择培训班</h2>
		<div class="scroll h400 mt20">
              	<div class="searchblock m10">
                  	<table>
                      	<tr>
                          	<td class="taR">培训班名称</td>
                            <td class="taL">
                            	<input type="text" class="input" id="dialog_search_name"/>
                            	<input type="hidden" id="dialog_search_org" />
                            </td>
                            <td><input id="query" type="button" class="searchbutton mr10" value="搜索"  /></td>
                          </tr>
                      </table>
                  </div>
          		<div class="choosedcourse" style="margin-top:20px;">
                      <ul class="png_bg">
                          <li class="now">培训班列表</li>
                      </ul>
                      <div id="list_class" class="dataTables_wrapper mt10"></div>
                </div>
       	 </div>
       	 <div class="taR m10"><a href="#" class="step mr10 cls_ok">确定</a></div>
    </div>
</div>

<script type="text/javascript">

	$(function(){
		classpage(1);
		//初始化列表
		initTree("#dialog_orgtree",null,null,"org",function (type,id,name){
			$("#dialog_search_org").val(id);
			classpage(1);
		});
		
		//提交保存数据
		$(".cls_ok").click(function(){
			var html_id = "${html_id}";
			var html_name = "${html_name}";
			var id = $("input[name=cid]:checked").val();
			var name = $("#"+id).val();
			$("#"+html_id).val(id);
			$("#"+html_name).val(name);
			$("#dialog").hide();
		});
		
		$("#query").click(function(){
			classpage(1);
		});
	});
	
	function classpage(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_class .page_max").val()?$("#list_class .page_max").val():10;
		var name = $("#dialog_search_name").val();
		var orgid = $("#dialog_search_org").val();
		var query = "&isSub=1";
		if(name!=null&&name!=""){
			query+="&name="+encodeURI(name);
		}
		if(orgid!=null&&orgid!=""){
			query+="&orgid="+orgid;
		}
		var url = basepath + "/list/trainclass.html?from=survey&pagefn=classpage&page="+i+"&max="+max+"&r="+Math.random()+query;
		$("#list_class").load(encodeURI(url),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//选择每页记录数量
			$("#list_class .page_max").change(function(){
				classpage(1);
			});
		});
		
	}
</script>
