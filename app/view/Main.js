/*
 * @author wych
 */
Ext.define('SV.view.Main', {
    extend: 'Ext.NavigationView',
    xtype: 'mainview',
    requires: ['SV.view.survey', 'SV.view.data', 'SV.view.upload','SV.view.register'],
    config: {
        fullscreen: true,  
        items: [{title: '信息采集终端',
 		 items: [
                    {	id:'surveyBtn',
			disabled:localStorage.getItem("clientNum")?false:true,
                        itemId: "surveyBtn",
                        text: "问卷采集",
                        height: 60,
                        style: "margin: 30px;",
			xtype: "button"
                       }, {
                        itemId: "uploadBtn",
			disabled:localStorage.getItem("clientNum")?false:true,
                        text: "上传数据",
                        height: 60,
                        style: "margin: 30px;",
                        xtype: "button"
                      }, {
                        itemId: "dataBtn",
			disabled:localStorage.getItem("clientNum")?false:true,
                        text: "管理数据",
                        height: 60,
                        style: "margin: 30px;",
                        xtype: "button"
 		     }, {
                        itemId: "settingBtn",
                        text: "系统设置",
                        height: 60,
                        style: "margin: 30px;",
                        xtype: "button"
 			}
                ]
  }]
    }
});