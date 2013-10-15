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
   		<h2 class="png_bg">文档案例添加</h2>
         <div class="scroll h400 mt20">
             <div class="searchblock mt10 pr">
	             <table border="0" cellspacing="0" cellpadding="0">
			         	<tbody>
			             	<tr>
			                 	<td class="taR">文档案例名称</td>
			                 	<td>
			                 		<input id="dialog_search_name" type="text" class="input" />
			                 		<input type="hidden" id="dialog_search_org" value="" />
			                 		<input type="hidden" id="dialog_search_kno" value="" />
			                 	</td>
			                     <td class="taL">文档案例编号</td>
			                 	<td><input id="dialog_search_sn" type="text" class="input" /></td>
			                 </tr>
			                 <tr>
			                 	<td class="taR">标签</td>
			                 	<td colspan="3"  class="taL">
			                 		<input type="text" id="dialog_search_tag"  value="" class="input"/>
			                 	</td>
			                 </tr>
			                 <tr>
			                    <td  class="taR">创建日期</td>
			                 	<td colspan="3" class="taL">
			                 		<input type="text" id="dialog_search_startdate" class="timetext cls_date" /> 
			                 		到
			                 		 <input type="text" id="dialog_search_enddate" class="timetext cls_date" />
			                 	</td>
			                 </tr>
			             </tbody>
	    			 </table>
	              	<div align="right" class="m10"><input id="dialog_search_doc" name="" type="button" class="searchbutton" value="搜索" hidefocus="true"/></div>
         		</div>
         		<div class="courselist">
		             <ul class="png_bg">
		                 <li class="now">列表</li>
		             </ul>
		             <div id="doc_list"></div>
		     	</div>
		     	
		     	<div class="choosedcourse">
		          	<ul class="png_bg">
		                 <li class="now">已选</li>
		             </ul>
		             <table class="datatable" border="0" cellspacing="0" cellpadding="0" width="100%">
			         	<colgroup>
			             	<col width="130" />
			                 <col width="200" />
			                 <col width="200" />
			                 <col width="200" />
			                 <col width="200" />
			             </colgroup>
		             	<thead>
		                 	<tr>
		                     	<th>&nbsp;</th>
		                     	<th>编号</th>
		                         <th>名称</th>
		                         <th>类型</th>
		                         <th>创建公司</th>
		                     </tr>
		                 </thead>
		                 <tbody id="choosedDoc"></tbody>
	    			 </table>
		          </div>
         </div>
         <div class="taR m10"><a href="#" class="cls_ok step mr10">确定</a></div>
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
		
		//设置选择部门
		initTree("#dialog_orgtree",userdeppath,userdeppath,"org_only",function (type,id,name){
			$("#dialog_search_org").val(id);
			page(1);
		});
		
		initTree("#dialog_knotree",["0"],["0"],"kno",function (type,id,name){
			$("#dialog_search_kno").val(id);
			page(1);
		});
		
		$("#dialog_search_doc").click(function(){
			page(1);
		});
		
		//提交保存数据
		$(".cls_ok").click(function(){
			var ids = $("input[name=choosedDoc]");
			if(ids.length>0){
				var param = "method=add&res=doc&tcid="+tcid;
				for(i=0;i<ids.length;i++){
					param += "&id="+$(ids[i]).attr("id");
				}
				var url = basepath + "/trainclass/setCourse.html";
				$.ajax({
					url : url,
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						docPage(1);
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
		var newTr = "<tr class='gradeA even'><td><input type='button' class='removebutton' id='"+$(obj).val()+"' name='choosedDoc' onclick='javascript:remove(this);'/></td>"
							+"<td>"+$(obj).parent().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().next().next().next().next().text()+"</td></tr>";
		$(obj).attr("checked",true);
		$(obj).attr("disabled",true);
		$("#choosedDoc").append($(newTr));
	}
	
	//移除课程
	function remove(obj){
		var cbList = $("input:checkbox[name=rdId]:checked");
		for(i=0;i<cbList.length;i++){
			var cb = cbList[i];
			if($(cb).val()==$(obj).attr("id")){
				$(cb).attr("checked",false);
				$(cb).attr("disabled",false);
			}
		}
		$(obj).parent().parent().remove();
	}
	
	/**
	 * 	文档列表分页函数
	 * 	如果只是加载列表用$().load(url,fn)方法;
	 * 	url是请求地址，fn是回调函数
	 *	pagefn是分页回调函数名称，page是需要跳转到的页码, r是随机数防止页面缓存
	 */
	function page(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#doc_list .page_max").val()?$("#doc_list .page_max").val():10;
		var name = $("#dialog_search_name").val();
		var sn = $("#dialog_search_sn").val();
		var org = $("#dialog_search_org").val();
		var kno = $("#dialog_search_kno").val();
		var tag = $("#dialog_search_tag").val();
		var startdate = $("#dialog_search_startdate").val();
		var enddate = $("#dialog_search_enddate").val();
		var url = basepath + "/list/doc.html?from=tcdialog1&pagefn=page&page="+i+"&max="+max+"&isSub=1&isChildKnowledge=1&r="+Math.random();
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
		$("#doc_list").load(encodeURI(url+query),function(){
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//禁用已经选择的选项
			var cbList = $("input:checkbox[name=rdId]");
			var ctList = $("input[name=choosedDoc]");
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