/*
 * @author wych
 */
Ext.define('SV.view.upload', {
    extend: 'Ext.form.Panel',
    xtype: 'uploadpanel',
    config: {
        ui: 'light',
        title: "数据上传",
        items: [{
		html: "<div class='title_info'>数据上传服务器过的程中，请保持网络畅通，此过程根据数据量的多少会需要一些时间，请耐心等待。<\/div>",
                xtype: "label"
                    },{
            id: "tfieldSet1",
            title: "共有30条新数据需要上传数据库",
            instructions: "请保持网络畅通，耐心等待",
            xtype: "fieldset",
            items: [
                {
                    itemId: "postdataBtn",
                    ui: "action-round",
                    text: "传输",
		    height: 60,
                    xtype: "button"
                }
            ]
        }

	]
    }
});