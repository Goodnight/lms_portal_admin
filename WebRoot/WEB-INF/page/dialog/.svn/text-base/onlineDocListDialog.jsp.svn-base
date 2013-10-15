<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

        	<div class="ngreyborder changeblue">
            	<h2 class="png_bg">文档关联</h2>
                <div class="checkcourse">
                	<ul class="png_bg">
                    	<li class="now">文档查询</li>
                    </ul>
                    <table border="0" cellspacing="10" cellpadding="10" class="searchblock">
                	<colgroup>
                    	<col width="110" />
                        <col width="250" />
                        <col width="70" />
                        <col />
                    </colgroup>
                	<tbody>
                    	<tr>
							<td class="taR">组织机构</td>
                                <td class="taL" colspan="3"><div class="message_nav p0 clbg">
                                        <div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="${basepath}/images/m_arrow_1.gif" width="7" height="4" /></div></div>
                                        <div class="clr"></div>
                                        <div class="m1_window">
                                         </div>  
                                    </div>
                                    <div class="mt4">包含子机构<label><span class="option choosed"><input id="isChildOrg" name="isChildOrg" type="radio" value="1" checked="checked"/></span> 是</label><label><span class="option"><input id="isChildOrg" name="isChildOrg" type="radio" value="0" /></span> 否</label></div>
                                    </td>
                              </tr>
                        <tr>
                              	<td class="taR" style="vertical-align:top">知识分类</td>
                                <td class="taL" colspan="3">
                                	<div>
                                    <div class="message_nav p0 clbg">
                                        <div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="${basepath}/images/m_arrow_1.gif" width="7" height="4" /></div></div>
                                        <div class="clr"></div>
                                        <div class="m1_window">
                                         </div>  
                                    </div>
                                    </div>
                                    </td>
                              </tr>
                        <tr>
                              	<td class="taR">岗位</td>
                                <td class="taL" colspan="3"><div class="message_nav p0 clbg">
                                        <div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" class="navall">全部</a></div><div class="fleft bta"><img src="${basepath}/images/m_arrow_1.gif" width="7" height="4" /></div></div>
                                        <div class="clr"></div>
                                        <div class="m1_window">
                                         </div>  
                                    </div>
                                    </td>
                              </tr>
                    	<tr>
                        	<td class="taR">文档编号</td>
                        	<td><input name="sn" type="text" class="input" id="sn" value=""/></td>
                            <td >文档名称</td>
                        	<td><input name="name" type="text" class="input" id="name" value=""/></td>
                        </tr>
                        
                    </tbody>
           			 </table>
                     <div align="right" class="m10"><input name="" type="button" class="searchbutton" value="搜索" hidefocus="true" onclick="selectDocBottonClick(1)"/></div>
                </div>
                <div class="courselist">
                    <ul class="png_bg">
                        <li class="now">文档列表</li>
                    </ul>
                     <!-- 文档列表 -->
                    <div id="onlineDocList_list"></div>
                    
                    
                   
                    
                     </div>
            	</div>
            	
                 <div class="choosedDoc">
                 	<ul class="png_bg">
                        <li class="now">已选文档</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
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
                            	<th>文档编号</th>
                                <th>文档名称</th>
                                <th>创建公司</th>
                                <th>主要内容</th>
                            </tr>
                        </thead>
                        <tbody id="choosedDoc"></tbody>
           			 </table>
                    <div class="makesure">
                    	<input type="button" class="back windowbutton cls_ok" value="确定"/>
                    </div>
                 </div>
                 
                 <jsp:include page="/WEB-INF/page/include/script.jsp" />
           
        
<script type="text/javascript">
	var cId="${cId}";
    setOrgData(0);
    setKnoData(1);
    setPosData(2);
	$(function(){
		//初始化列表
		page(1);
	
		//提交保存数据
		$(".cls_ok").click(function(){
			var ids = $("input[name=choosedDoc]");
			if(ids.length>0){
				var param = "method=add&res=doc&cId="+cId;
				for(n=0;n<ids.length;n++){
					param += "&id="+$(ids[n]).attr("id");
				}
				var url = basepath + "/courseware/setCourseware.html";
				$.ajax({
					url : url,
					type : "POST",
					data : param,
					dataType : "json",
					success : function(data){
						onlinePage(1);
						$("#dialog").hide();
					},
					error : function(){}
				});
			}else{
				$("#dialog").hide();
			}
		});
	});
	
		//添加文档
	function add(obj){
		var newTr = "<tr><td><input type='button' class='removebutton' id='"+$(obj).val()+"' name='choosedDoc' onclick='remove(this)'/></td>"
							+"<td>"+$(obj).parent().parent().parent().next().text()+"</td>"
							+"<td>"+$(obj).parent().parent().parent().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().parent().parent().next().next().next().text()+"</td>"
							+"<td>"+$(obj).parent().parent().parent().next().next().next().next().text()+"</td></tr>";
		$(obj).attr("checked",true);
		$(obj).attr("disabled",true);
		$("#choosedDoc").append($(newTr));
		$.uniform.update();
	}
	
	//移除文档
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
		$.uniform.update();
	}
	
	function page(i){
		var url = basepath + "/list/resource/onlineDocList.html?pagefn=page&page="+i+"&r="+Math.random();
		$("#onlineDocList_list").load(encodeURI(url),function(){
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
			$(".cls_item_online").uniform();
			$.uniform.update();
		});
		
	}
	
	//高级搜索文档
function selectDocBottonClick(i){
    var query = "";
	var depId = "";
	if(return_data.length>0 && return_data[0]!=null && return_data[0].length>0){
		depId = return_data[0][0]["id"];
	}
	if(depId!=""){
		query += "&depId=" + depId;
	}
	
	var knoId = "";
	if(return_data.length>0 && return_data[1]!=null && return_data[1].length>0){
		knoId = return_data[1][0]["id"];
	}
	if(knoId!=""){
		query += "&knoId=" + knoId;
	}
	
	var positionIds = "";
	if(return_data.length>0 && return_data[2]!=null && return_data[2].length>0){
		positionIds = return_data[2][0]["id"];
	}
	if(positionIds!=""){
		query += "&positionIds=" + positionIds;
	}
	var sn = $("#sn").val();
	query += "&sn="+sn;
	var name = $("#name").val();
	query += "&name="+name;
	var isChildOrg = $("input:radio[name=isChildOrg]:checked")[0].value;
	query+="&isChildOrg="+isChildOrg;
		var url = basepath + "/list/resource/onlineDocList.html?pagefn=page&page="+i+"&r="+Math.random();
		$("#onlineDocList_list").load(encodeURI(url+query),function(){
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
			$(".cls_item_online").uniform();
			$.uniform.update();
		});
}
</script>