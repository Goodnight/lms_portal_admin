<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

      <table class="datatable" width="100%">
                                	<thead>
                                    	<tr>
                                        	<th width="25"><input name="all" id="alll" type="checkbox" value="" class="checkbox cls_checkbox cls_chooseall"/></th>
                                              <th>标签名</th>
                                                <th>分类</th>
                                                <th>热度</th>
                                                <th>创建时间</th>
                                                <th>类型</th>
                                               <!--   <th>关联</th> -->
                                        </tr>
                                      </thead>
                                      <tbody>
                                      
                                         <c:forEach items="${tagList.data }" var="t" varStatus="st">
                                      	<tr class='<c:out value="${st.index%2==0?'gradeA odd':'gradeA even' }"/>'>
                                       	 	<td width="25"><input name="groupTypeId" type="checkbox" value="${t.tagId }" class="checkbox cls_checkbox cls_chooseitem"/></td>
                                          	<td>${t.tagname }</td>
                                            <td>
                                            <label class="forsetup">${t.tagGroup.name }</label>
                                            <span class="select_setup">
                                           <select class="select" id="tagGroupId" name="tagGroupId">
                                            <c:forEach items="${tagGroupList.data }" var="tg">
                                            <option value="${tg.tagGpId }">${tg.name }</option>
                                            </c:forEach>
                                          </select>
                                       	    <img class="vm" src="${basepath }/images/right.png" width="15" height="12" id="${t.tagId }"/></span>
                                       	  </td>
                                            <td>${t.usge }</td>
                                            <td>${t.createDt }</td>
                                            <td><c:out value="${t.createType==0?'自建':' 采集' }"/></td>
                                           <!-- <td></td> -->
                                         </tr>
                                         </c:forEach>
                                         
                                         </tbody>
                                         
                                    </table>
	             	<c:set var="pager" value="${tagList.page }" scope="request"></c:set>
	             	<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
	             	<jsp:include page="/WEB-INF/page/list/pager.jsp"></jsp:include>              	
       