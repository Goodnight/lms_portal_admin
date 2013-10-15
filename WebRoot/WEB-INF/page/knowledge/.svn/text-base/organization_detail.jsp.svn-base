<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
                 <div class="main">
                	<div class="mainco resource">
                        <h1 style="font-size:16px;" class="ml30">查看知识分类</h1>	
                        <input id="kcId" name="kcId" type="hidden" value="${kno.kcId }"/>
                        <div class="basic_information mt2">
                        	 <table border="0" cellspacing="1" cellpadding="1" class="ml30" width="600">
                              <tr>
                                <td width="100">名称</td>
                                <td>
                                	${kno.name }
                                 	<input id="kcId"  type="hidden" value="${kno.kcId }"/>
                                 </td>
                              </tr>
                              <tr>
                                <td>编号</td>
                                <td>${kno.sn }</td>
                              </tr>
                              <tr>
                                <td>编码简称</td>
                                <td>${kno.codeShort }</td>
                              </tr>
                              <c:if test="${kno.namePath !='' && kno.namePath != null}">
                              <tr>
                                <td>所属分类</td>
                                <td>${knoNamePath}</td>
                              </tr>
                              </c:if>
                              <tr>
                                <td>简介</td>
                                <td>${kno.introduction }</td>
                              </tr>
                              <tr>
                                    <td colspan="2"><div style="height:1px;line-height:1px;font-size:1px;border-top:1px dashed #ccc;"></div></td>
                                  </tr>
                                  <tr>
                                    <td style="vertical-align:top">标签</td>
                                    <td class="objectstring">
                                    	<div class="reHeight" style="padding-top:5px">
                                    	<c:if test="${upId != null}">
                                    	<c:forEach items="${kno.tagLibrarys }" var="k">
                                    	<label class="speciallabel">${k.tagname }<a href="javascript:;" class="ml6" onclick="deleteTag('${kno.kcId }','${k.tagId }')"><img src="${basepath }/images/deletegreen.gif"/></a></label>
                                    	</c:forEach>
                                    	</c:if>
                                    	</div>
                                        <div class="mt10">
                                        <c:if test="${sessionScope.user.type == 1 }">
                                        <span class="vm choosedepartment2" style="margin-left:0" onclick="selectTag('${kno.kcId }')">增加标签</span>
                                        </c:if>
                                        </div>
                                    </td>
                                  </tr>
                            </table>
							<div class="taR m10">
							<c:if test="${sessionScope.user.type == 1 }">
							<a href="javascript:;" class="step m10 groupupdate" onclick="toAddKnowledge('${kno.kcId }')">新建</a>
							<a href="javascript:;" class="step m10 groupupdate" onclick="toUpdateKnowledge('${kno.kcId }')">修改</a><a href="javascript:;" class="step m10 choosedepartment">移动</a><a href="javascript:;" class="step m10 chooseMove">批量转移</a><a href="javascript:;" class="step m10" onclick="deleteAbility('${kno.kcId }')">删除</a>
							</c:if>
							</div>
                        </div>
                        
                    </div>
                </div>
        <script type="text/javascript">
		    var kcId = "${kcId}";
		    var upId = "${upId}";
		</script>
