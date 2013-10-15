<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>

<form action="doSaveTag.html" method="post" id="addTagForm">
     
                <div class="mt40">               
                	
              		 <table border="0" cellspacing="15" cellpadding="15">
               		<colgroup>
                    	<col width="80" />
                    </colgroup>
                	<tbody>
                    	<tr>
                        	<td class="taR">分类</td>
                            <td class="taL pl10"><select class="select" name="tagGroupId"><c:forEach items="${tagGroupList.data }" var="t"><option value="${t.tagGpId }">${t.name }</option></c:forEach></select></td>
                        </tr>
                        <tr>    
                            <td class="taR pt10">标签名</td>
                            <td id="tagf" class="taL pl10 pt10"><input type="text" id="tagnames" name="tagnames" class="input w224" value=""/></td>
                        </tr>
                        <tr>
                        	<td colspan="2" class="mt4 taL" style="padding-left:57px;">注：支持批量增加。</td>
                        </tr>
                        
                    </tbody>
                </table> 	
                <div align="right" class="mr10"><input name="_next" type="submit" class="step m10 vm"   value="确定"/></div>
                </div> 
                <script type="text/javascript" src="${basepath }/js/res/addTag.js" charset="gbk"></script>
                </form>
                


