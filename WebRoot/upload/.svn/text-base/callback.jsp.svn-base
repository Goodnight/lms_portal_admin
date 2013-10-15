<%@page	import="com.myctu.platform.protocol.transform.json.JacksonSupport"%>
<%@page language="java" import="java.util.*"
	contentType="text/html;charset=utf-8" pageEncoding="utf-8"%>
	<%
		String json = request.getParameter("callback");
		
		Map m = JacksonSupport.objectMapper.readValue(json, Map.class);

		List<Map> files = (List<Map>) m.get("files");
		System.out.println("iddd--------------------------------"+files.get(0).get("id"));
		
	%>
	
	<%	for(Map file:files){ %>
	  <a href="http://180.168.60.15:15320/resource-proxy/<%=file.get("download_url") %>"><%=file.get("full_name") %></a></br>
	  <input type="hidden" id="code" name="code" value="<%=file.get("id") %>"/>
	<%} %>


	<%--
	<div style="width: 750px;">
		<form name="getURL" action="<%=request.getContextPath()%>/signature"
			method="post">
			<ul>
				<!-- 返回结果 -->
				<li>callback: <textarea rows="3" cols="100"><%=request.getParameter("callback")%></textarea>
				</li>
				<!-- 下载地址 -->
				<li>下载地址:<input type="text" id="download_site"
					name="download_site"
					value="http://resource.myctu.com:15320<%=request.getContextPath()%>/download"
					style="width: 600px;" />
				</li>
				<!-- 资源id -->
				<li>文件标识: <input type="text" id="file_id" name="file_id"
					value="" style="width: 300px;" />
				</li>
				<li>商户:<input type="text" id="domain" name="domain"
					value="telecom" style="width: 300px;" />
				</li>
				<li>用户:<input type="text" id="user" name="user" value="user123"
					style="width: 300px;" />
				</li>
				<li>过期时间(ms绝对时间):<input type="text" id="expire" name="expire"
					value="<%=System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 365%>"
					style="width: 300px;" />(<%=new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 24 * 365)%>)
				</li>
				<li><button name="sing">生成下载地址</button></li>
			</ul>

		</form>

		<script type="text/javascript">
		   var callback = <%=request.getParameter("callback")%>;
		   var file_id = callback.files[0].id;
		   
		   var file_id_field= document.getElementById("file_id");
		   file_id_field.value = file_id;
		</script>
	</div>
	--%>


