<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%" style="padding-bottom:0">
                	<thead>
                    	<tr>
                            <th><input name="" type="checkbox" value="" class="checkbox cls_checkbox cls_chooseall"/></th>
                            <th>年度</th>
                            <th>项目名称</th>
                            <th>申请积分数值</th>
                            <th>兑现形式</th>
                            <th>申请详情</th>
                            <th>审批状态</th>
                        </tr>
						</thead>
                        <tbody>
                       <c:forEach items="${scoreDepCostList.data }" var="sc" varStatus="st">   
                       <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                        	<td><c:if test="${sc.stauts == 0 }"><input name="groupTypeId" type="checkbox" value="${sc.sdcId }" id="${sc.score }" class="checkbox cls_checkbox cls_chooseitem"/></c:if></td>
                            <td>${sc.begin_time }</td>
                            <td>${sc.projectName }</td>
                            <td>${sc.score }</td>
                            <td>${sc.costWay.name }</td>
                            <td><a href="${basepath }/rewardScoreDepCost/scoreDepCostById.html?sdcId=${sc.sdcId}&depId=${sc.dep.orgId}">查看</a></td>
                            <c:if test="${sc.stauts == 0 }"><td>未审批</td></c:if>
                            <c:if test="${sc.stauts == 1 }"><td>已通过</td></c:if>
                            <c:if test="${sc.stauts == 2 }"><td>未通过</td></c:if>
                        </tr>
                    </c:forEach>
                    </tbody>
                 </table>
	             	<c:set var="pager" value="${scoreDepCostList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	<div align="right" class="mr10"><a href="${basepath }/rewardScoreDep/scoreDepList.html" class="back m10">关闭</a></div>