<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
  <thead>
    <tr>
      <th width="30" class="pl10" ><input name="input3" type="checkbox" value="choose_item_est" class="checkbox cls_chooseall_est"/></th>
      <th class="sorting">测评主题</th>
      <th class="sorting">起止时间</th>
      <th>设置问题</th>
      <th>参与情况</th>
      <th>测评发布状态</th>
      <th>结果</th>
    </tr>
  </thead>
  <tbody>
  	<c:forEach var="s" items="${list.data }" varStatus="st">
  		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	      <td class="pl10">
	      	<c:choose>
	      		<c:when test="${s.status==1 }">
			      <input id="${s.sId }" delete="1" name="id" type="checkbox" value="${s.sId }" class="checkbox choose_item_est"/>
	      		</c:when>
	      		<c:otherwise>
	      			<input id="${s.sId }" delete="0" name="id" type="checkbox" value="${s.sId }" class="checkbox choose_item_est"/>
	      		</c:otherwise>
	      	</c:choose>
	      </td>
	      <td>
	          <!-- LMSWD-1401 20130510 by LTC -->
              <!-- 1.已发布： 只能修改人员 -->
              <c:if test="${s.status==2 }"><a href="new.html?type=3&sid=${s.sId }&symbol=1">${s.topic }</a></c:if>
              <!-- 2.未发布 && 有人参与： 只能修改开始结束时间 和 参与人员 -->
              <c:if test="${s.status==1 && s.participantsNum!=0 }"><a href="new.html?type=3&sid=${s.sId }&symbol=2">${s.topic }</a></c:if>
              <!-- 3.未发布 && 无人参与： 皆可修改 -->
              <c:if test="${s.status==1 && s.participantsNum==0 }"><a href="new.html?type=3&sid=${s.sId }&symbol=3">${s.topic }</a></c:if> 
	      </td>
	      <td>${s.startDt }到${s.endDt }</td>
	      <td><a id="upLevelTp" href="javascript:getBelongIds('${s.sId }');" class="previewbutton">设置</a></td>
	      <td><a href="${basepath }/behavior/viewParticipate.html?sId=${s.sId }&flag=lpi">${s.participantsNum==null?0:s.participantsNum }/${s.userNum==null?0:s.userNum }</a></td>
	      <td>
           	<c:choose>
           		<c:when test="${s.status==1 }"><a  href="#" onclick="javascript:changeStatus(this,2,'${s.sId}')">未发布</a></c:when>
           		<c:otherwise><a href="#" onclick="javascript:changeStatus(this,1,'${s.sId}')">已发布</a></c:otherwise>
           	</c:choose>
           </td>
	      <td><a href="${basepath }/survey/result.html?sid=${s.sId}&type=3"  target="_blank">查看</a></td>
	    </tr>
  	</c:forEach>
  </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
<script type="text/javascript">
function getBelongIds(sId){
    $.ajax({
        url : basepath + "/behavior/getBelongIds.html",
        type : "GET",
        data : "sId="+sId,
        dataType : "JSON",
        success : function(data){
            if(null!=data[0]&&""!=data[0]){
               // $("#upLevelTp").attr("href",basepath+"/survey/inquiryAllItemList.html?sId="+data[0]+"&type=3");
                window.open(basepath+"/survey/inquiryAllItemList.html?sId="+data[0]+"&type=3");
            }
        },
        error:function(){
            alert("error");
        }
    });
}
</script>