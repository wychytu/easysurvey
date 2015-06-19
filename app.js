/*
 * @author wych
 */
Ext.Loader.setConfig({
    enabled: true
});
 
Ext.application({
    name: 'SV',
    views: ['Main','register'],
    controllers: ['Main','survey','upload','register'],
    models: [],
    stores: [],
    launch: function () {
		init();
        Ext.Viewport.add({
            xtype: 'mainview'
        });
    }
});

var init = function(){
	if(!localStorage.getItem("clientNum")){
		localStorage.setItem("version",'1');
		Ext.Msg.alert("温馨提示","请首先在系统设置完成终端注册");
	}if(!SV.webSql){
		SV.webSql = new webStorage.webSql();
    	//SV.webSql.dropTable();
	SV.webSql.createTable();
	}
};