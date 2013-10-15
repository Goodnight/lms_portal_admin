<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
 <table class="datatable" width="100%">
                                <thead>
                                    <tr>
                                        <th><input name="all" id="alll" type="checkbox" value="" class="checkbox cls_checkbox cls_chooseall"/></th>
                                        <th>项目名称</th>
                                        <th>申请时间</th>
                                        <th>使用积分数值</th>
                                        <th>兑换形式</th>
                                        <th>查看详情</th>
                                        <th>审批状态</th>
                                    </tr>
									</thead>
                                      <tbody>
                                  <c:forEach items="${scoreUserCostList.data }" var="sc" varStatus="st">
                                        <tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                                        <td>
                                        <c:if test="${sc.stauts != 1 }">
                                        <input name="groupTypeId" type="checkbox" value="${sc.sucId }" id="${sc.score }" class="checkbox cls_checkbox cls_chooseitem"/>
                                        </c:if>
                                        </td>
                                        <td>${sc.projectName }</td>
                                        <td>${sc.begin_time}</td>
                                        <td>${sc.score }</td>
                                        <td>${sc.costWay.name }</td>
                                        <td><a href="${basepath }/rewardScoreUserCost/toScoreUserCostById.html?sucId=${sc.sucId}&uid=${sc.user.uid}">查看</a></td>
                                        <td>
                                        <c:if test="${sc.stauts == 0}">
                                                                                                         未审批                                                                        
                                        </c:if>
                                        <c:if test="${sc.stauts == 1}">
                                                                                                           已通过
                                        </c:if>
                                        <c:if test="${sc.stauts == 2}">
                                                                                                           未通过
                                        </c:if>
                                        </td>
                                    </tr>
                                    </c:forEach>
                                </tbody>
                             </table>
                    <div class="reHeight pager">
	             	<c:set var="pager" value="${scoreUserCostList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>
              	</div>
              	<div align="right" class="mr10"><a href="${basepath }/rewardScoreUser/scoreUserList.html" class="back m10">关闭</a></div>
    
              	
              	
