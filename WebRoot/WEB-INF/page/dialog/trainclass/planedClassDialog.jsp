<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="z w176">
 	<div class="companylist w164 h455 newtree2">
     		<div class="creatlesson">
     			<div class="pr"><h2 class="png_bg organize_h2">组织部门</h2></div>
         	</div>
			<div id="dialog_orgtree" class="demo mt20"></div>   
    </div>
</div>
<div class="y w780 scroll">
	<div class="ngreyborder" style="background:#fff;">
		<h2 class="png_bg">选择计划中培训班</h2>
	     <div class="choosedcourse" style="margin-top:40px;">
	     	<ul class="png_bg">
	            <li class="now">查询</li>
	     	</ul>
	     	<div class="mt20">
	     		<input type="hidden" id="dialog_search_org" value="" />
	     		<span class="mr10 ml13">培训计划名称 <input id="plan_Name" type="text" class="input" style="border:1px solid;"/></span>
	     		<span class="mr10">培训班编号 <input id="class_Sn" type="text" class="input" style="border:1px solid;"	/></span>
	     		<span class="mr10">培训班名称 <input id="class_Name" type="text" class="input" style="border:1px solid;" /></span>
	     	</div>
	        <div align="right">
	            <input id="dialogSearch" type="button" class="searchbutton m10" value="查询"/>
	            <input id="dialogClear" type="button" class="searchbutton m10" value="清空"/>
	        </div>
	     </div>
	     <div class="choosedcourse">
	     	<ul class="png_bg">
	            <li class="now">培训班列表</li>
	        </ul>
	        <!-- 培训计划列表 -->
	        <div id="list_trainplan" class="dataTables_wrapper"></div>
	         <div class="makesure">
	        	<input type="button" class="step cls_ok" value="确定"/><a href="javascript:;" class="back m10 cls_close" >关闭</a>
	        </div>
	     </div>	     
	</div>
</div>
<script type="text/javascript">
	$(function(){
		//加载培训计划列表
		page(1);
		initTree("#dialog_orgtree",null,null,"org",function (type,id,name){
			$("#dialog_search_org").val(id);
			page(1);
		});
		
		//设置已选择的培训计划id和name
		$(".cls_ok").click(function(){
			var id = $("input:radio[name=planedclass]:checked").val();
			if(id!=null){
				window.location.href = basepath+"/trainclass/information.html?tcid="+id;
			}
			$("#dialog").hide();
		});
		
		//关闭弹窗
		$(".cls_close").click(function(){
			$("#dialog").hide();
		});
		
		//搜索
		$("#dialogSearch").click(function(){
            page(1);
        });
        
        //清空
        $("#dialogClear").click(function(){
            $("#plan_Name").val("");
            $("#class_Sn").val("");
            $("#class_Name").val("");
        });
		
	});
	
	//分页
	function page(i){
		$.dialog.tips('数据加载中...',600,'loading.gif');
		var max = $("#list_trainplan .page_max").val()?$("#list_trainplan .page_max").val():10;
	    var query = "";
	    var plan_Name = $("#plan_Name").val();
	    if(plan_Name != null && plan_Name != ""){
	        query += "&plan_Name="+plan_Name;
	    }
	    var class_Sn = $("#class_Sn").val();
	    if(class_Sn != null && class_Sn != ""){
	        query += "&class_Sn="+class_Sn;
	    }
	    var orgid = $("#dialog_search_org").val();
	    if(orgid!=""){
			query += "&orgid=" + orgid;
		}
	    var class_Name = $("#class_Name").val();
	    if(class_Name != null && class_Name != ""){
	        query += "&class_Name="+class_Name;
	    }
		var url = basepath+"/list/trainclass.html?from=plan4dialog&status=4&pagefn=page&max="+max+"&page="+i+"&r="+Math.random();
		$("#list_trainplan").load(encodeURI(url+query),function(){
			$(".cls_tpradio").uniform();
			$.dialog.tips('数据加载完毕',1,'tips.gif');
			//全选
			//变更每页记录数量
			$("#list_trainplan .page_max").change(function(){
				page(1);
			});
		});
	}
</script>