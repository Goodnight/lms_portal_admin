package com.telecom.lms.portal.admin.util;

public class StringTool {
	public static final String SPLIT_COMMA = ",";
	public static final String SPLIT_SLASH = "/";
	
	/**
	 * 传入字符串数组，将它转换成字符串，并用指定的分隔符作为分隔
	 * @param array	传入的数组
	 * @param split	指定的分隔符
	 * @return id1,id2,id3
	 */
	public static String getString(String[] array, String split){
		StringBuffer sb = new StringBuffer();
		for(int i=0;i<array.length;i++){
			sb.append(array[i]);
			if(i<array.length-1){
				sb.append(",");
			}
		}
		return sb.toString();
	}
	
	/**
	 * 传入字符串数组，将它转换成字符串，并用指定的分隔符作为分隔
	 * @param array	传入的数组
	 * @param split	指定的分隔符
	 * @return "id1","id2","id3"
	 */
	public static String getArrayString(String[] array, String split){
		StringBuffer sb = new StringBuffer();
		sb.append("[");
		for(int i=0;i<array.length;i++){
			sb.append("\"");
			sb.append(array[i]);
			sb.append("\"");
			if(i<array.length-1){
				sb.append(",");
			}
		}
		sb.append("]");
		return sb.toString();
	}
	
	/**
	    * 对知识分类的sn编号进行修正.  如果knoSn为A，则返回A-00-000，如果knoSn为A-01,则返回A-01-000，其它的则直接返回knoSn.
	    * @param knoSn 知识分类的sn编号.
	    * @return 返回修正后的sn编号.
	    */
	   public static String getKnoSnStr(String knoSn) {
		   if (knoSn == null || "".equals(knoSn) || knoSn.split("-").length > 2) {
			   return knoSn;
		   }
		   String result = knoSn;
	 	   if (knoSn != null) {
	 		   String[] level = knoSn.split("-");
	 		   if (level.length == 1) {
	 			  result = knoSn + "-00-000"; 
	 		   } else if (level.length == 2) {
	 			  result = knoSn + "-000"; 
	 		   }
	 	   }
	 	   return result;
	   }
}
