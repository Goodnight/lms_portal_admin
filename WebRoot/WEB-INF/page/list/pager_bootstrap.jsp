<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="row-fluid pagerFoot" style="padding:0 0 20px 0;">
	<div class="span5">
		<div class=" dataTables_length z">
			<label>每页显示</label>
			<div class="selector z" id="uniform-undefined">
			
				<span style="-moz-user-select: none;">${pager.size }</span>
				<select size="1" style="opacity: 0;" class="page_max">
					<option value="10" <c:out value="${pager.size==10?'selected=selected':'' }"/>>10</option>
					<option value="25" <c:out value="${pager.size==25?'selected=selected':'' }"/>>25</option>
					<option value="50" <c:out value="${pager.size==50?'selected=selected':'' }"/>>50</option>
					<option value="100" <c:out value="${pager.size==100?'selected=selected':'' }"/>>100</option>
				</select>
				
			</div>
			<label>条|共${pager.records==null?0:pager.records }条|当前${(pager.no-1)*pager.size+1 }-${pager.no*pager.size }条</label>
		</div>
	</div>
	
	<div class="span7">
	<div class="pull-right dataTables_paginate paging_bootstrap pagination ">
		<ul class="pagination">
		
			<c:if test="${pager.no>1  }">
			<li class="first">
				<a class="" onclick="${pageFn}(1)">首页</a>
			</li>
			<li class="prev">
				<a class="" onclick="${pageFn}(${pager.no-1})"><</a>
			</li>
			</c:if>
		

			<!-- Rule 1 -->
			<c:if test="${pager.count<=5 }">
				<c:forEach begin="1" end="${pager.count }" varStatus="st">
					<c:choose>
						<c:when test="${pager.no==st.index }">
						<li class="active">
							<a>${st.index }</a>
						</li>
						</c:when>
						<c:otherwise>
						<li>
							<a onclick="${pageFn}(${st.index })">${st.index }</a>
						</li>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</c:if>
			<!-- Rule 2 -->
			<c:if test="${pager.count>5 }">
				<c:if test="${pager.no<=3 }">
					<c:forEach begin="1" end="5" varStatus="st">
						<c:choose>
							<c:when test="${pager.no==st.index }">
							<li class="active">
								<a>${st.index }</a>
							</li>
							</c:when>
							<c:otherwise>
							<li>
								<a  onclick="${pageFn}(${st.index })">${st.index }</a>
							</li>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
				
				<c:if test="${pager.no>3 && pager.no<pager.count-2 }">
					<c:forEach begin="${pager.no-2 }" end="${pager.no+2 }" varStatus="st">
						<c:choose>
							<c:when test="${pager.no==st.index }">
							<li class="active">
								<a >${st.index }</a>
							</li>
							</c:when>
							<c:otherwise>
							<li>
								<a  onclick="${pageFn}(${st.index })">${st.index }</a>
							</li>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
			
				<c:if test="${pager.no>=pager.count-2 }">
					<c:forEach begin="${pager.count-4 }" end="${pager.count }" varStatus="st">
						<c:choose>
							<c:when test="${pager.no==st.index }">
							<li class="active">
								<a >${st.index }</a>
							</li>
							</c:when>
							<c:otherwise>
							<li>
								<a onclick="${pageFn}(${st.index })">${st.index }</a>
							</li>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
			</c:if>
		
			
			<c:if test="${pager.no<pager.count }">
			<li class="next">
				<a  onclick="${pageFn}(${pager.no+1})">></a>
			</li>
			<li class="last" >
				<a onclick="${pageFn}(${pager.count })">末页</a>
			</li>
			</c:if>
			
		</ul>
		</div>
	</div>
</div>
	