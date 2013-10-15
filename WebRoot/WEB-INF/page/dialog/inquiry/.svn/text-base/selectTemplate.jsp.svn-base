<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">模板列表</h2>
            <div class="basic_information mt2">
            	<table cellspacing="0" cellpadding="0" class="basic_list">
            	<colgroup>
                    	<col width="10%" />
                        <col width="30%" />
                        <col width="30%" />
                        <col width="30%" />
                    </colgroup>
                	<tbody>
                	   	<tr>
                        	<th>选择</th>
                        	<th>模板名称</th>
                            <th>状态</th>
                            <th>创建时间</th>
                        </tr>
                                    <c:forEach items="${templateList.data }" var="t" varStatus="st">
                                    <tr class="<c:out value="${st.index%2==0?'grey':'' }"/>">
                                      	<td><input name="choosedTemplate" type="radio" value="${t.itId }" class="checkbox cls_checkbox"/></td>
                                        <td><a href="templatePreview.html?id=${t.itId }">${t.name}</a></td>
                                        <td>${t.type}</td>
                                        <td>${t.status}</td>
                                    </tr>
                                    </c:forEach>
                        <tr>
                        	<td colspan="4">
							<div class="reHeight pager">
									<c:if test="${templateList.page.no != templateList.page.count }">
										<div class="pagernext" id="nextPagefunction">
											<a href="trainNeedInquiry.html?pageNo=${trainNeedInquiryList.page.no+1 }" title=""></a>
										</div>
										</c:if>
										
										<c:if test="${templateList.page.no > 1 }">
										<div class="pagerbefore" id="beforePagefunction">
											<a href="trainNeedInquiry.html?pageNo=${templateList.page.no-1 }" title=""></a>
										</div>
			                            </c:if>
			                            
										<div class="wp-pagenavi">
											<em>共${templateList.page.count }页${templateList.page.records }条</em>
											<c:if test="${templateList.page.no > 1 }">
											<a class="last"
												href="selectTemplate.html?pageNo=1">First</a>
												</c:if>
											<a class="page smaller" href="selectTemplate.html?pageNo=1">1</a>
											
											<c:forEach begin="2" end="${templateList.page.count }" var="t" varStatus="st">
											<c:if test="${templateList.page.no !=  n.index}">
											<a name="pageNo" class="page larger" href="selectTemplate.html?pageNo=${st.index }">${st.index }</a>
											</c:if>
											<c:if test="${templateList.page.no ==  st.index}">
											 <span class="current">${st.index }</span>
											</c:if>
											</c:forEach>
											
											<c:if test="${templateList.page.count >5}">
											<span class="extend">...</span>
											</c:if>
											<c:if test="${templateList.page.no != templateList.page.count }">
											<a class="last"
												href="selectTemplate.html?pageNo=${templateList.page.count }">Last</a>
											</c:if>
												
										</div>
								</div>
                     		</td>
                        </tr>
                    </tbody>
                 </table>
                 <div align="right" class="mr10" >
                 <input id="template_ok" name="" type="submit" class="step m10 windowbutton" value="确定"/>
                 </div>
            </div>

        </div>
        
		<script type="text/javascript">
			$(function(){
				$("#template_ok").click(function(){
					var name = $("input:radio[name=choosedTemplate]:checked").parent().next().children().eq(0).text();
					$("#new_tpName").val(name);
					$("#dialog").hide();
				});
			});
		</script>