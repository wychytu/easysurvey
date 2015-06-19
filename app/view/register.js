/*
 * @author wych
 */
Ext.define('SV.view.register', {
    extend: 'Ext.form.Panel',
    xtype: 'registerpanel',
    config: {
        ui: 'light',
	id:'regisform',
        title: "终端配置",
        items:  [
            {
                id: "tfieldSet1",
                title: "请填写终端编码及注册码",
                instructions: "注册码及终端编码有本软件提供商提供，用于管理和区分各终端的数据。",
                xtype: "fieldset",
                items: [					
                    {
                        id: "cNum",
						name: "cNum",
                        label: "终端编码",
			value:localStorage.getItem("clientNum"),
                        xtype: "textfield"
                    }, {
                        id: "rCode",
						name: "rCode",
                        label: "注册码",
			value:localStorage.getItem("clientNum"),
                        xtype: "passwordfield"
                    },{
                        id: "desc",
						name: "desc",
                        label: "信息描述",
			value:localStorage.getItem("desc"),
                        xtype: "textfield"
                    }
                ]
            }, {
                itemId: "regBtn",
				ui: "action-round",
                text: "完成",
                height: 60,
		disabled:localStorage.getItem("clientNum")?true:false,
                xtype: "button"
            }
        ]
    }
});