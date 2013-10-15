<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

                <div class="ngreyborder mt10" style="background:#fff;">
            	<h2 class="png_bg">修改知识分类</h2> 
                              
                	<div class="basic_information mt2">
                	<form id="form_updateKnowledge" action="doUpdateKnowledgeCategory.html" method="post">
              		 <table border="0" cellspacing="15" cellpadding="15">
               		<colgroup>
                    	<col width="80" />
                    </colgroup>
                    
                	<tbody>
                	<input id="" name="kcId" type="hidden" value="${kno.kcId }"/>
                	<c:if test="${kno.namePath !='' && kno.namePath != null}">
                	    <tr>
                        	<td class="taR"><em>*</em>上级分类</td>
                           <input type="hidden" id="upId" name="upId" value="${kno.upId }"/>
                            <td>${knoNamePath}</td>
                        </tr>
                	</c:if>
                    	<tr>
                        	<td class="taR"><em>*</em>名称</td>
                            <td><input type="text" name="name" value="${kno.name }"/></td>
                        </tr>
                        <tr>    
                            <td class="taR">编号</td>
                            <td><input type="text" name="sn" value="${kno.sn }" readonly="readonly"/></td>
                        </tr>
                        <tr>    
                            <td class="taR"><em>*</em>编码简称</td>
                            <td><input type="text" name="codeShort" value="${kno.codeShort }"/></td>
                        </tr>
                        <tr>   
                            <td class="vt taR">简介</td>
                            <td><textarea name="introduction" cols="" rows="">${kno.introduction }</textarea></td>
                        </tr>
                        
                    </tbody>
                </table> 	
                <div align="right" class="mr10">
                <input name="_next" type="submit" class="step m10 vm" value="确定"/>
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
	var upName = "${upName}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
$(function(){
	$("#form_updateKnowledge").validate({
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
