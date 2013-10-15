<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>无标题文档</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">
	<input id="sId" type="hidden" value="${sId}" />
<!-- 对话框 -->
	<div id="dialog" class="hidden">
		<!-- 半透明背景 -->
		<div class="blackall">&nbsp;</div>
		<div class="newwindow" id="choosepersonco">
			<!-- 关闭按钮 -->
			<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
		    <!-- 对话框内容 -->
		    <div id="dialog_content" class="cl scroll"></div>
		</div>
	</div>

<div class="newwindow hidden" id="leadinco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="../../images/close.png" width="40" height="40" /></a></div>
    <div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">导入学员</h2>
            <div class="basic_information w90p">
              <div class="pt20">导入学员：<input name="" type="file" /> <a href="" class="ml30">下载导入模板 <img src="../../images/download.png" width="16" height="16" class="vm"/></a></div>
                <div class="m10 taR "><input type="button" class="step newwindowbutton" value="确定"/></div>
            </div>
    </div>
</div>
<div class="newwindow hidden" id="choosepersonco">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="../../images/close.png" width="40" height="40" /></a></div>
    <div class="cl scroll">
    	<div class="z w176">
        	<div class="companylist w164 windowtree">
    			<div class="bigtree">
                    	<div class="tree_title"><a href="javascript:;">中国电信集团</a></div>
                        <div class="tree_co">
                        	<div class="rightline2">
                            	<ul>
                                	<li><span>集团公司领导</span></li>
                                    <li class="lastfold"><span>总经理助理</span></li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline">
                            	<ul class="hidden">
                                	<li><span>总经理办公室</span>
                                    	<ul>
                                        	<li><span>总经理的父母</span></li>
                                            <li><span>总经理的孩子</span></li>
                                            <li><span>总经理的老婆</span>
                                            	<ul>
                                                    <li><a href="">总经理的父母</a></li>
                                                    <li><a href="">总经理的孩子</a></li>
                                                    <li><a href="">总经理的老婆</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><span>外事处</span>
                                    	<ul>
                                        	<li><a href="">总经理的父母</a></li>
                                            <li><a href="">总经理的孩子</a></li>
                                            <li><a href="">总经理的老婆</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline">
                            	<ul class="hidden">
                                	<li><a href="">总经理办公室</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆
                                            	<ul>
                                                    <li>总经理的父母</li>
                                                    <li>总经理的孩子</li>
                                                    <li>总经理的老婆</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><a href="">外事处</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline">
                            	<ul class="hidden">
                                	<li><a href="">总经理办公室</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆
                                            	<ul>
                                                    <li>总经理的父母</li>
                                                    <li>总经理的孩子</li>
                                                    <li>总经理的老婆
                                                    	<ul>
                                                            <li>总经理的父母</li>
                                                            <li>总经理的孩子</li>
                                                            <li>总经理的老婆
                                                            	<ul>
                                                                    <li>总经理的父母</li>
                                                                    <li>总经理的孩子</li>
                                                                    <li>总经理的老婆</li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><a href="">外事处</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline">
                            	<ul class="hidden">
                                	<li><a href="">总经理办公室</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆
                                            	<ul>
                                                    <li>总经理的父母</li>
                                                    <li>总经理的孩子</li>
                                                    <li>总经理的老婆</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><a href="">外事处</a>
                                    	<ul>
                                        	<li>总经理的父母</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的老婆</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline">
                            	<ul class="hidden">
                                	<li><a href="">总经理办公室</a>
                                    	<ul>
                                        	<li>总经理的老婆</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的父母</li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><a href="">外事处</a></li>
                                </ul>
                            </div>
                            <div class="plus">综合部</div>
                            <div class="rightline b0">
                            	<ul class="hidden">
                                	<li><a href="">总经理办公室</a>
                                    	<ul>
                                        	<li>总经理的老婆</li>
                                            <li>总经理的孩子</li>
                                            <li>总经理的父母</li>
                                        </ul>
                                    </li>
                                    <li><a href="">投资者联络处</a></li>
                                    <li><a href="">综合调研室</a></li>
                                    <li><a href="">文秘处</a></li>
                                    <li><a href="">新闻宣传处</a></li>
                                    <li><a href="">安全保卫处</a></li>
                                    <li><a href="">行政管理处</a></li>
                                    <li><a href="">保密档案处</a></li>
                                    <li><a href="">外事处</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>   
            </div>
        </div>
        <div class="y w750">
        	<div class="ngreyborder" style="background:#fff;">
            	<h2 class="png_bg">选择人员</h2>
          <div class="choosedcourse" style="margin-top:40px;">	
                 	<div class="mt20"><span class="mr10 ml13">员工编号： <input type="text" class="input" style="border:1px solid;"/></span><span class="mr10">员工姓名： <input type="text" class="input" style="border:1px solid;"	/></span><span class="ml30">包含子部门：<select name=""><option>不包含</option><option>包含</option></select></span></div>
                    <div align="right"><input type="button" class="searchbutton m10" value="搜索"/></div>
                 </div>
                 <div class="choosedcourse">
                 	<ul class="png_bg">
                        <li class="now">员工列表</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    	<colgroup>
                        	<col width="25%" />
                        	<col width="25%" />
                            <col width="25%" />
                        	<col width="25%" />       
                    	</colgroup>
                    	<thead>
                        	<tr>
                            	<th><input type="checkbox" /></th>
                                <th>所在部门</th>
                            	<th>员工编号</th>
                            	<th>员工姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                        	<tr class="grey">
                            	<td><input type="checkbox"/></td>
                                <td>某某部门</td>
                                <td>323321432</td>
                            	<td>张节节</td>
                            </tr>
                            <tr>
                            	<td><input type="checkbox" /></td>
                                <td>某某部门</td>
                                <td>323321432</td>
                            	<td>张节节</td>
                            </tr>
                        </tbody>
           			 </table>
                     <div class="reHeight pager">
                            	<div class="pagernext"><a href="" title=""></a></div>
                            	<div class="pagerbefore"><a  href="" title=""></a></div>
                            	<div class="wp-pagenavi"><em>共967页1457条</em><a class="page smaller" href="">1</a><span class="current">2</span><a class="page larger" href="">3</a><a class="page larger" href="">4</a><a class="page larger" href="">5</a><span class="extend">...</span><a class="last" href="">尾页</a></div>											
                     </div>
                     
                 </div>
                 <div class="choosedcourse">
                 	<ul class="png_bg">
                        <li class="now">已选员工</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                    	<colgroup>
                        	<col width="25%" />
                        	<col width="25%" />
                            <col width="25%" />
                        	<col width="25%" />       
                    	</colgroup>
                    	<thead>
                        	<tr>
                            	<th></th>
                                <th>所在部门</th>
                            	<th>员工编号</th>
                            	<th>员工姓名</th>
                            </tr>
                        </thead>
                        <tbody>
                        	<tr class="grey">
                            	<td><input type="button" class="removebutton" /></td>
                                <td>某某部门</td>
                                <td>323321432</td>
                            	<td>张节节</td>
                            </tr>
                            <tr>
                            	<td><input type="button" class="removebutton" /></td>
                                <td>某某部门</td>
                                <td>323321432</td>
                            	<td>张节节</td>
                            </tr>
                        </tbody>
           			 </table>
                     <div class="reHeight pager">
                            	<div class="pagernext"><a href="" title=""></a></div>
                            	<div class="pagerbefore"><a  href="" title=""></a></div>
                            	<div class="wp-pagenavi"><em>共967页1457条</em><a class="page smaller" href="">1</a><span class="current">2</span><a class="page larger" href="">3</a><a class="page larger" href="">4</a><a class="page larger" href="">5</a><span class="extend">...</span><a class="last" href="">尾页</a></div>											
                     </div>
                     <div class="makesure">
                    	<input type="button" class="step nchoosepersonbutton" value="确定"/>
                    </div>
                 </div>
            </div>
        </div>
    </div>
