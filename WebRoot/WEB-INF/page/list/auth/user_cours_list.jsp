<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<div class="dataTables_wrapper">
        <!-- dateTable -->
        <div class="dataTables_wrapper learning-archive">
          <h3 class="reHeight">
            <div class="z m learning-h3">共学习${countHour}小时${countMinute}分${countSecond }秒，完成在线课程${resCourseList}门，其中培训班课程${learnStatsCount.classCourseNum }门，自选课程${learnStatsCount.courceNum }门，岗位课程${learnStatsCount.positionCourseNum }门</div>
          </h3>
          <table class="datatable" width="100%">
            <thead>
              <tr>
                <th>课程名称</th>
                <th>课程编号</th>
                <th>开始学习时间</th>
                <th>上次学习时间</th>
                <th>课件类型</th>
                <th>学习次数</th>
                <th>学习时长</th>
                <th>学习进度</th>
              </tr>
            </thead>
            <tbody>
              
              
              <c:forEach items="${resLearnList.data }" var="r" varStatus="st">
				<tr class="gradeA odd">
                <td class="taL"><a href="javascript:;">${r.course.res.name}</a>
                </td>
                <td> ${r.course.res.sn}</td>
                <td>${r.start_time}</td>
                <td>${r.last_time}</td>
                <td>${r.course.type.name}</td>
                <td>${r.times}次</td>
                <td> ${r.hour}:${r.minute}:${r.second }</td>
                <td>
                  <div class="speed">
                    <span class="truespeed" style="width: ${r.percent}%;"></span>
                  </div><br/>
                  <span><fmt:formatNumber value="${r.percent}" pattern="##.##" minFractionDigits="2" ></fmt:formatNumber>%</span>
                </td>
              </tr>
			</c:forEach>
            </tbody>
          </table>
          <!-- 分页对象 -->
			<c:set var="pager" value="${resLearnList.page }" scope="request"></c:set>
			<!-- 分页回调函数 -->
			<c:set var="pageFn" value="${pagefn }" scope="request"></c:set>
			<jsp:include page="/WEB-INF/page/list/pager.jsp"/>
        </div>
      </div>
 
