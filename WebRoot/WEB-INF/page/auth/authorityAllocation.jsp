<%@page pageEncoding="utf-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="gbk" xml:lang="gbk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gbk" />
<meta http-equiv="content-language" content="gbk" />
<title>分配权限</title>
<jsp:include page="/WEB-INF/page/include/css.jsp"></jsp:include>
</head>
<body class="bg">

<div id="dialog" class="hidden">
    <div class="blackall">&nbsp;</div>
    <div class="newwindow" id="choosepersonco">
        <div class="taR"><a href="javascript:;"><img class="png_bg closebutton" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
        <div id="dialog_content" class="cl scroll"></div>
    </div>
</div>

<div class="newwindow hidden" id="addClassco">
    <div class="taR"><a href="javascript:;"><img class="png_bg closed" src="${basepath }/images/close.png" width="40" height="40" /></a></div>
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
            <div class="ngreyborder changeblue">
                <h2 class="png_bg"></h2>
                <table cellspacing="0" cellpadding="0" class="basic_list" style="width:100%;margin-left:0!important;border:0!important;">
                                <tbody>
                                    <tr>
                                        <th>导航菜单</td>
                                        <th><input name="" type="checkbox" value="" class="vm mr5 ml12"/>权限</th>
                                    </tr>
                                   <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr class="grey">
                                        <td>机构管理</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                    <tr>
                                        <td>岗位信息</td>
                                        <td><input name="" type="checkbox" value="" class="vm mr5 ml12"/>具备权限<input name="" type="checkbox" value="" class="vm mr5 ml12"/>高级管理</td>
                                    </tr>
                                </tbody>
                             </table>
                 <div class="makesure taR">
                        <input type="button" class="step m10 windowbutton" value="确定"/>
                        <input type="button" class="back m10 windowbutton" value="关闭"/>
                 </div>            
            </div>
        </div>
    </div>
</div>
<div class="container">
<jsp:include page="/WEB-INF/page/include/header.jsp"></jsp:include>
  <div class="content cl">
        <div class="ngreyborder changeblue2 mt20">
            <h2 class="png_bg">分配权限</h2>
            <div class="courseupload basic_information">
                <ul>
                    <li class="now">分配角色</li>
                    <li>分配权限</li>
                </ul>
                <div>
                    <table border="0" cellspacing="15" cellpadding="15">
                    <colgroup>
                        <col width="90" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td class="taR vt"><em>*</em>选择角色</td>
                            <td>
                                <div class="z choosecontent">
                                    <div><input name="" type="checkbox" value="" />Tom</div>
                                    <div><input name="" type="checkbox" value="" />David</div>
                                    <div><input name="" type="checkbox" value="" />Jack</div>
                                    <div><input name="" type="checkbox" value="" />Kevin</div>
                                </div>
                                <div class="z"><span class="vm choosedepartment">选择角色</span><br/><a href="javascript:;" class="ml13">移除</a></div>
                            </td>
                        </tr>
                        <tr>
                            <td class="taR vt"><em>*</em>选择人员</td>
                            <td>
                                <div class="z choosecontent">
                                    <div><input name="" type="checkbox" value="" />Tom</div>
                                    <div><input name="" type="checkbox" value="" />David</div>
                                    <div><input name="" type="checkbox" value="" />Jack</div>
                                    <div><input name="" type="checkbox" value="" />Kevin</div>
                                </div>
                                <div class="z"><span class="vm chooseperson">选择人员</span><br/><a href="javascript:;" class="ml13">移除</a></div>
                           </td>
                        </tr>
                    </tbody>
                </table>
                    <table border="0" cellspacing="15" cellpadding="15" class="hidden">
                    <colgroup>
                        <col width="90" />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td class="taR vt"><em>*</em>选择权限</td>
                            <td>
                                <div>
                                    <div><input name="" type="checkbox" value="" />Tom</div>
                                    <div><input name="" type="checkbox" value="" />David</div>
                                    <div><input name="" type="checkbox" value="" />Jack</div>
                                    <div><input name="" type="checkbox" value="" />Kevin</div>
                                </div>
                                <div class="z"><span class="vm addClass">选择权限</span><br/><a href="javascript:;" class="ml13">移除</a></div>
                           </td>
                        </tr>
                        <tr>
                            <td class="taR vt"><em>*</em>选择人员</td>
                            <td>
                                <div class="z choosecontent">
                                    <div><input name="" type="checkbox" value="" />Tom</div>
                                    <div><input name="" type="checkbox" value="" />David</div>
                                    <div><input name="" type="checkbox" value="" />Jack</div>
                                    <div><input name="" type="checkbox" value="" />Kevin</div>
                                </div>
                                <div class="z">
                                    <span class="vm chooseperson">选择人员</span><br/>
                                    <a href="javascript:;" class="ml13">移除</a>
                                </div>
                           </td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div align="right" class="mr10">
                    <a href="" class="step m10">确定</a>
                    <a href="" class="back m10 vm">关闭</a>
                </div>
            </div>
        </div>
    </div>
</div>
<jsp:include page="/WEB-INF/page/include/script.jsp"></jsp:include>
</body>
</html>
