<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
  <table border="0" cellspacing="0" cellpadding="0" width="100%">
                	<colgroup>
                    	<col width="80" />
                        <col width="50" />
                        <col width="200" />
                        <col width="200" />
                        <col width="200" />
                        <col width="150" />
                    </colgroup>
                    	<thead>
                        	<tr>
                            	<th>&nbsp;</th>
                            	<th class="taL"><input name="" type="checkbox" value="" onclick="checkAll('rdId')"/></th>
                            	<th>案例编号</th>
                                <th>案例名称</th>
                                <th>创建公司</th>
                                <th>主要内容</th>

                            </tr>
                        </thead>
                        <tbody>
                        <c:forEach items="${caseDocList.data }" var="caseDoc" varStatus="st">
                        	<tr class='<c:out value="${st.index%2==0?'grey':'' }"/>'>
                        	<td class="taR"><span class='<c:out value="${caseDoc.marrow==1?'star':'' }"/>'></span></td>
                                <td class="taL"><input name="rdId" type="checkbox" class="cls_chooseCaseDoc cls_item_online" onclick="add(this)" value="${caseDoc.rdId }"/></td>
                                <td>${caseDoc.sn }</td>
                                <td>${caseDoc.name }</td>
                                <td>${caseDoc.creater.dep.org.name }</td>
                                <td>${caseDoc.content }</td>
                            </tr>
                           </c:forEach>
                        </tbody>
           			 </table>
<div class="reHeight pager">
	<c:set var="pager" value="${caseDocList.page }" scope="request"></c:set>
   	<c:set var="pageFn" value="${page_fn }" scope="request"></c:set>
   	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>		
</div>