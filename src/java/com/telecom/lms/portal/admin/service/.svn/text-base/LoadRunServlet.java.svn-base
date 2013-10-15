package com.telecom.lms.portal.admin.service;

import java.io.IOException;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.portal.admin.util.SessionConstants;

/**
 * 服务器启动加载的servlet
 * @author xuxing
 *
 */
public class LoadRunServlet extends HttpServlet {
	private static final long serialVersionUID = -7982303704639364884L;
	private Logger logger = LoggerFactory.getLogger(getClass());
	private ServletContext _context;
	
	public LoadRunServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public void init() throws ServletException {
		super.init();
		_context = this.getServletContext();
		List<MenuBo> menuList = LoadMenuService.menuList;
		_context.setAttribute(SessionConstants.CONTEXT_MENU_LIST, menuList);
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doGet(req, resp);
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	
}