</div>

<div class="newwindow hidden" id="release">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="../../images/close.png" width="40" height="40" /></a></div>
	<div class="ngreyborder2 mt10 changeblue2 scroll">
    	<h2 class="png_bg">人员列表</h2>
        <div class="cl" style="width:95%;margin:0 auto;">
			<table width="100%" cellspacing="0" cellpadding="0" class="mt40" style="border-collapse:separate;border:1px solid #ccc;">
                    <thead>
                        <tr>
                            <th>员工编号</th>
                            <th>员工姓名</th>
                            <th>部门</th>
                            <th>联系电话</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="grey">
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        <tr>
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        <tr class="grey">
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        <tr>
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        <tr class="grey">
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        <tr>
                            <td>E3257845</td>
                            <td>韩军</td>
                            <td class="taL">上海电信有限公司-设备培训安装中心似懂非懂是非得失发</td>
                            <td>139876040973</td>
                            <td>sdfsdaf@sina.com.cn</td>
                        </tr>
                        
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="8">
                                <div class="reHeight pager">
                                    <div class="pagernext"><a href="" title=""></a></div>
                                    <div class="pagerbefore"><a  href="" title=""></a></div>
                                    <div class="wp-pagenavi"><em>共967页1457条</em><a class="page smaller" href="">1</a><span class="current">2</span><a class="page larger" href="">3</a><a class="page larger" href="">4</a><a class="page larger" href="">5</a><span class="extend">...</span><a class="last" href="">Last</a></div>											
                               </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>	
        </div>                
        
    </div> 
</div>
<div class="container">
  <jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">新建需求调查</h2>
            <div class="courseupload basic_information">
            	<ul class="window_nav newnav">
                    <li class="basic"><a href="updateInquiryIndex.html?sId=${sId}" class="green png_bg">基本信息</a></li>
                    <li class="course"><a href="inquiryAimInfo.html?sId=${sId}" class="png_bg">安排人员</a></li>
                </ul>
                <div class="basic_list mt40" style="border:0;">
                	<div class="y"><a id="btn_assigndep" href="javascript:;" class="functionbutton groupadd">添加</a><a id="btn_deleteDep" class="functionbutton">删除</a></div>
                    <div>部门组列表</div>
                </div>
                <div id="list_inquiryAimDep"></div>
                <div class="basic_list mt40" style="border:0;">
                	<div class="y"><a id="btn_user" href="javascript:;" class="functionbutton">添加</a><a href="javascript:;" class="functionbutton leadin">导入</a><a id="btn_deleteUser" class="functionbutton">删除</a></div>
                    <div>学员列表</div>
                </div>
               <div id="list_inquiryAimUser"></div>
                <div class="basic_list mt40" style="border:0;">
                	<div class="y"><a id="btn_trainClass" href="javascript:;" class="functionbutton" >添加</a><a  id="btn_deleteTrainClass" class="functionbutton">删除</a></div>
                    <div>按培训班</div>
                </div>
                 <div id="list_inquiryAimTrainClass"></div>
                <div align="right" class="mr10"><a href="inquiryIndex.html" class="back m10 vm">关闭</a></div>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
<script type="text/javascript">
	var pid="";
	var userurl = basepath + "/inquiry/saveInquiryAimUser.html";
</script>
<script type="text/javascript" src="${basepath }/js/inquiry/inquiryAim.js" charset="gbk"></script>
</body>

</html>






    