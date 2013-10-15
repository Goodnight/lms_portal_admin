<%@page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
	<thead>
		<tr>
			<th>
				<input name="groupTypeId" type="checkbox" value="cls_item_trainplan" class="checkbox cls_chooseall_trainplan" />
			</th>
			<th class="classname">
				年度
			</th>
			<th>
				培训计划名称
			</th>
			<th>
				计划类型
			</th>
			<th>
				创建机构
			</th>
			<th>
				培训班数量
			</th>
			<th>
				发布状态
			</th>
			<th>
				导入培训班
			</th>
			<th>
				导出培训班
			</th>
		</tr>
	</thead>
	<tbody>
		<c:if test="${trainPlanList != null }">
			<c:forEach items="${trainPlanList.data }" var="t" varStatus="ts">
				<tr class="gradeA <c:out value="${ts.index%2==0?'even':'odd' }"/>">
					<td>
					    <!-- 已发布的培训计划不允许删除 by LTC 20130327 -->
						<c:if test="${t.status=='0' }"><input name="groupTypeId" type="checkbox" value="${t.tpId}" class="checkbox cls_item_trainplan" /></c:if>
					</td>
					<td>
						${t.year}
					</td>
					<td>
						<a id="${t.tpId }" itemStatus="${t.status }" href="javascript:;" class="showInfo">${t.name }</a>
					</td>
					<td>
						<c:choose>
							<c:when test="${t.planType=='0' }">正式</c:when>
							<c:when test="${t.planType=='1' }">临时</c:when>
						</c:choose>
					</td>
					<td>
						${t.departmentName }
					</td>
					<td>
						<a href="viewPlanClass.html?id=${t.tpId }&symbol=1" target="_blank"><c:if test="${t.trainClassNum == null}">0</c:if>${t.trainClassNum }</a>
					    <!-- 如果需要对已发布的培训计划做限制, 则传入 &ban=1 即可 20130228LTC-->
					</td>
					<td><!-- 测试取创建人级别 --><input type="hidden" value="${t.creater.type }" />
					    <!-- 三级权限管理 20130401 by LTC -->
					    <div>
                        <label id="status_name">
                            <c:choose>
                                <c:when test="${t.status=='0' }">未发布</c:when>
                                <c:when test="${t.status=='1' }">已发布</c:when>
                                <c:when test="${t.status=='2' }">已提交</c:when>
                                <c:when test="${t.status=='3' }">省不批准</c:when>
                            </c:choose>
                        </label>
                        <!-- 当前培训计划创建用户为集团管理员 -->
                        <c:if test="${t.creater.type == '1' }">
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">
                                <select id="tpId${t.tpId }" name="tpStatus">
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        <!-- ----------------------------------------------------------------------------------------- -->
                        <!-- 20130422 by LTC from YL: 集团管理员对下级所创建计划的发布状态不允许修改 -->
                        <!-- 当前培训计划创建用户为省管理员 -->
                        <c:if test="${t.creater.type=='2' && user.type!='1'}">
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">
                                <select id="tpId${t.tpId }" name="tpStatus">
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        <!-- ----------------------------------------------------------------------------------------- -->
                        <!-- 当前培训计划创建用户为市管理员 -->
                        <c:if test="${t.creater.type=='3' && user.type=='2'}"><!-- 查看者为省级 -->
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">
                                <c:if test="${t.planType=='0'}"><!-- 当该计划为正式培训计划 -->
                                    <select id="tpId${t.tpId }" name="tpStatus">
                                        <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                        <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                        <option value="3" ${t.status=='3'?'selected=selected':'' }>省不批准</option>
                                    </select>
                                </c:if>
                                <!-- --------------------------------------------------- -->
                                <c:if test="${t.planType=='1' }"><!-- 当该计划为临时培训计划 -->
                                <select id="tpId${t.tpId }" name="tpStatus">
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                </c:if>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        <!-- ---------------------------------------------------------------- -->
                        <c:if test="${t.creater.type=='3' && user.type=='3'}"><!-- 查看者为市级 -->
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">
                                <c:if test="${t.planType=='0' }"><!-- 当该计划为正式培训计划 -->
                                <select id="tpId${t.tpId }" name="tpStatus">
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="2" ${t.status=='2'?'selected=selected':'' }>已提交</option>
                                </select>
                                </c:if>
                                <!-- --------------------------------------------------- -->
                                <c:if test="${t.planType=='1' }"><!-- 当该计划为临时培训计划 -->
                                <select id="tpId${t.tpId }" name="tpStatus">
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                </c:if>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        <!-- ----------------------------------------------------------------------------------------- -->
                        <!-- 当前培训计划创建用户为部门管理员 -->
                        <c:if test="${t.creater.type=='4' && user.type!='1' }">
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">  
                                <select id="tpId${t.tpId }" name="tpStatus"><!-- 部门及本地网一定为临时培训计划 -->
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        <!-- ----------------------------------------------------------------------------------------- -->
                        <!-- 当前培训计划创建用户为本地网管理员 -->
                        <c:if test="${t.creater.type=='5' && user.type!='1' }">
                            <a href="javascript:;" class="ml12 forsetup2"><img src="${basepath }/images/post_12.png" width="12" height="12" /></a>
                            <span class="select_setup2">  
                                <select id="tpId${t.tpId }" name="tpStatus"><!-- 部门及本地网一定为临时培训计划 -->
                                    <option value="0" ${t.status=='0'?'selected=selected':'' }>未发布</option>
                                    <option value="1" ${t.status=='1'?'selected=selected':'' }>已发布</option>
                                </select>
                                <a href="javascript:saveStatus('${t.tpId }','${pageNo }');"><img class="vm" src="${basepath }/images/right.png" width="15" height="12" /></a>
                            </span>
                        </c:if>
                        </div>
                    </td>
                    
					<td>
						<a href="javascript:;" onclick="trainPlanLeadin('${t.tpId}')">导入</a>
					</td>
					<td>
						<a href="javascript:;" onclick="export_planTrainClass('${t.tpId}')">导出</a>
					</td>
				</tr>
			</c:forEach>
		</c:if>
	</tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${trainPlanList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />

<script type="text/javascript">

function trainPlanLeadin(data) {
    $("#objId").attr("value", data);
    
   var url=basepath+"/template/trainPlan.xlsx";
   $("#downLoad").attr("href",url);
    $(".blackall").show();
	$("#leadinco").show();
}

/**
 * 改变培训计划的发布状态
 */

function saveStatus(tpId, pageNo){
    var status = $("#tpId"+tpId).val();
    var statusText = $("#tpId"+tpId).find('option:selected').text();
    var param = "tpId=" + tpId + "&status=" + status;
    $.ajax({
        url : basepath + "/trainplan/ajax/update.html",
        type : "POST",
        data : param,
        dataType : "JSON",
        success : function(data){
            $("#tpId"+tpId).text(statusText); 
            page(pageNo);
            var d = $.parseJSON(data.content);
            if(d.succeed === false){
                alert(d.msg);
                page(pageNo);
            }
        },
        error:function(XMLHttpRequest, textStatus, errorThrown){
            alert("error");
            page(pageNo);
        }
    });
}

/*function changeStatus(t, id, pageNo) {
    var bool = confirm("是否确定要改变发布状态?");
	if(bool){
	    var url = basepath + "/trainplan/ajax/update.html";
           var status = 1 - t;
           var param = "tpId=" + id + "&status=" + status;
           $.ajax({
               url : url,
               type : "post",
               data : param,
               dataType : "json",
               success : function(msg) {
                   if (0 == t) {
                       $("#status_" + id).text("已发布");
                       $("#status_" + id).attr("href",
                               "javascript:changeStatus(1,'" + id + "');");
                   } else {
                       $("#status_" + id).text("未发布");
                       $("#status_" + id).attr("href",
                               "javascript:changeStatus(0,'" + id + "');");
                   }
                   page(pageNo);
               },
               error : function() {
                   page(pageNo);
               }
           });
	}	
}*/

$(".showInfo").click(function(){
	var random=new Date().getTime();
    var url = basepath+"/trainplan/trainPlanInfo.html?id="+$(this).attr("id")+"&status="+$(this).attr("itemStatus")+"&"+random;
    $("#dialog_content").load(url);
    $("#dialog").show();
    $(".planInfo").show();
});
</script>
