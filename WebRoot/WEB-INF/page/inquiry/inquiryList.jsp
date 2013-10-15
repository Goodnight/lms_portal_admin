<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
  <table width="100%" id="sample-table-1" class="table table-striped table-bordered table-hover">
   	  <thead>
       	<tr>
           	<th class="center">
				<label>
					<input type="checkbox" class="ace">
					<span class="lbl"></span>
				</label>
			</th>
            <th>调查主题</th>
            <th>开始时间</th>
            <th>结束时间</th>
            <th>设置问题</th>
            <th>调查发布状态</th>
            <th>已参与情况</th>
            <th>结果明细</th>
         </tr>
       </thead>
       <tbody>
        <c:forEach items="${inquiryList.data}" var="inquiry" varStatus="st">    
           <tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
               <td class="center">
               		<label>
                    <c:choose>
	            		<c:when test="${inquiry.status==1 }">
	            			<input id="${inquiry.sId }" name="groupTypeId" type="checkbox" value="${inquiry.sId }" delete="1" partinnum="${inquiry.participantsNum}" class="ace" />
	            			<span class="lbl"></span>
	            		</c:when>
	            		<c:otherwise>
	            			<input id="${inquiry.sId }" name="groupTypeId" type="checkbox" value="${inquiry.sId }" delete="0" partinnum="${inquiry.participantsNum}" class="ace" />
	            			<span class="lbl"></span>
	            		</c:otherwise>
	            	</c:choose>
	            	</label>
               </td>
               <!-- 未发布且参与人员为零时可以修改 20130315 by LTC -->
               <td>
                    <c:if test="${inquiry.status==1 && inquiry.participantsNum==0 }"><a href="updateInquiryIndex.html?sId=${inquiry.sId}&isModify=1&isDate=0" target="_blank" >${inquiry.topic}</a></c:if>
                    <c:if test="${inquiry.status==1 && inquiry.participantsNum!=0 }"><a href="updateInquiryIndex.html?sId=${inquiry.sId}&isModify=0&isDate=1" target="_blank" >${inquiry.topic}</a></c:if>
                    <c:if test="${inquiry.status==2 }"><a href="updateInquiryIndex.html?sId=${inquiry.sId}&isModify=0&isDate=0" target="_blank" >${inquiry.topic}</a></c:if>
               </td>
               <td>${inquiry.startDt}</td>
               <td>${inquiry.endDt}</td>
               <td>
                   <c:choose>
               	<c:when test="${inquiry.status==1 && inquiry.participantsNum==0}"><!-- 当未发布但是已有参与人员时也不允许设置答卷遂置灰 20130328 by LTC -->
               		 <a href="inquiryAllItemList.html?sId=${inquiry.sId}" target="_blank">设置</a>
               	</c:when>
               	<c:otherwise>
               	 设置
               	</c:otherwise>
               </c:choose>             
               </td>
               <td>
                   <a id="status_${inquiry.sId}" href="javascript:changeStatus(${inquiry.status },'${inquiry.sId}','${pageNo }');"> 
                       <c:choose>
                           <c:when test="${inquiry.status==2 }">已发布</c:when>
                           <c:when test="${inquiry.status==1 }">未发布</c:when>
                       </c:choose>
                   </a><!-- AJAX改变发布状态20130312By LTC -->
               </td>
               <td><a href="inquiryPersonList.html?sId=${inquiry.sId}">${inquiry.participantsNum}</a></td>
               <td>
               <a href="${basepath }/survey/result/report.html?report=inquiry&surveyId=${inquiry.sId }" target="_blank">结果明细</a>
               <input id="pageNo" type="hidden" value="${pageNo }" /></td>
           </tr>
          </c:forEach>
       </tbody>
   </table>
<c:set var="pager" value="${inquiryList.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager_bootstrap.jsp" />	
					
<script type="text/javascript">
function changeStatus(t, id, pageNo) {
    var bool = confirm("是否确定要改变发布状态?");
    if(bool){
        var url = basepath + "/inquiry/updateInquiryStatus.html";
           var status = 3 - t;
           var param = "sId=" + id + "&status=" + status;
           $.ajax({
               url : url,
               type : "POST",
               data : param,
               dataType : "JSON",
               success : function(msg) {
                   if (1 == t) {
                       $("#status_" + id).text("已发布");
                       $("#status_" + id).attr("href",
                               "javascript:changeStatus(2,'" + id + "');");
                   } else {
                       $("#status_" + id).text("未发布");
                       $("#status_" + id).attr("href",
                               "javascript:changeStatus(1,'" + id + "');");
                   }
                   page(pageNo);
               },
               error : function() {
                   page(pageNo);
               }
           });
    }   
}
$(function() {
	$('table th input:checkbox').on('click' , function(){
		var that = this;
		$(this).closest('table').find('tr > td:first-child input:checkbox')
		.each(function(){
			this.checked = that.checked;
			$(this).closest('tr').toggleClass('selected');
		});
			
	});
});
</script>
					