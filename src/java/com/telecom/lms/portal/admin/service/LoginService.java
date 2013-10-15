package com.telecom.lms.portal.admin.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.telecom.lms.core.bo.auth.UserInfoBo;
import com.telecom.lms.sdk.service.auth.UserInfoService;
import com.telecom.lms.sdk.service.auth.param.UserInfoParam;

@Service
public class LoginService {
	@Autowired UserInfoService userService;
	
	/**
	 * 通过用户名称登录
	 * @param username
	 * @param pwd
	 * @return
	 */
	public UserInfoBo getUser(String username, String pwd){
		UserInfoParam query = new UserInfoParam();
		query.setName(username);
		List<UserInfoBo> userList = userService.getUserInfos(query);
		if(userList!=null&&userList.size()>0){
			UserInfoBo user = userList.get(0);
			if(user.getPwd()!=null && user.getPwd().equals(pwd)){
				return user;
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
	
	/**
	 * 通过用户SN登录
	 * @param sn
	 * @param pwd
	 * @return
	 */
	public UserInfoBo getUserBySn(String sn, String pwd){
		UserInfoParam query = new UserInfoParam();
		query.setSn(sn);
		List<UserInfoBo> userList = userService.getUserInfos(query);
		if(userList!=null&&userList.size()>0){
			UserInfoBo user = userList.get(0);
			if(user.getPwd()!=null && user.getPwd().equals(pwd)){
				return user;
			}else{
				return null;
			}
		}else{
			return null;
		}
	}
	
	/**
	 * 通过用户ID获得用户
	 * @param uid
	 * @return
	 */
	public UserInfoBo getUserById(String uid){
		UserInfoParam query = new UserInfoParam();
		query.setId(uid);
		UserInfoBo  ub= userService.getLocalUserInfo(query);
		return ub;
	}
}
