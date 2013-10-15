<%@page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<table class="datatable" width="100%" id="table1">
<colgroup>
</colgroup>
  	<tbody>
      	<tr id="captionRow">
       	    <!-- 20130314 LMSWD-1366 删除复选框 by LTC-->
       	    <th width="30">题序</th>
            <th>标题 注:不在同一大类下的问题不能进行排序</th>
            <th>类型</th>
            <th>操作</th>
        </tr>
        <c:forEach items="${list.data}" var="item" varStatus="st">
        <tr class="<c:out value="${st.index%2==0?'grey':'' }"/>">
          	<!-- <td><input name="groupTypeId" type="checkbox"  value="${item.stiId}" /></td> -->
          	<td><input name="sn" id="sn" value="${st.count+(list.page.no-1)*list.page.size }" type="hidden"/>${st.count+(list.page.no-1)*list.page.size  }</td>
            <td><input name="itiIds" id="itiIds" type="hidden" value="${item.stiId }"> ${item.question} </td>
            <td>
                <c:choose>
             	  <c:when test="${item.type==1}">单选</c:when>
             	  <c:when test="${item.type==2}">多选</c:when>
             	  <c:when test="${item.type==3}">量规</c:when>
             	  <c:otherwise>问答</c:otherwise>
                </c:choose>
            </td> 
            <c:choose>
            <c:when test="${st.count+(list.page.no-1)*list.page.size==1+(list.page.no-1)*list.page.size }">
            	<td><a href="javascript:void(0)" onclick="down(this)">下移</a>
            </c:when>
            <c:when test="${st.count+(list.page.no-1)*list.page.size==(list.page.no)*list.page.size || st.count+(list.page.no-1)*list.page.size==list.page.records}">
           		 <td><a href="javascript:void(0)" onclick="up(this)">上移</a></td></c:when>
            <c:otherwise>
            	<td><a href="javascript:void(0)" onclick="up(this)">上移</a>
            		<a href="javascript:void(0)" onclick="down(this)">下移</a></td>
             </c:otherwise>
            </c:choose>
        </tr>
        </c:forEach>
    </tbody>
</table>

<script language="JavaScript" type="text/javascript">
function up(obj)
{  
	var tr=obj.parentNode.parentNode;  
	var tbody=tr.parentNode;  
	var tb=tbody.parentNode;  
	var rowIdx=0;  
	for(var i=0;i<tb.rows.length;i++)
	{   
		if(tb.rows[i]==tr)
		{    
			rowIdx=i;
			break;   
		}  
	}  
	if(rowIdx==1)return;  
	var preTr=tb.rows[rowIdx-1];  
	var nextNextObj=tr.nextSibling;  
	tbody.removeChild(preTr);  
	if(nextNextObj)
		tbody.insertBefore(preTr,nextNextObj); 
	 else 
	 	tbody.appendChild(preTr); 
	var num=tr.cells[0].innerHTML;  
	tr.cells[0].innerHTML=preTr.cells[0].innerHTML;  
	preTr.cells[0].innerHTML=num;
	
	var num3=tr.cells[3].innerHTML;  
	tr.cells[3].innerHTML=preTr.cells[3].innerHTML;  
	preTr.cells[3].innerHTML=num3;
}
function down(obj)
{  
	var tr=obj.parentNode.parentNode;  
	var tbody=tr.parentNode;  
	var tb=tbody.parentNode;  
	var rowIdx=0;  
	for(var i=0;i<tb.rows.length;i++)
	{
	   if(tb.rows[i]==tr)
	   {
	       rowIdx=i;
	       break;   
	    }
    }  
    if(rowIdx==tb.rows.length-1)return;  
    var nextTr=tb.rows[rowIdx+1];  
    var nextNextObj=nextTr.nextSibling;  
    tbody.removeChild(tr);  
    if(nextNextObj)
    	tbody.insertBefore(tr,nextNextObj);  
    else 
    	tbody.appendChild(tr);
    var num=tr.cells[0].innerHTML;  
    tr.cells[0].innerHTML=nextTr.cells[0].innerHTML;  
    nextTr.cells[0].innerHTML=num;
    
    var num3=tr.cells[3].innerHTML;  
    tr.cells[3].innerHTML=nextTr.cells[3].innerHTML;  
    nextTr.cells[3].innerHTML=num3;
 }
</script>

<!-- 分页对象 -->
<c:set var="pager" value="${list.page}" scope="request"></c:set>
<!-- 分页回调函数 -->
<c:set var="pageFn" value="${page_fn}" scope="request"></c:set>
<jsp:include page="/WEB-INF/page/list/pager.jsp" />
						