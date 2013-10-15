<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@include file="/WEB-INF/page/include/taglibs.jsp"%>
<!--[if IE 6]>
<script src="js/DD_belatedPNG_0.0.8a-min.js"></script>
<script>
  DD_belatedPNG.fix('.png_bg');
</script>
<![endif]-->
<script type="text/javascript">
<!--
	var basepath = "${basepath}";
	var userdepid = ["${sessionScope.rootorg}"];
	var userdeppath = ["${sessionScope.rootorg}"];
	var groupOrgtId = ["${sessionScope.groupOrgId}"];
	var KnoRootIdValue = "${knoRootId}" == "" ? "0" : "${knoRootId}";
	//var knoRootId = ['${knoRootId}'];
	var knoRootId = [KnoRootIdValue];  //根节点ID.
	var rootPositionValue = "${sessionScope.rootposition}" == "" ? "10" : "${sessionScope.rootposition}";
	var rootPosition = [rootPositionValue];
//-->
</script>
<script type="text/javascript" src="${basepath }/js/jquery.min.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.uniform.min.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.ui.min.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.ui.i18n.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.validate.min.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.cookie.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.hotkeys.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.jstree.js"></script>
<script type="text/javascript" src="${basepath }/js/modules/dialog/lhgdialog.min.js"></script>
<script type="text/javascript" src="${basepath }/js/activity.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/menu.js"></script>
<script type="text/javascript" src="${basepath }/js/function.js" charset="gbk"></script>
<script type="text/javascript" src="${basepath }/js/ajaxfileupload.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.form.js"></script>
<script type="text/javascript" src="${basepath }/js/google.js"></script>
<script type="text/javascript" src="${basepath }/js/jquery.metadata.js"></script>

<script type="text/javascript" src="${basepath }/js/bootstrap/jquery-ui-1.10.2.custom.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.slimscroll.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.easy-pie-chart.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.sparkline.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.flot.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.flot.pie.min.js" ></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.flot.resize.min.js" ></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/ace.min.js" ></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/ace-elements.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/bootstrap.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.dataTables.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.dataTables.bootstrap.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/bootstrap-datepicker.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/bootstrap-timepicker.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/daterangepicker.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/spin.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/jquery.gritter.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/bootbox.min.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/date.js"></script>
<script type="text/javascript" src="${basepath }/js/bootstrap/fuelux.wizard.js"></script>