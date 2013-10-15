package com.telecom.lms.portal.admin.service;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Service;

/**
 * Spring加载bean实例处理器
 * @author SJTU
 *
 */
@Service
public class SpringLoadProcessor implements BeanPostProcessor {

	public Object postProcessBeforeInitialization(Object bean, String beanName)
			throws BeansException {
		return bean;
	}

	public Object postProcessAfterInitialization(Object bean, String beanName)
			throws BeansException {
		if(bean instanceof LoadMenuService){
			((LoadMenuService) bean).getMenu();
		}
		return bean;
	}

}
