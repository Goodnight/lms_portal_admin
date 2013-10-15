<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="main">
                	<div class="mainco resource">
                        <h1 style="font-size:16px;" class="ml30">查看知识分类</h1>	
                        <div class="basic_information mt2">
                        	<table border="0" cellspacing="1" cellpadding="1" class="ml30">
                              <tr>
                                <td width="100">名称</td>
                                <td>${kno.name }</td>
                              <input id="kcId"  type="hidden" value="${kno.kcId }"/>
                              </tr>
                              <tr>
                                <td>编号</td>
                                <td>${kno.sn }</td>
                              </tr>
                              <tr>
                                <td>编码简称</td>
                                <td>${kno.codeShort }</td>
                              </tr>
                              <tr>
                                <td>上级分类</td>
                                <td>${kno.upId }</td>
                              </tr>
                              <tr>
                                <td>简介</td>
                                <td>${kno.introduction }</td>
                              </tr>
                            </table>
							<div class="taR m10"><a href="javascript:;" class="step m10 groupupdate" onclick="toAddKnowledge('${kno.kcId }')">新建</a><a href="javascript:;" class="step m10 groupupdate" onclick="toUpdateKnowledge('${kno.kcId }')">修改</a><a href="javascript:;" class="step m10 choosedepartment">移动</a><a href="javascript:;" class="step m10 chooseMove">批量转移</a><a href="javascript:;" class="step m10" onclick="deleteAbility('${kno.kcId }')">删除</a></div>
                        </div>
                        
                    </div>
                </div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/knowledge/updateKnwledge.js" charset="gbk"></script>
