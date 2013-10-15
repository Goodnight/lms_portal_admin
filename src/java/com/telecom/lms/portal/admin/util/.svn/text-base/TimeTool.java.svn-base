package com.telecom.lms.portal.admin.util;

public class TimeTool {
	public static String changeSecToHMS(String second){
		if(second==null || "".equals(second)){
			return "00:00:00";
		}
		float j=Float.parseFloat(second);
		int i=(int) j;
		int hour=i/3600;
		int modhour=i%3600;
		int min=modhour/60;
		int sec=i%60;
		StringBuffer HMS=new StringBuffer();
		if(hour>9){
			HMS.append(hour);
		}else{
			HMS.append("0"+hour);
		}
		if(min>9){
			HMS.append(":"+min);
		}else{
			HMS.append(":0"+min);
		}
		if(sec>9){
			HMS.append(":"+sec);
		}else{
			HMS.append(":0"+sec);
		}
		return HMS.toString();
	}
	
	public static String changepercent(String percent){
		float i=Float.parseFloat(percent);
		if(i>100f){
			percent="100";
		}
		
		return percent;
	}
}
