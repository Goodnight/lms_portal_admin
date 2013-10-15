<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="reHeight" style="padding:0 0 20px 0;">
	<div class="dataTables_length z">
		<div class="z pt10">每页显示</div>
		<div class="selector z" id="uniform-undefined">
		<span style="-moz-user-select: none;">${pager.size }</span>
			<select size="1" style="opacity: 0;" class="page_max">
				<option value="10" <c:out value="${pager.size==10?'selected=selected':'' }"/>>10</option>
				<option value="25" <c:out value="${pager.size==25?'selected=selected':'' }"/>>25</option>
				<option value="50" <c:out value="${pager.size==50?'selected=selected':'' }"/>>50</option>
				<option value="100" <c:out value="${pager.size==100?'selected=selected':'' }"/>>100</option>
			</select>
		</div>
		<div class="z pt10">条</div>
		<div class="z m10">|</div>
        <div class="z pt10">共${pager.records==null?0:pager.records }条</div>
        <div class="z m10">|</div>
        <div class="z pt10">当前${(pager.no-1)*pager.size+1 }-${pager.no*pager.size }条</div>
	</div>
	
	<div class="dataTables_paginate paging_full_numbers">
		<c:if test="${pager.no>1  }">
			<span class="first paginate_button paginate_button_disabled" onclick="${pageFn}(1)">第一页</span>
			<span class="previous paginate_button paginate_button_disabled" onclick="${pageFn}(${pager.no-1})">前一页</span>
		</c:if>
		
		<span>
			<!-- Rule 1 -->
			<c:if test="${pager.count<=5 }">
				<c:forEach begin="1" end="${pager.count }" varStatus="st">
					<c:choose>
						<c:when test="${pager.no==st.index }">
							<span class="paginate_active">${st.index }</span>
						</c:when>
						<c:otherwise>
							<span class="paginate_button" onclick="${pageFn}(${st.index })">${st.index }</span>
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
								<span class="paginate_active">${st.index }</span>
							</c:when>
							<c:otherwise>
								<span class="paginate_button" onclick="${pageFn}(${st.index })">${st.index }</span>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
				
				<c:if test="${pager.no>3 && pager.no<pager.count-2 }">
					<c:forEach begin="${pager.no-2 }" end="${pager.no+2 }" varStatus="st">
						<c:choose>
							<c:when test="${pager.no==st.index }">
								<span class="paginate_active">${st.index }</span>
							</c:when>
							<c:otherwise>
								<span class="paginate_button" onclick="${pageFn}(${st.index })">${st.index }</span>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
			
				<c:if test="${pager.no>=pager.count-2 }">
					<c:forEach begin="${pager.count-4 }" end="${pager.count }" varStatus="st">
						<c:choose>
							<c:when test="${pager.no==st.index }">
								<span class="paginate_active">${st.index }</span>
							</c:when>
							<c:otherwise>
								<span class="paginate_button" onclick="${pageFn}(${st.index })">${st.index }</span>
							</c:otherwise>
						</c:choose>
					</c:forEach>
				</c:if>
			</c:if>
		</span>
		<c:if test="${pager.no<pager.count }">
			<span class="next paginate_button" onclick="${pageFn}(${pager.no+1})">后一页</span>
			<span class="last paginate_button" onclick="${pageFn}(${pager.count })">最后页</span>
		</c:if>
	</div>
</div>
	