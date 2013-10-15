<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
 	<div class="companylist w164 h455 newtree2">
 			<ul class="listnav reHeight treelistnav">
             	<li class="now">组织机构</li>
             	<li>知识分类</li>
            </ul>
            <div>
				<div id="dialog_orgtree" class="demo mt20"></div>
				<div id="dialog_knotree" class="demo mt20 hidden"></div>
            </div>
    </div>
</div>
<div class="y w780">
	<div class="ngreyborder h470">
     	<h2 class="png_bg">课程添加</h2>
         <div class="scroll h400 mt20">
             <div class="searchblock mt10 pr">
	             <table border="0" cellspacing="0" cellpadding="0">
			         	<tbody>
			             	<tr>
			                 	<td class="taR">课程名称</td>
			                 	<td>
			                 		<input id="dialog_search_cwname" type="text" class="input" />
			                 		<input type="hidden" id="dialog_search_org" value="" />
			                 		<input type="hidden" id="dialog_search_kno" value="" />
			                 	</td>
			                     <td  class="taL">课程编号</td>
			                 	<td><input id="dialog_search_cwsn" type="text" class="input" /></td>
			                 </tr>
			                 <tr>
			                 	<td class="taR">标签</td>
			                 	<td colspan="3"  class="taL">
			                 		<input type="text" id="dialog_search_tag"  value="" class="input"/>
			                 	</td>
			                 </tr>
			                 <tr>
			                     <td class="taR">创建日期</td>
			                 	<td colspan="3"  class="taL">
			                 		<input id="dialog_search_startdate" type="text" class="timetext cls_date" /> 
			                 		到 
			                 		<input id="dialog_search_enddate" type="text" class="timetext cls_date" />
			                 	</td>
			                 </tr>
			             </tbody>
	    			 </table>
		              <div align="right" class="m10"><input id="dialog_search" type="button" class="searchbutton" value="搜索" hidefocus="true"/></div>
	    		</div>
	    		<div class="courselist">
		             <ul class="png_bg">
		                 <li class="now">课程列表</li>
		             </ul>
		             <div id="onlineCourse_list"></div>
		     	</div>
		     	
		     	<div class="choosedcourse">
		          	<ul class="png_bg">
		                 <li class="now">已选课程</li>
		             </ul>
		             <table id="datatable1" class="datatable" border="0" cellspacing="0" cellpadding="0" width="100%">
			         	<colgroup>
			             	<col width="130" />
			                 <col width="200" />
			                 <col width="200" />
			                 <col width="200" />
			                 <col width="150" />
			             </colgroup>
			             	<thead>
			                 	<tr>
			                     	<th>&nbsp;</th>
			                     	<th>课程编号</th>
			                         <th>课程名称</th>
			                         <th>创建公司</th>
			                         <th>学时</th>
			                     </tr>
			                 </thead>
			                 <tbody id="choosedCourse"></tbody>
		    			</table>
		          </div>
         </div>
         <div class="taR m10"><a href="#" class="cls_ok step mr10 newcoursebutton">确定</a></div>
     </div>
</div>
<script type="text/javascript">
	var tcid="${tcid}";
	$(function(){
		$(".cls_date").datepicker({
			showOn:"button",
			changeMonth: true,
			buttonImage:basepath+"/images/calendar.gif",
			buttonImageOnly:true,
			dateFormat:"yy-mm-dd"
		});
		
		initTree("#dialog_orgtree",userdepid,userdeppath,"org_only",function (type,id,name){
			$("#dialog_search_org").val(id);
			diaogPageCW(1);
		});
		
		initTree("#dialog_knotree",["0"],["0"],"kno",function (type,id,name){
			$("#dialog_search_kno").val(id);
			diaogPageCW(1);
		});
		
		$("#dialog_search").click(function(){
			diaogPageCW(1);
		});
		
		
		//提交保存数据
		$(".cls_ok").click(function(){
			var ids = $("input[name=choosedCourse]");
			if(ids.length>0){
				var param = "method=add&res=online&tcid="+tcid;
				for(n=0;n<ids.length;n++){
					param += "&id="+$(ids[n]).attr("id");
				}
				var url = basepath + "/trainclass/setCourse.html";
				$.ajax({
					url : url,
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						<c:if test="${cwtype == 0 }">onlinePage(1);</c:if>
						<c:if test="${cwtype == 1 }">livePage(1);</c:if>
						$("#dialog").hide();
					},
					error : function(){}
				});
			}else{
				$("#dialog").hide();
			}
		});
	});
	
	//添加课程
	function add(obj){
		var newTr = "<tr class='gradeA even'><td><input type='button' class='removebutton' id='"+$(obj).val()+"' name='choosedCourse' onclick='javascript:remove(this);'/></td>"
							+"<td>"+$(obj).parent().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().next().next().text()+"</td></tr>";
		$(obj).attr("checked",true);
		$(obj).attr("disabled",true);
		$("#choosedCourse").append($(newTr));
		$.uniform.update();
	}
	
	//移除课程
	function remove(obj){
		var cbList = $("input:checkbox[name=cId]:checked");
		for(i=0;i<cbList.length;i++){
			var cb = cbList[i];
			if($(cb).val()==$(obj).attr("id")){
				$(cb).attr("checked",false);
				$(cb).attr("disabled",false);
			}
		}
		$(obj).parent().parent().remove();
		$.uniform.update();
	}
	
	/**
	 * 在线课程列表分页函数
	 * 如果只是加载列表用$().load(url,fn)方法;
	 * 	url是请求地址，fn是回调函数
	 *	pagefn是分页回调函数名称，page是需要跳转到的页码, r是随机数防止页面缓存
	 */
	function diaogPageCW(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		<c:if test="${cwtype eq '0' }"> var cwtype = 0;</c:if>
		<c:if test="${cwtype eq '1' }"> var cwtype = 1;</c:if>
		var max = $("#onlineCourse_list .page_max").val()?$("#onlineCourse_list .page_max").val():10;
		var name = $("#dialog_search_cwname").val();
		var sn = $("#dialog_search_cwsn").val();
		var org = $("#dialog_search_org").val();
		var kno = $("#dialog_search_kno").val();
		var tag = $("#dialog_search_tag").val();
		var startdate = $("#dialog_search_startdate").val();
		var enddate = $("#dialog_search_enddate").val();
		var url = basepath + "/list/courseware.html?from=tcdialog1&pagefn=diaogPageCW&page="+i+"&max="+max+"&cwtype="+cwtype+"&isSub=1&isChildKnowledge=1&r="+Math.random();
		var query = "";
		if(name!=""){
			query += "&name="+name;
		}
		if(sn!=""){
			query+="&sn="+sn;
		}
		if(org!=""){
			query+="&orgDepId="+org;
		}
		if(kno!=""&&kno!="0"){
			query+="&knowledgeId="+kno;
		}
		if(tag!=""){
			query+="&tag="+tag;
		}
		if(startdate!=""){
			query+="&startDt="+startdate;
		}
		if(enddate!=""){
			query+="&endDt="+enddate;
		}
		$("#onlineCourse_list").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			$("#onlineCourse_list .page_max").change(function(){
				diaogPageCW(1);
			});
			//禁用已经选择的选项
			var cbList = $("input:checkbox[name=cId]");
			var ctList = $("input[name=choosedCourse]");
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
		});
		
	}
</script>