<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

                <c:if test="${courseware.knowledge.kcId != '' || courseware.knowledge.kcId != null}">
                         <c:forEach items="${tagList.data }" var="tag">
                           <span class="vm" id="${tag.tagId }">${tag.tagname }</span>
                         </c:forEach>
                </c:if>
             <script type="text/javascript">
                var kcId = "${kcId}";
              </script>  
               <script type="text/javascript">
                  function rTrim(str)
	{
	   var iLength;

	   iLength = str.length;
	   if (str.charAt(iLength - 1) == " " || str.charAt(iLength - 1) ==",")
	   {
	    //如果字串右边第一个字符为空格
	    str = str.substring(0, iLength - 1);//将空格从字串中去掉
	    //这一句也可改成 str = str.substring(0, iLength - 1);
	    str = rTrim(str); //递归调用
	   }
	   return str;
	}
	$("#button").click(function(){
		document.form1.submit();
		});
	$("#tagf span").click(function(){
		var mm=$(this).text();
		var ww=$("#tagf input").val();
		
		if(ww==""){
			$("#tagf input").val(mm);	
		}
		else{
			ww=rTrim(ww);
			ww+=","+mm;
			$("#tagf input").val(ww);	
		}
	})
	$("#tagf input").keyup(function(ev){
		var oEvent=ev||event;
		if(oEvent.keyCode==32){
			var mm=$(this).val();
			mm=rTrim(mm);   
			mm+=",";
			$(this).val(mm);
		}							  
	})	
	
               </script>


