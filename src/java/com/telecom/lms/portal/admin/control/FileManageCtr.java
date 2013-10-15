package com.telecom.lms.portal.admin.control;

import java.io.IOException;
import java.io.InputStream;
import javax.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.telecom.lms.portal.admin.util.FileTool;

@Controller
public class FileManageCtr {
	
	@RequestMapping("common/upload.html")
	public String toUpload(HttpServletRequest request, ModelMap model){
		
		return "filemanage/upload";
	}
	
	@RequestMapping(value="common/doupload.html",method=RequestMethod.POST)
	public String upload(HttpServletRequest request,ModelMap model,@RequestParam("file") MultipartFile file) throws IOException{
		if(!file.isEmpty()){
			String filePath = request.getSession().getServletContext().getRealPath("/")+"upload/temp/"  + file.getOriginalFilename();
			model.put("path", filePath);
			InputStream in = file.getInputStream();
			FileTool.copy(in, filePath);
		}
		return "filemanage/result";
	}
}
