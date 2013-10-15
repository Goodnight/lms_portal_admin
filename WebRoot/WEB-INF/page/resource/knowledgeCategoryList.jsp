<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>知识分类</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">

<div class="choosedepartmentco hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
    		<div class="bigtree">
                    	
                    </div>   
        </div>
   	</div>

<div class="newwindow hidden" id="windowtree2">
	<div class="taR"><a href="javascript:;" onclick="closed()"><img class="closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
    <div id="selectTag">
	</div>
</div>

<!-- 修改知识分类对话框 -->
<!-- 对话框 -->
	<div id="dialog" class="hidden">
		<div class="blackall">&nbsp;</div>
		<div class="newwindow" id="windowtreeUpadate">
			<div class="taR"><a href="javascript:;" onclick="closedUpdateWindow()"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		    <div id="dialog_content" class="cl scroll"></div>
		</div>
	</div>
	
	<div class="newwindow hidden" id="move">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" id="closeMove"/></a></div>
	<div class="ngreyborder mt10" style="background:#fff;">
            	<h2 class="png_bg">批量转移</h2> 
                <div class="scroll">               
                	<div class="basic_information mt2">
              		 <table border="0" cellspacing="15" cellpadding="15">
               		<colgroup>
                    	<col width="80" />
                    </colgroup>
                	<tbody>
                    	<tr>
                            <td>
                            <!-- 左边层选中的知识分类-->
                            <div class="z choosecontent w300 choosedKnowledge" id="choosedKnowledge">
              
                                </div>
                            
                                
                            </td>
                            
                            <td class="vt" style="padding-top:0">
                            	<div class="z"><span class="vm moveTeam">选择分类</span></div>
                            	                            
                            </td>
                            <td class="vt" style="padding-top:0">转移至</td>
                             <td>
                             <!-- 右边层选中的知识分类-->
                            	<div class="z choosecontent w300 choosedKnowledgeToRight" id="choosedKnowledgeToRight">
                                	
                                </div>
                            </td>
        
                            <td class="vt" style="padding-top:0">
                            	<div class="z"><span class="vm moveTeamToRightMove">选择分类</span></div>
                            </td>
                        </tr>
                   
                    </tbody>
                </table> 	
                <div align="right" class="mr10"><input name="" type="button" class="step m10 vm windowbutton" value="确定" id="btn_moveTeam"/><a href="${basepath}/knowledge/knowledgeCategoryList.html" class="back windowbutton vm">返回</a></div>
            </div> 
                </div> 
            </div>
</div>


<!-- 移动知识分类树形菜单 弹出框-->
<div class="moveKnoledge hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
    		<div id="moveChoosed">
                    	<!-- 批量移动知识分类树形菜单 -->
                
        </div>  
        </div>
   	</div>
   	
   	

 

        
        <!-- 批量移动知识分类树形菜单左弹出框-->
            <div class="leftKno hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
    		<div class="moveTeamChoosede">
                    	<!-- 批量移动知识分类树形菜单 -->
                
        </div>  
        </div>
   	</div>
   	
   	 <!-- 批量移动知识分类树形菜单右弹出框-->
                    <div class="rightKno hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
  <div class="rightToMoveForKnoledge">
                    	<!-- 批量移动知识分类树形菜单 -->
              
        </div>
        </div>  
        </div>
        


<div class="container">
	<div class="pf_header">
    	<div class="pf">
   			<jsp:include page="/WEB-INF/page/include/header.jsp" />
  		</div>
  	</div>
    <div class="cl">
    	<div class="newright">
        	<div class="newrightco">
            	<div class="listpagenav">
                        <div class="breadCrumbHolder pf">
                                <div class="breadCrumb reHeight" id="breadCrumb3">
                                    <div class="z">
                                        <ul>
                                             <li class="first">
                                                <a href="${basepath }/">首页</a>
                                            </li>
                                            <li>
                                                <a href="${basepath }/courseware/coursewareList.html">培训资源</a>
                                            </li>
                                            <li class="last">
                                                知识分类
                                            </li>
                                            
                                        </ul>
                                    </div>
                                    <div class="y"></div>
                                </div>
                            </div>
                        </div>
                        
                <div class="reHeight">
                	<div class="newmain">
                	<div class="ne">
                	<div class="dataTables_wrapper" style="margin-left: 30px;">
                    	<!-- 动态导入知识分类的详细信息 -->
            	<div id="detail_org"></div>
            	</div>
            	</div>
                    </div>
                    <div class="newlefttree">
                    	<div class="pftree">
                        	<h3>知识分类</h3>
                        
                    		<div id="kno_jjjstree"></div>
                    		
						</div>
                        
                    </div>
                    <div class="extra">
                    	<h3><div class="extraimg"></div><div class="extraimg extraimon"></div><div class="extraimg extraimg2"></div><div class="extraimg extraimon2"></div></h3>
                    </div>
                </div>
            </div>
        </div>
    	<div class="newleft">
		        	<!-- 导入左侧导航 -->
		        	<c:set var="menu_sn" value="11" scope="request"></c:set>
		    		<jsp:include page="/WEB-INF/page/include/leftNav.jsp" />
		        </div>

        
        
    </div> 
    
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
	var knoRootId = ['${knoRootId}'];
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript">
	var rootId = "${node.id}";
	var ids = "${node.id}";
	var idpath ="${idpaths}";
	
	$(window).load(function() {
		/*
        if ("${param.operate}" == "update") {
        	alert("修改成功!");
        }
        if ("${param.operate}" == "add") {
        	alert("新增成功!");
        }
        */
    });
	
</script>
<script type="text/javascript" src="${basepath }/js/knowledge/organization.js" charset="gbk"></script>

</body>

</html>






