<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
  <table class="datatable" width="100%">
	<thead>
	<tr>
		<th><input name="mt_index" type="checkbox" value="cls_chooseitem" class="checkbox cls_chooseall"/></th>
        <th class="sorting">会议名称</th>
        <th class="sorting">起止时间</th>
        <th class="sorting">发布状态</th>
        <th class="sorting">主持人</th>
        <th class="sorting">参加人数</th>
    </tr>
    </thead>
 
    <tbody>    
    <c:forEach items="${meetingManageList.data }" var="mt" varStatus="mts">
    <tr class="gradeA <c:out value="${mts.index%2==0?'even':'odd' }"/>"><!-- 只有未发布的会议允许删除 20130402 by LTC -->
        <td><c:if test="${mt.status==0 }"><input name="mt_index" type="checkbox" value="${mt.mId}" class="checkbox cls_chooseitem" /></c:if></td>
        <td><a href="meetingInfo.html?mId=${mt.mId}">${mt.name}</a></td>
        <td>${mt.start_date}~${mt.end_date}</td>
        <td>
            <a id="${mt.mId }" href="javascript:changeStatus(${mt.status },'${mt.mId }','${pageNo }');">
                <c:choose>
                    <c:when test="${mt.status==1 }">已发布</c:when>
                    <c:when test="${mt.status==0 }">未发布</c:when>
                </c:choose>
            </a>
        </td>
        <td>${mt.master.name }</td>
        <td><a href="turnStaff.html?mId=${mt.mId}">${mt.attended} / ${mt.allAttend}</a></td>
	</tr>
	</c:forEach>
    </tbody>
</table>

<!-- 分页对象 -->
<c:set var="pager" value="${meetingManageList.page }" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"/>

<script type="text/javascript">
/**
 * 改变会议的发布状态
 */
function changeStatus(t,id,pageNo){
    var bool = confirm("是否确定要改变发布状态?");
    if(bool){
        var url = basepath +"/meetingManage/ajax/update.html";
        var status = 1-t;
        var param = "mId="+id+"&status="+status;
        $.ajax({
            url : url,
            type : "post",
            data : param,
            dataType : "json",
            success : function(msg){
                if(0==t){
                    $("#"+id).text("已发布");
                    $("#"+id).attr("href","javascript:changeStatus(1,'"+id+"');");
                }else{
                    $("#"+id).text("未发布");
                    $("#"+id).attr("href","javascript:changeStatus(0,'"+id+"');");
                }
                page(pageNo);
            },
            error : function(){
                page(pageNo);
            }
        });
    } 
}
</script>
							
                                                  