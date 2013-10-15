<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
    <thead>
        <tr>
            <th width="30" class="pl10" ><input name="" type="checkbox" value="cls_item_response" class="checkbox cls_chooseall_est" /></th>
            <th class="sorting">评估主题</th>
            <th class="sorting">开始时间</th>
            <th class="sorting">结束时间</th>
            <th>设置问题</th>
            <th>评估发布状态</th>
            <th>参与情况</th>
            <th>结果明细</th>
            <th>评估报告</th>
        </tr>
    </thead>
    <tbody>
    	<c:forEach var="s" items="${list.data }" varStatus="st">
    		<tr class="gradeA <c:out value="${st.index%2==0?'even':'odd' }"/>">
	            <td class="pl10">
	            	<c:choose>
	            		<c:when test="${s.status==1 }">
			            	<input id="${s.sId }" delete="1" name="id" type="checkbox" value="${s.sId }" partinnum="${s.participantsNum}" class="checkbox cls_item_response" />
	            		</c:when>
	            		<c:otherwise>
	            			<input id="${s.sId }" delete="0" name="id" type="checkbox" value="${s.sId }" partinnum="${s.participantsNum}" class="checkbox cls_item_response" />
	            		</c:otherwise>
	            	</c:choose>
	            </td>
	            <td>
	               <!-- LMSWD-1401 20130509 by LTC -->
	               <!-- 1.已发布： 只能修改人员 -->
                   <c:if test="${s.status==2 }"><a href="new.html?type=1&sid=${s.sId }&symbol=1">${s.topic }</a></c:if>
                   <!-- 2.未发布 && 有人参与： 只能修改开始结束时间 和 参与人员 -->
                   <c:if test="${s.status==1 && s.participantsNum!=0 }"><a href="new.html?type=1&sid=${s.sId }&symbol=2">${s.topic }</a></c:if>
                   <!-- 3.未发布 && 无人参与： 皆可修改 -->
                   <c:if test="${s.status==1 && s.participantsNum==0 }"><a href="new.html?type=1&sid=${s.sId }&symbol=3">${s.topic }</a></c:if>
	            </td>
	            <td>${s.startDt }</td>
	            <td>${s.endDt }</td>
	            <td><a href="inquiryAllItemList.html?sId=${s.sId}&type=${param.type}" class="previewbutton" target="_blank">设置</a></td>
            	<td>
	            	<c:choose>
	            		<c:when test="${s.status==1 }"><a  href="#" onclick="javascript:changeStatus(this,2,'${s.sId}')">未发布</a></c:when>
           				<c:otherwise><a href="#" onclick="javascript:changeStatus(this,1,'${s.sId}')">已发布</a></c:otherwise>
	            	</c:choose>
	            </td>
	            <td><a href="${basepath }/survey/viewParticipate.html?sId=${s.sId }&flag=response">${s.participantsNum==null?0:s.participantsNum }/${s.userNum==null?0:s.userNum }</a></td>
	            <td><a href="${basepath }/survey/result/report.html?report=response&surveyId=${s.sId }" target="_blank">结果明细</a></td>
	            <td><a href="${basepath }/survey/turnToSurveyReport.html?surveyId=${s.sId }&surveyType=${s.type}&participantsNum=${s.participantsNum }&userNum=${s.userNum }" target="_blank">评估报告</a></td>
	        </tr>
    	</c:forEach>
    </tbody>
</table>
<c:set var="pager" value="${list.page }" scope="request"></c:set>
<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
