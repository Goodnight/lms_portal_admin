<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

                <div class="ngreyborder mt10" style="background:#fff;">
            	<h2 class="png_bg">新建知识分类<!--修改知识分类--><!--增加知识分类--></h2>   
                	<div class="basic_information mt2">
                	<form id="form_saveKnowledge" action="doSaveKnowledgeCategory.html" method="post">
              		 <table border="0" cellspacing="15" cellpadding="15">
               		<colgroup>
                    	<col width="80" />
                    </colgroup>
                	<tbody>
                	<h3>${syso}</h3>  
                	 <c:if test="${kno.namePath !='' && kno.namePath != null}">
                	    <tr>    
                            <td class="taR">上级分类</td>
                            <td>${knoNamePath}</td>
                        </tr>
                     </c:if>
                        <input id="knoUpSn" name="knoUpSn" type="hidden" value="${knoUpSn}"/>
                        
                    	<tr>
                        	<td class="taR"><em>*</em>名称</td>
                            <td><input id="" name="upId" type="hidden" value="${kcId }"/>
                            <input type="text" name="name" id="name"/></td>
                        </tr>
                        <tr>    
                            <td class="taR"><em>*</em>编码简称</td>
                            <td><input type="text" name="codeShort" id="codeShort"/></td>
                        </tr>
                        <tr>   
                            <td class="vt taR">简介</td>
                            <td><textarea name="introduction" cols="" rows=""></textarea></td>
                        </tr>
                        
                    </tbody>
                </table> 	
                <div align="right" class="mr10">
                <c:if test="${syso == '' || syso == null}">
                <input name="_next" type="submit" class="step m10 vm" value="确定"/>
                </c:if>
    			<a href="javascript:;" onclick="closedUpdateWindow()" class="back windowbutton vm">关闭</a>
                </div>
                </form>
            </div> 
            </div>
                

<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<script type="text/javascript">
	var kcId = "${kcId}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />

<script type="text/javascript">
$(function(){
	$("#form_saveKnowledge").validate({
		rules : {
			name : {
				required : true
			},
			codeShort : {
				required : true
			}
		},
		messages : {
			name : "不为空",
			codeShort : "不为空"
		}
		
	});

});

</script>


