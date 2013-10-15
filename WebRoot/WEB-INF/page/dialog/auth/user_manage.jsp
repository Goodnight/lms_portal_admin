<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
    <div class="cl scroll">
        <div>
            <div class="ngreyborder" style="background:#fff;">
                <h2 class="png_bg">角色用户</h2>
                <ul class="png_bg mt40">
                        <li class="now" style="background:#fff;">查询</li>
                    </ul>
                <div class="choosedcourse"> 
                    <div class="mt20 reHeight">
                        <div class="z ml12 mr10">筛选部门： </div>
                        <div class="message_nav z" style="padding-top:0">
                                                <div class="fleft mn_all greybg"><div class="fleft mnw"><a href="javascript:void(null)" id="navall">全部</a></div><div class="fleft bta"><img src="../../images/m_arrow_1.gif" width="7" height="4" /></div></div>
                                                <div class="clr"></div>
                                                <div class="m1_window">
                                                 </div>  
                                            </div>
                    </div>
                    <form id="query_form">
                    <div class="mt20"><span class="mr10 ml13">员工编号： <input id="sn" name="sn" type="text" class="input" style="border:1px solid;"/></span><span class="mr10">员工姓名： <input type="text" class="input" style="border:1px solid;"  /></span></div>
                    </form>
                    <div align="right"><input type="button" class="searchbutton m10" value="搜索"/></div>
                 </div>
                <div class="choosedcourse">
                    <ul class="png_bg">
                        <li class="now w177">XXX角色用户列表</li>
                    </ul>
                    <div class="dataTables_wrapper mt10">
                                <div class="reHeight">
                                <div class="dataTables_length"><label class="reHeight"><div class="z pt10">每页显示</div><div class="selector z" id="uniform-undefined"><span style="-moz-user-select: none;">10</span><select size="1" style="opacity: 0;"><option value="10" selected="selected">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select></div><div class="z pt10">条</div></label></div>
                                </div>
                                <table class="datatable" width="100%">
                                    <thead>
                                        <tr>
                                            <th width="30"><input name="input" type="checkbox" value="" class="checkbox"/></th>
                                            <th>员工编号</th>
                                            <th>员工姓名</th>
                                            <th>所属部门</th>
                                            <th>手机号码</th>
                                            <th>邮箱</th>  
                                      </thead>
                                      <tbody>
                                        <tr class="gradeA odd">
                                            <td><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                            <td>e234324</td>
                                            <td>张节节</td>
                                            <td>史蒂芬森地方</td>
                                            <td>154535435345435</td>
                                            <td>courseware2008@qq.com</td>
                                         </tr>
                                         <tr class="gradeA even">
                                            <td><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                            <td>e234324</td>
                                            <td>张节节</td>
                                            <td>史蒂芬森地方</td>
                                            <td>154535435345435</td>
                                            <td>courseware2008@qq.com</td>
                                          </tr>
                                          <tr class="gradeA odd">
                                            <td><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                            <td>e234324</td>
                                            <td>张节节</td>
                                            <td>史蒂芬森地方</td>
                                            <td>154535435345435</td>
                                            <td>courseware2008@qq.com</td>
                                         </tr>
                                         <tr class="gradeA even">
                                            <td><input name="input" type="checkbox" value="" class="checkbox"/></td>
                                            <td>e234324</td>
                                            <td>张节节</td>
                                            <td>史蒂芬森地方</td>
                                            <td>154535435345435</td>
                                            <td>courseware2008@qq.com</td>
                                          </tr>
                                         </tbody>
                                         
                                    </table>
                                <div class="cl">
                                    <div class="dataTables_info">显示总共58条中的1-10条</div>
                                    <div class="dataTables_paginate paging_full_numbers"><span class="first paginate_button paginate_button_disabled">第一页</span><span class="previous paginate_button paginate_button_disabled">前一页</span><span><span class="paginate_active">1</span><span class="paginate_button">2</span><span class="paginate_button">3</span><span class="paginate_button">4</span><span class="paginate_button">5</span></span><span class="next paginate_button">后一页</span><span class="last paginate_button">最后页</span></div>
                                </div>
                            </div>
                     <div class="makesure">
                        <input type="button" class="back windowbutton" value="关闭"/>
                    </div>
                 </div>
                 <div class="choosedcourse hidden"> 
                    <div class="mt20"><span class="mr10 ml13">员工编号： <input type="text" class="input" style="border:1px solid;"/></span><span class="mr10">员工姓名： <input type="text" class="input" style="border:1px solid;"  /></span><span class="mr10">管辖范围： <input type="text" class="input" style="border:1px solid;"    /></span><!--<span class="mr10">管辖部门： <input type="text" class="input" style="border:1px solid;"    /><em class="tochoose choosedepartment">选择部门</em></span>--><span class="mr10">所属部门： <input type="text" class="input" style="border:1px solid;"  /><em class="tochoose choosedepartment">选择部门</em></span></div>
                    <div align="right"><input type="button" class="searchbutton m10" value="搜索"/></div>
                 </div>
                <div class="choosedcourse hidden">
                    <ul class="png_bg">
                        <li class="now w177">XXX角色用户列表</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                        <thead>
                            <tr>
                                <th>员工编号</th>
                                <th>员工姓名</th>
                                <th>所属部门</th>
                                <th>管辖范围</th>
                                <th>手机号码</th>
                                <th>邮箱</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="grey">
                                <td>e234324</td>
                                <td>张节节</td>
                                <td>史蒂芬森地方</td>
                                <td>史蒂芬森地方</td>
                                <td>154535435345435</td>
                                <td>courseware2008@qq.com</td>
                            </tr>
                            <tr>
                                <td>e234324</td>
                                <td>张节节</td>
                                <td>史蒂芬森地方</td>
                                <td>史蒂芬森地方</td>
                                <td>154535435345435</td>
                                <td>courseware2008@qq.com</td>
                            </tr>
                        </tbody>
                     </table>
                     <div class="reHeight pager">
                                <div class="pagernext"><a href="" title=""></a></div>
                                <div class="pagerbefore"><a  href="" title=""></a></div>
                                <div class="wp-pagenavi"><em>共967页1457条</em><a class="page smaller" href="">1</a><span class="current">2</span><a class="page larger" href="">3</a><a class="page larger" href="">4</a><a class="page larger" href="">5</a><span class="extend">...</span><a class="last" href="">尾页</a></div>                                          
                     </div>
                     <div class="makesure">
                        <input type="button" class="back windowbutton" value="关闭"/>
                    </div>
                 </div>
                 <div class="choosedcourse hidden"> 
                    <div class="mt20"><span class="mr10 ml13">员工编号： <input type="text" class="input" style="border:1px solid;"/></span><span class="mr10">员工姓名： <input type="text" class="input" style="border:1px solid;"  /></span><span class="mr10">管辖部门： <input type="text" class="input" style="border:1px solid;"    /><em class="tochoose choosedepartment">选择部门</em></span></div>
                    <div align="right"><input type="button" class="searchbutton m10" value="搜索"/></div>
                 </div>
                <div class="choosedcourse hidden">
                    <ul class="png_bg">
                        <li class="now w177">XXX角色用户列表</li>
                    </ul>
                    <table border="0" cellspacing="0" cellpadding="0" width="100%">
                        <thead>
                            <tr>
                                <th>员工编号</th>
                                <th>员工姓名</th>
                                <th>所属部门</th>
                                <th>管辖范围</th>
                                <th>手机号码</th>
                                <th>邮箱</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="grey">
                                <td>e234324</td>
                                <td>张节节</td>
                                <td>史蒂芬森地方</td>
                                <td>史蒂芬森地方</td>
                                <td>154535435345435</td>
                                <td>courseware2008@qq.com</td>
                            </tr>
                            <tr>
                                <td>e234324</td>
                                <td>张节节</td>
                                <td>史蒂芬森地方</td>
                                <td>史蒂芬森地方</td>
                                <td>154535435345435</td>
                                <td>courseware2008@qq.com</td>
                            </tr>
                        </tbody>
                     </table>
                     <div class="reHeight pager">
                                <div class="pagernext"><a href="" title=""></a></div>
                                <div class="pagerbefore"><a  href="" title=""></a></div>
                                <div class="wp-pagenavi"><em>共967页1457条</em><a class="page smaller" href="">1</a><span class="current">2</span><a class="page larger" href="">3</a><a class="page larger" href="">4</a><a class="page larger" href="">5</a><span class="extend">...</span><a class="last" href="">尾页</a></div>                                          
                     </div>
                     <div class="makesure">
                        <input type="button" class="back windowbutton close" value="关闭"/>
                    </div>
                 </div>
            </div>
        </div>
    </div>

<script type="text/javascript">
$(function(){
    //点击确认
    $(".close").click(function(){
        ///////////////////
        $("#dialog").hide();
    });
});
</script>