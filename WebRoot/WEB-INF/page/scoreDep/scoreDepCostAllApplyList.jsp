<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="utf-8" xml:lang="utf-8">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="content-language" content="utf-8" />
<title>审批积分兑换</title>
<jsp:include page="/WEB-INF/page/include/css.jsp" />
</head>
<body class="bg">
	<!-- 弹出选择部门树 -->
	<div class="blackall hidden">&nbsp;</div>
<div class="treewindow">
	<div id="org_jstree1" class="demo treedemo"></div>
    <div align="right" class="mt10"><input name="" type="button" class="step mr10 vm treewindowsure" value="确定" /><a href="javascript:;" class="back vm treewindowback">取消</a></div>                    
</div>

<div class="blackall hidden"></div>
<div class="choosedepartmentco hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
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
 <div class="choosedepartmentco hidden">
  		<div class="companylist w164">
        	<div align="right" class="w140"><a href="javascript:;"><img src="${basepath }/images/deletegrey.gif" width="13" height="13" /></a></div>
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
<div class="newwindow hidden" id="choosegroup">
	<div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
	<div class="ngreyborder mt10" style="background:#fff;">
            	<h2 class="png_bg">分配奖励积分</h2> 
                <div class="scroll">               
                	<div class="basic_information mt2">
              		 <table border="0" cellspacing="15" cellpadding="15">
                	<tbody>
                    	<tr>
                        	<td>被奖励的部门</td>
                            <td><input type="text" /><span class="vm choosedepartment">选择部门</span></td>
                        </tr>
                        <tr>
                            <td>奖励积分数值：</td>
                            <td><input type="text" /></td>
                        </tr>
                        <tr>
                            <td>奖励时间</td>
                            <td>3天</td>
                        </tr>
                        <tr>
                        	<td><em>*</em>奖励类别：</td>
                            <td>
                            	<select name="">
                                	<option>绩效考核</option>
                                	<option>教材</option>
                               		<option>课件制作</option>
                                	<option>授课</option>
                                    <option>其他</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                        	<td class="vt">奖励原因</td>
                            <td><textarea name="" cols="" rows=""></textarea></td>
                        </tr>
                    </tbody>
                </table> 	
                <div align="right" class="mr10"><input name="" type="button" class="step m10 vm windowbutton" value="确定"/><a href="javascript:;" class="back windowbutton vm">关闭</a></div>
            </div> 
                </div> 
            </div>
</div>
<div class="container">
    <jsp:include page="/WEB-INF/page/include/header.jsp" />
    <div class="breadCrumbHolder breadCrumbPage">
  	<div class="headerco">
     	<div class="breadCrumb reHeight noborder" id="breadCrumb3">
                                <div class="z">
                                	<ul>
                                   <li class="first">
                                            <a href="${basepath }/">首页</a>
                                        </li>
                                        <li>
                                            <a href="${basepath }/rewardScoreDep/scoreDepList.html">集团积分</a>
                                        </li>
                                        <li class="last">
                                                                                                                部门积分列表
                                        </li>
                                	</ul>
                                </div>
                                <div class="y"></div>
                            </div> 
    </div>
  </div>
  <div class="content cl">
		<div class="ngreyborder changeblue2 mt20">
        	<h2 class="png_bg">积分兑换审批</h2>
            <ul class="png_bg mt40">
            <input id="depId" name="depId" type="hidden" value="${depId}"/>
             	<li class="now">查询</li>
            </ul>
            <div class="searchblock pl10 w92p">
				<table border="0" cellspacing="0" cellpadding="0">
                    <tr>
                        <td class="taR">年度</td>
                        <td class="taL"><select name="year" class="select" id="year">
                                            <option value="">全部</option>
                                        	<option>2007</option>
                                            <option>2008</option>
                                            <option>2009</option>
                                            <option>2010</option>
                                            <option>2011</option>
                                            <option>2012</option>
                                            <option>2013</option>
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                        </select></td>
                        
                        <td class="taR">部门</td>
                        <td class="taL" colspan="3">
                        <input type="hidden" name="dep_id" id="dep_id" value="" />
                        <input id="depName" name="class_dep_name" type="text" class="input vm si" value="" />
		                <input id="depId" name="class_dep" type="hidden" value=""/>
                        <span class="tochoose chooseDep">选择部门</span>
                        </td>
                                                 
                        <td class="taR">审批状态</td>
                        <td class="taL" >
                        	<label class="autowidth">
						<span class="option choosed">
						<input id="status" name="status" type="radio" value="" checked="checked"/>
						</span>
						 全部</label>
							<label class="autowidth">
							<span class="option">
							<input id="status" name="status" class="vm" type="radio" value="0"/>
							</span>
							未审批
							</label>
							<label class="ml6 autowidth">
							<span class="option">
							<input id="status" name="status" type="radio" value="1" />
							</span>
							已通过
							</label>
							<label class="ml6 autowidth">
							<span class="option">
							<input id="status" name="status" type="radio" value="2" />
							</span>
							未通过
							</label>
                        </td>
                    </tr>
                </table>
				<div align="right" class="mt10 mr10"><input name="" type="button" class="searchbutton m10" value="搜索" hidefocus="true" onclick="selectBottonClick(1)"/></div>
             </div>
            <div class="mt10">
                <div class="reHeight mt10">
                	<h4 class="z ml12 pt10">明细列表</h4>
                	<p class="y mr10"><a href="javascript:;" class="functionbutton" id="btn_pz">批准</a><a href="javascript:;" class="functionbutton" id="btn_bpz">不批准</a></p>
                </div>
                <div class="dataTables_wrapper mt10" style="padding-bottom:0">
                
                <div id="list_scoreDepCostAllApply"><div>
                
</div>
</div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
	var basepath = "${basepath}";
</script>

<script type="text/javascript">
	var depId = "${depId}";
</script>
<jsp:include page="/WEB-INF/page/include/script.jsp" />
<script type="text/javascript" src="${basepath }/js/score/scoreDepCostAllApply.js" charset="gbk"></script>
<input id="depId" name="depId" type="hidden" value="${depId}"/>
</body>

</html>