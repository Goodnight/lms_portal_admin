package com.telecom.lms.portal.admin.util;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.myctu.platform.protocol.transform.json.JacksonSupport;

public class JSONWriter {

	public static void write(HttpServletResponse response, Object obj)
			throws IOException {
		String strJSON = null;
		strJSON = JacksonSupport.objectMapper.writeValueAsString(obj);
		response.setContentType("text/html;charset=utf-8");
		response.getWriter().print(strJSON);
		response.getWriter().close();
	}
}
