function setcolinputboxvalueapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['setcolinputboxvalueapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function setcolinputboxvalueapipage1_guid_report2_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['setcolinputboxvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var tableObj=document.getElementById('setcolinputboxvalueapipage1_guid_report2_data');if(tableObj==null){return true;}  var tdChilds=tableObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0){return true;}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var value_name;var boxValue;var boxObj;  for(var j=0;j<tdChilds.length;j=j+1){      if(tdChilds[j]==null) continue;      boxObj=tdChilds[j];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail2',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } }  return true;} function setcolinputboxvalueapipage1_guid_report3_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['setcolinputboxvalueapipage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_setcolinputboxvalueapipage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function setcolinputboxvalueapipage1_guid_report3_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['setcolinputboxvalueapipage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_setcolinputboxvalueapipage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function formdeleterowapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['formdeleterowapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function addrowapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['addrowapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function formaddrowapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['formaddrowapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function deleterowapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['deleterowapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function getformcolvalueapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['getformcolvalueapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function validate_getformcolvalueapipage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_getformcolvalueapipage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function getformcolvalueapipage1_guid_report2_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['getformcolvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_getformcolvalueapipage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function getformcolvalueapipage1_guid_report2_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['getformcolvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_getformcolvalueapipage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function setformcolinputboxvalueapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['setformcolinputboxvalueapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'listform',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_no(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工号不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_age(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'不是合法数字');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_salary(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('工资不能为空');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function validate_setformcolinputboxvalueapipage1_guid_report2_birthday(boxObj,params){var boxValue=getInputBoxValue(boxObj.getAttribute('id'),boxObj.getAttribute('typename'));  if(!isNotEmpty(boxValue,boxObj)){boxObj.errorPromptObj.show('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){boxObj.errorPromptObj.show(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} boxObj.errorPromptObj.hide();return true;}function setformcolinputboxvalueapipage1_guid_report2_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['setformcolinputboxvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_setformcolinputboxvalueapipage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function setformcolinputboxvalueapipage1_guid_report2_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['setformcolinputboxvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_setformcolinputboxvalueapipage1_guid_report2');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'form',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function refreshreportapipage1_guid_report2_onload(){refreshreportapipage1Onload('refreshreportapipage1','report2');}function refreshreportapipage1_guid_report1_onload(){refreshreportapipage1Onload('refreshreportapipage1','report1');}function refreshreportapipage1_onload(){refreshreportapipage1Onload('refreshreportapipage1','refreshreportapipage1');}function getcolvalueapipage1_guid_report1_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null) return true;  var updatedataForSaving=WX_UPDATE_ALLDATA['getcolvalueapipage1_guid_report1'];  if(updatedataForSaving==null||updatedataForSaving.length==0) return true;  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var trObj;  for(var i=0;i<updatedataForSaving.length;i=i+1){      trObj=updatedataForSaving[i];if(trObj==null||!hasEditDataForSavingRow(trObj)) continue;      var tdChilds=trObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0) continue;      var value_name;var boxValue;      var boxObj;      for(var j=0;j<tdChilds.length;j=j+1){          if(tdChilds[j]==null) continue;          boxObj=tdChilds[j];          value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;          var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editablelist2',boxObj);          boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }      }  }  return true;}function getcolvalueapipage1_guid_report2_validateSave(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['getcolvalueapipage1_guid_report2'];  if(updatedataForSaving==null){return true}  var tableObj=document.getElementById('getcolvalueapipage1_guid_report2_data');if(tableObj==null){return true;}  var tdChilds=tableObj.getElementsByTagName('TD');if(tdChilds==null||tdChilds.length==0){return true;}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var value_name;var boxValue;var boxObj;  for(var j=0;j<tdChilds.length;j=j+1){      if(tdChilds[j]==null) continue;      boxObj=tdChilds[j];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestTdObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail2',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestTdObj);if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} } }  return true;} function getcolvalueapipage1_guid_report3_validateSaveUpdate(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['getcolvalueapipage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_getcolvalueapipage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}function getcolvalueapipage1_guid_report3_validateSaveInsert(metadataObj){  if(WX_UPDATE_ALLDATA==null){ return true;}var updatedataForSaving=WX_UPDATE_ALLDATA['getcolvalueapipage1_guid_report3'];  if(updatedataForSaving==null){return true}  var paramsObj=getObjectByJsonString(metadataObj.metaDataSpanObj.getAttribute('validateSaveMethodDynParams'));  var fontChilds=document.getElementsByName('font_getcolvalueapipage1_guid_report3');  if(fontChilds==null||fontChilds.length==0) return true;  var boxObj;var boxValue;var value_name;  for(var i=0;i<fontChilds.length;i=i+1){      if(fontChilds[i]==null) continue;      boxObj=fontChilds[i];      value_name=boxObj.getAttribute('value_name');if(value_name==null||value_name=='') continue;      var updateDestFontObj=getUpdateColDestObj(boxObj,metadataObj.reportguid,'editabledetail',boxObj);      boxValue=getColConditionValueByParentElementObj(updateDestFontObj);      if(boxValue==null) boxValue=''; if(value_name=='no') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工号不能为空');return false;} } if(value_name=='age') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('年龄不能为空');return false;}  if(!isNumeric(boxValue,boxObj)){wx_warn(''+boxValue+'不是合法数字');return false;} } if(value_name=='salary') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('工资不能为空');return false;} } if(value_name=='birthday') {  if(!isNotEmpty(boxValue,boxObj)){wx_warn('出生日期不能为空');return false;}  if(!isDate(boxValue,boxObj)){wx_warn(''+boxValue+'格式不对，必须为yyyy-MM-dd格式');return false;} }  }return true;}