package com.telecom.lms.portal.admin.service;

import java.util.ArrayList;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.telecom.lms.core.bo.auth.MenuBo;
import com.telecom.lms.sdk.service.auth.MenuService;
import com.telecom.lms.sdk.service.train.TrainClassService;

@Service
public class LoadMenuService {
	@Autowired MenuService menuService;
	@Autowired TrainClassService classService;
	private Logger logger = LoggerFactory.getLogger(getClass());
	
	/**
	 * 通过getMenu()将菜单列表赋给menuList
	 * 然后，在servlet里取menuList的值，添加到context中
	 */
	public static List<MenuBo> menuList = new ArrayList<MenuBo>();
	
	/**
	 * 将菜单列表赋给menuList
	 */
	public void getMenu(){
		logger.info("Loading menu list!");
		menuList = menuService.getMenus(null);
		logger.info("Load menu list complete!");
	}
}
