<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%">
                            	<thead>
                                	<tr>
                                        <th>部门</th>
                                        <th>基础积分数值</th>
                                        <th>奖励积分总值</th>
                                        <th>使用积分总值</th>
                                        <th>剩余积分总值</th>                                                                         
                                        <th>积分兑换审批</th>
                                        <th>积分维护</th>
                                    </tr>
                                </thead>
                                <tbody>    
                                    <c:forEach items="${scoreDepList.data }" var="sd" varStatus="st">
                                        <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                                        <td>${sd.dep.name }</td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreDep/scoreDepBaseList.html?depId=${sd.dep.orgId}">${sd.baseScore }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreDepGain/scoreDepGainList.html?depId=${sd.dep.orgId}">${sd.totalGainScore }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreDepCost/scoreDepCostList.html?depId=${sd.dep.orgId}">${sd.totalCostScore }</a></td>
                                        <td>${sd.totalUsableScore }</td>
                                        <c:if test="${sd.dep.orgId == sessionScope.defaultOrg.orgId}">
                                        <td>${sd.num }/${sd.totalNum }</td>
                                        <td>不可操作</td>
                                        </c:if>
                                        <c:if test="${sd.dep.orgId != sessionScope.defaultOrg.orgId}">
                                        <td><a target="_blank" href="${basepath }/rewardScoreDepCost/scoreDepCostApplyList.html?depId=${sd.dep.orgId}">${sd.num }/${sd.totalNum }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreDep/toScoreDepUsed.html?depId=${sd.dep.orgId}&depName=${sd.dep.name}">操作</a></td>
                                    	</c:if>
                                    </tr>
                                   </c:forEach>
                                </tbody>
                            </table>
	             	<c:set var="pager" value="${scoreDepList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
