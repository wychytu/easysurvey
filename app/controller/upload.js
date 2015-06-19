/*
 * @author wych 
 */
Ext.define('SV.controller.upload', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'uploadpanel button[itemId=postdataBtn]' : {
                tap: 'postData'
            }
        },
        refs: {uploadpanel: 'uploadpanel'}
    },
    postData: function() {
	//传输数据到服务器端
		SV.webSql.query(1);
    }
});