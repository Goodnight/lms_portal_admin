<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<% String[] ind = new String[]{"一", "二", "三", "四", "五", "六", "七", "八", "九", "十","十一"};
   String[] zimu = new String[]{"A", "B", "C", "D", "E", "F", "G","H", "I", "J", "K" };
   int i=0; %>
        	<div align="center" class="pt15">${itb.name}</div>
        	<%int questionSn = 0; %>
        	<c:forEach items="${list}" var="listCategory" varStatus="st">
            	<div class="pl10">
                     <h3 class="mt10 editor reHeight">
                     	<div class="z"><label><%=ind[i++]%></label>、</div>
                         <div class="z w750">${listCategory.name}</div>
                     </h3>   
  					 <c:forEach items="${listCategory.items}" var="listItems" varStatus="st1">
  					 <%questionSn++; %>
  					 <dl class="mt10 editor">
  					 <% int j = 0; %>
                      	<dt class="reHeight">
                          	<div class="z"><label><%=questionSn %></label>、</div>
                              <div class="z w750">${listItems.question}</div>
                              <c:if test="${listItems.type==2 }"><c:if test="${listItems.optionCount==0 }">不限</c:if><c:if test="${listItems.optionCount!=0 }">(最多选${listItems.optionCount }项)</c:if></c:if>
                              <input id="${listItems.stiId }chosen" type="hidden" value="0" />
                              <input id="${listItems.stiId }limit" type="hidden" value="${listItems.optionCount }" />
                          </dt>
                               <c:choose>
								<c:when test="${listItems.type==1}">
								<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
									<dd class="reHeight">
									<div class="z"><input name="a_${st1.count}" type="radio" value="" class="vm mr5" /><label><%=zimu[j++]%></label></div>
                                    <div class="z w750">${listReses.answer}</div>
                                    </dd>
								</c:forEach>
								</c:when>
								<c:when test="${listItems.type==2}">
								<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
									<dd class="reHeight">
									<div class="z">
									      <input id="${listItems.stiId }" name="check_${st1.count}" type="checkbox" value="" class="vm mr5 checkOptCount" />
									      <label><%=zimu[j++]%></label>
									</div>
                                   	<div class="z w750">${listReses.answer}</div>
                                   	</dd>
								</c:forEach>
								</c:when>
								<c:when test="${listItems.type==3}">
								<c:forEach items="${listItems.reses}" var="listReses" varStatus="st2">
									<dd class="reHeight">
									<div class="z"><input name="b_${st1.count}" type="radio" value="" class="vm mr5" /><label><%=zimu[j++]%></label></div>
                                    <div class="z w750">${listReses.answer}(${listReses.score}分)</div>
                                    </dd>
								</c:forEach>
								</c:when>
								<c:otherwise>
								   <dd class="reHeight">
								   <div class="z"><textarea name="d_${st1.count}" cols="" rows="" class="w750 ml20"></textarea></div>
                                   <div class="z w750"></div>
								   </dd>
								</c:otherwise>
							</c:choose>
                         </dl>
                </c:forEach>
           </div>
</c:forEach>
              
<script type="text/javascript"> 
$(".checkOptCount").click(function(){
    var id = $(this).attr("id");
    var limit = $("#"+id+"limit").val();
    if(limit == 0){
        limit = 1024;  //1024!
    }
    var chosen = $("#"+id+"chosen").val();
    this.checked?chosen++:chosen--; $("#"+id+"chosen").val(chosen);
    if(chosen>limit){
        this.checked=false;
        chosen--;
        $("#"+id+"chosen").val(chosen);   
    }   
});
</script>
