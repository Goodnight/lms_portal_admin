package com.telecom.lms.portal.admin.control.demand;

import java.util.List;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.telecom.lms.core.bo.demand.DmdItemBo;
import com.telecom.lms.core.bo.demand.DmdTopicBo;
import com.telecom.lms.sdk.service.demand.DmdItemService;
import com.telecom.lms.sdk.service.demand.DmdTopicService;
import com.telecom.lms.sdk.service.demand.param.DmdItemParam;
import com.telecom.lms.sdk.service.demand.param.DmdTopicParam;
/**
 * 
 * @author yanlei
 *
 */
public class DemandUtil {
	private static String[] paths = new String[] {"lmscore-sdk.xml"};
	private static ApplicationContext context = new ClassPathXmlApplicationContext(paths);
	
	public static List<DmdItemBo> getDmdItems(){
		DmdItemService diService = context.getBean(DmdItemService.class);
		DmdItemParam dtp = new DmdItemParam();
		dtp.setMax(null);
		dtp.setPage(null);
		return diService.getDmdItems(dtp);
	}
	public static List<DmdTopicBo> getDmdTopics(){
		DmdTopicService dtService = context.getBean(DmdTopicService.class);
		DmdTopicParam dtp = new DmdTopicParam();
		dtp.setMax(null);
		dtp.setPage(null);
		return dtService.getDmdTopics(dtp);
	}

}
