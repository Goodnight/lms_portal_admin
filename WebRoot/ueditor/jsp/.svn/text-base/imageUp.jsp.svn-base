    <%@ page language="java" contentType="text/html; charset=utf-8"
        pageEncoding="utf-8"%>
    <%@ page import="com.telecom.lms.portal.admin.util.Uploader" %>
    <%
    request.setCharacterEncoding("utf-8");
    response.setCharacterEncoding("utf-8");
    Uploader up = new Uploader(request);
    //up.setSavePath("upload");
    up.setSavePath("" + session.getAttribute("ueditorImageUploadPath"));
    String[] fileType = {".gif" , ".png" , ".jpg" , ".jpeg" , ".bmp"};
    up.setAllowFiles(fileType);
    up.setMaxSize(10000); //单位KB
    up.upload();
   	String realPath1 = "" + session.getAttribute("ueditorImageUploadPathPrefix");
   	String url =  realPath1 + up.getUrl();
   	System.out.println("url:" + up.getUrl());
    response.getWriter().print("{'original':'"+up.getOriginalName()+"','url':'"+ url +"','title':'"+up.getTitle()+"','state':'"+ "SUCCESS" +"'}");
    %>
