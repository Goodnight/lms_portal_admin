function i18npage1_guid_report1_validateSearch(metadataObj){var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSearchMethodDynParams'));var fontChilds=document.getElementsByName('font_i18npage1_guid_report1_conditions');if(fontChilds==null||fontChilds.length==0) return true;var boxObj;var boxValue;var value_name;for(var i=0,len=fontChilds.length;i<len;i=i+1){if(fontChilds[i]==null) continue;boxObj=fontChilds[i];value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;boxValue=getColConditionValueByParentElementObj(boxObj);if(boxValue==null) boxValue=''; if(value_name=='txtno'){  if(boxValue==paramsObj.param_txtno0) boxValue='';  if(!isNotEmpty(boxValue,boxObj)){paramsObj.report1_param1=paramsObj.report1_param1.replace(/%i18npage1_guid_report1_condition_txtno_value%/g,boxValue);wx_warn(paramsObj.report1_param1);return false;}  if(!isNumeric(boxValue,boxObj)){paramsObj.report1_param2=paramsObj.report1_param2.replace(/%i18npage1_guid_report1_condition_txtno_value%/g,boxValue);wx_warn(paramsObj.report1_param2);return false;}} if(value_name=='txtage'){  if(boxValue==paramsObj.param_txtage3) boxValue='';  if(!isNumeric(boxValue,boxObj)){paramsObj.report1_param4=paramsObj.report1_param4.replace(/%i18npage1_guid_report1_condition_txtage_value%/g,boxValue);wx_warn(paramsObj.report1_param4);return false;}  if(!isValidAge(boxValue,boxObj)){paramsObj.report1_param5=paramsObj.report1_param5.replace(/%i18npage1_guid_report1_condition_txtage_value%/g,boxValue);wx_warn(paramsObj.report1_param5);return false;}}} return true;}