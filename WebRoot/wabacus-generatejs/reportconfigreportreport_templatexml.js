function editabledynamictemplatepage1_guid_report3_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editabledynamictemplatepage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_editabledynamictemplatepage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function editabledynamictemplatepage1_guid_report3_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editabledynamictemplatepage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_editabledynamictemplatepage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function editabledynamictemplatepage1_guid_report2_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editabledynamictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var tableObj=document.getElementById('editabledynamictemplatepage1_guid_report2_data');if(tableObj==null){return true;}  var tdChilds=tableObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0){return true;}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var value_name;var boxValue;var boxObj;  for(var j=0;j<tdChilds.length;j=j+1){      if(tdChilds[j]==null) continue;      boxObj=tdChilds[j];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail2',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } }  return true;} function editabledynamictemplatepage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['editabledynamictemplatepage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function validate_formstatictemplatepage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function formstatictemplatepage1_guid_report2_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['formstatictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_formstatictemplatepage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function formstatictemplatepage1_guid_report2_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['formstatictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_formstatictemplatepage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function validate_formstatictemplatepage1_guid_report1_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report1_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report1_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formstatictemplatepage1_guid_report1_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function formstatictemplatepage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['formstatictemplatepage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} }      }  }  return true;}function validate_formdynamictemplatepage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function formdynamictemplatepage1_guid_report2_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['formdynamictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_formdynamictemplatepage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function formdynamictemplatepage1_guid_report2_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['formdynamictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_formdynamictemplatepage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function validate_formdynamictemplatepage1_guid_report1_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report1_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report1_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_formdynamictemplatepage1_guid_report1_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function formdynamictemplatepage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['formdynamictemplatepage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} }      }  }  return true;}function editablestatictemplatepage1_guid_report3_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editablestatictemplatepage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_editablestatictemplatepage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function editablestatictemplatepage1_guid_report3_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editablestatictemplatepage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_editablestatictemplatepage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function editablestatictemplatepage1_guid_report2_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['editablestatictemplatepage1_guid_report2'];  if(updatedataForSaving==null){return true}  var tableObj=document.getElementById('editablestatictemplatepage1_guid_report2_data');if(tableObj==null){return true;}  var tdChilds=tableObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0){return true;}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var value_name;var boxValue;var boxObj;  for(var j=0;j<tdChilds.length;j=j+1){      if(tdChilds[j]==null) continue;      boxObj=tdChilds[j];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail2',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } }  return true;} function editablestatictemplatepage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['editablestatictemplatepage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='deptno') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('部门编号列不允许为空');return false;} } if(value_name=='builtdate') {  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}