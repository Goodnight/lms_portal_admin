package com.telecom.lms.portal.admin.util;

import java.io.BufferedOutputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletInputStream;

import com.telecom.lms.sdk.util.DateTool;

public class FileTool {

	/**
	 * 项目根路径
	 */
	public static final String BASEPATH = System.getProperty("user.dir");

	/**
	 * 保存文件,讲文件流保存到指定路径filePath
	 * 
	 * @param in
	 *            文件流
	 * @param filePath
	 *            保存的路径和文件名
	 * @throws IOException
	 */

	public static File uploadFile(ServletInputStream in) {

		String loadDataPath = BASEPATH + "/upload/" + DateTool.getNowDate();

		File dir = new File(loadDataPath);
		if (!dir.exists()) {
			dir.mkdirs();
		}
		String fileName = DateTool.getNowDate() + ".xls";
		String fileInput = loadDataPath + "/" + fileName;

		File file = new File(fileInput);
		copy(in, file);
		return file;
	}

	public static boolean copy(InputStream in, String filePath) {
		FileOutputStream fs;
		try {
			fs = new FileOutputStream(filePath);
			byte[] buffer = new byte[1024 * 1024];
			int bytesum = 0;
			int byteread = 0;
			while ((byteread = in.read(buffer)) != -1) {
				bytesum += byteread;
				fs.write(buffer, 0, byteread);
				fs.flush();
			}
			fs.close();
			in.close();
			return true;
		} catch (IOException e) {
			return false;
		}
	}
	
//	public static void copy(InputStream in, File dst) {
//		try {
//			OutputStream out = null;
//			try {
//				out = new BufferedOutputStream(new FileOutputStream(dst));
//				byte[] buffer = new byte[in.available()];
//				while (in.read(buffer) > 0) {
//					out.write(buffer);
//				}
//			} finally {
//				if (null != in) {
//					in.close();
//				}
//				if (null != out) {
//					out.close();
//				}
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//	}

	public static void copy(ServletInputStream in, File dst) {
		try {
			byte[] buf = new byte[4048];
			int len = in.readLine(buf, 0, buf.length);
			String f = new String(buf, 0, len - 1);
			while ((len = in.readLine(buf, 0, buf.length)) != -1) {
				DataOutputStream fileStream = new DataOutputStream(
						new BufferedOutputStream(new FileOutputStream(dst)));
				len = in.readLine(buf, 0, buf.length);
				len = in.readLine(buf, 0, buf.length);
				while ((len = in.readLine(buf, 0, buf.length)) != -1) {
					String tempf = new String(buf, 0, len - 1);
					if (tempf.equals(f) || tempf.equals(f + "--")) {
						break;
					} else {
						fileStream.write(buf, 0, len); // 写入
					}
				}
				fileStream.close();
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}
