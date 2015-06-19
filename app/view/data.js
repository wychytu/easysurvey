/*
 * @author wych
 */
Ext.define('SV.view.data', {
    extend: 'Ext.form.Panel',
    xtype: 'datapanel',
    config: {
        ui: 'light',
	title:"数据维护",
        items: [{
                id: "shuoming",
                html: "<div style='text-shadow: #fff 0 1px 1px; text-align: center;color: #333; color: gray; margin: 1em 0.7em 0.3em; font-size: .8em;'>维护数据<\/div>",
                xtype: "label"
                    }]
    }
});