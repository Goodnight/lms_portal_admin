<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table class="datatable" width="100%">
                            	<thead>
                                	<tr>
                                    	<th><input name="all" id="alll" type="checkbox" value="" class="checkbox cls_checkbox cls_chooseall"/></th>
                                        <th>员工编号</th>
                                        <th>员工姓名</th>
                                        <th>奖励总值</th>
                                        <th>使用总值</th>
                                        <th>剩余总值</th>                         
                                        <th>申请积分审批</th>
                                        <th>兑换积分审批</th>
                                        <th>维护</th>
                                    </tr>
                                </thead>
                                <tbody>    
                                     <c:forEach items="${scoreUserList.data }" var="sc" varStatus="st">   
                                        <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                                      	<td><input name="groupTypeId" type="checkbox" value="${sc.user.uid }" class="checkbox cls_checkbox cls_chooseitem"/></td>
                                        <td>${sc.user.sn}</td>
                                        <td>${sc.user.name }</td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreUserGain/scoreUserGainList.html?uid=${sc.user.uid}&sId=${sc.suId }">${sc.totalGainScore }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreUserCost/scoreUserCostList.html?uid=${sc.user.uid}&sId=${sc.suId }">${sc.totalCostScore }</a></td>
                                        <td>${sc.totalUsableScore}</td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreUser/scoreUserApplyCostList.html?uid=${sc.user.uid}&sId=${sc.suId }">${sc.gainNum}/${sc.gainTotalNum }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreUser/scoreUserByForCostList.html?uid=${sc.user.uid}&sId=${sc.suId }">${sc.costNum }/${sc.costTotalNum }</a></td>
                                        <td><a target="_blank" href="${basepath }/rewardScoreUser/toScoreUserCostById.html?uid=${sc.user.uid}&sId=${sc.suId }">操作</a></td>
                                    </tr>
                                    </c:forEach>
                                </tbody>
                            </table>
	             	<c:set var="pager" value="${scoreUserList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>              	
       