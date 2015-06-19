/*
 * @author wych
 */
Ext.define('SV.view.survey', {
    extend: 'Ext.form.Panel',
    xtype: 'surveypanel',
    config: {
        ui: 'light',
	id:'surveyform',
        title: "问卷调查",
        items: [{
                html: "<div class='title_info'>非常感谢您为我们填写这张问卷，我们向您保证严格保护您的个人隐私信息<\/div>",
                xtype: "label"
                    }, {
                title: "个人信息",
                xtype: "fieldset",
                items: [
                    {
                        name: "xm",
                        label: "姓名",
                        xtype: "textfield"
                            }, {
                        name: "xb",
                        autoSelect: false,
                        label: "性别",
                        xtype: "selectfield",
                        options: [
 
                            {
                                text: '',
                                value: ''
                                    },
                            {
                                text: '男',
                                value: '1'
                                    },
                            {
                                text: '女',
                                value: '2'
                                    }
                        ]
                            }, {
                        name: "sfzh",
                        label: "身份证",
                        xtype: "textfield"
                            }, {
                        name: "tjh",
                        label: "体检号",
                        xtype: "textfield"
                            }, {
                        name: "units",
                        label: "工作单位",
                        xtype: "textfield"
                            } ,{
                        name: "zy",
                        autoSelect: false,
                        label: "职业",
                        xtype: "selectfield",
                        options: [
                            {
                                text: '',
                                value: ''
                                    },
                            {
                                text: '务农',
                                value: '1'
                                    },
                            {
                                text: '务工',
                                value: '2'
                                    },
                            {
                                text: '经商',
                                value: '3'
                                    },
                            {
                                text: '在校学生',
                                value: '4'
                                    },
                            {
                                text: '村干部、村医生、教师',
                                value: '5'
                                    },
                            {
                                text: '其它',
                                value: '6'
                            }]
                        }, {
                        name: "hy",
                        autoSelect: false,
                        label: "婚姻",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '未婚',
                                value: '1'
                                    },
                            {
                                text: '在婚（初婚）',
                                value: '2'
                                    },
                            {
                                text: '在婚（离婚后）',
                                value: '3'
                                    },
                            {
                                text: '在婚（丧偶后）',
                                value: '4'
                                    },
                            {
                                text: '离婚',
                                value: '5'
                                    },
                            {
                                text: '丧偶',
                                value: '6'
                                    },
                            {
                                text: '其他',
                                value: '7'
                                    }
                        ]
                            }, {
                        name: "jy",
                        autoSelect: false,
                        label: "教育程度",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '没上过学',
                                value: '1'
                                    },
                            {
                                text: '小学',
                                value: '2'
                                    },
                            {
                                text: '初中',
                                value: '3'
                                    },
                            {
                                text: '大专',
                                value: '4'
                                    },
                            {
                                text: '高中/技校/中专/中技',
                                value: '5'
                                    },
                            {
                                text: '大学及以上',
                                value: '6'
                                    }
                        ]
                            }
                ]
                    }, {
                title: "体检史",
                xtype: "fieldset",
                items: [{
                        name: "tjcs",
                        stepValue: 1,
                        minValue: 0,
                        label: "体检次数",
                        maxValue: 20,
                        xtype: "spinnerfield",
                        listeners: {
                            spindown: function (comp, value, options) {
                                Ext.getCmp("tjs_all").removeAt(value);
 
                                if (value < 1) {
                                    Ext.getCmp("tjs_all").setHidden(true);
                                }
                            },
                            spinup: function (comp, value, options) {
                                Ext.getCmp("tjs_all").setHidden(false);
 
                                var myPanel = Ext.create('Ext.Panel', {
                                    layout: {
                                        type: 'hbox',
                                        align: 'middle'
                                    },
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            flex: 1,
                                            name: 'tjcs_yy' + value,
                                            label: '检查医院'
                },
                                        {
                                            xtype: 'datepickerfield',
                                            flex: 1,
                                            name: 'tjcs_jcsj' + value,
                                            label: '检查时间'
                }
                                    ]
                                });
 
                                Ext.getCmp("tjs_all").add([myPanel]);
 
                            }
                        }
                            }, {
                        id: "tjs_all",
                        hidden: true,
                        xtype: "fieldset"
                            }
                ]
                    }, {
                title: "个人患病史",
                xtype: "fieldset",
                items: [
                    {
                        name: "has_hbs",
                        label: "有患病史",
                        xtype: "checkboxfield",
                        listeners: {
                            check: function (comp, event, options) {
                                //jblist.setHidden(false);
                                Ext.getCmp("jblist").setHidden(false);
                            },
                            uncheck: function (comp, event, options) {
                                //jblist.setHidden(true);
                                Ext.getCmp("jblist").setHidden(true);
 
                            }
                        }
                            }, {
                        id: "jblist",
                        hidden: true,
                        layout: "vbox",
                        xtype: "fieldset",
                        items: [
                            {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        text: '',
                                        value: ''
                                    },
                                    {
                                        name: "hbs_gzxz",
                                        labelWrap: true,
                                        label: "高脂血症",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_gxy",
                                        labelWrap: true,
                                        label: "高血压",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_gxb",
                                        labelWrap: true,
                                        label: "冠心病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_ncz",
                                        labelWrap: true,
                                        label: "脑卒中",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "hbs_dzxnqx",
                                        labelWrap: true,
                                        label: "短暂性脑缺血发作",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_fc",
                                        labelWrap: true,
                                        label: "房颤",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_zl",
                                        labelWrap: true,
                                        label: "肿瘤",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_tnb",
                                        labelWrap: true,
                                        label: "糖尿病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
				layout: "hbox",
                                xtype: "container",
                                items: [{
                                        text: '',
                                        value: ''
                                    },
                                    {
                                        name: "hbs_dxzhz",
                                        labelWrap: true,
                                        label: "代谢综合征",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_gjy",
                                        labelWrap: true,
                                        label: "关节炎",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_yuz",
                                        labelWrap: true,
                                        label: "抑郁症",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_tlss",
                                        labelWrap: true,
                                        label: "突然听力丧失",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
                                layout: "hbox",
                                xtype: "container",
                                items: [{
                                        text: '',
                                        value: ''
                                    },{
                                        name: "hbs_yzy",
                                        labelWrap: true,
                                        label: "牙周病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "hbs_yzjb",
                                        labelWrap: true,
                                        label: "其他严重疾病",
                                        flex: 3,
                                        xtype: "textfield"
                                            }
                                ]
                                    }
                        ]
                            }
                ]
                    }, {
                name: "jzs",
                title: "家族患病史",
                xtype: "fieldset",
                items: [
                    {
                        id: "fq",
						name:"fq",
                        label: "父亲患病",
                        xtype: "checkboxfield",
                        listeners: {
                            check: function (comp, event, options) {
                                Ext.getCmp("fqhbs").setHidden(false);
                            },
                            uncheck: function (comp, event, options) {
                                Ext.getCmp("fqhbs").setHidden(true);
                            }
                        }
                            }, {
						id: "fqhbs",
                        name: "fqhbs",
                        hidden: true,
                        xtype: "fieldset",
                        items: [
                            {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "fq_gxy",
                                        label: "高血压",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "fq_gxb",
                                        label: "冠心病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "fq_tnb",
                                        label: "糖尿病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
								layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "fq_ncz",
                                        label: "脑卒中",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "fq_jsjb",
                                        label: "精神疾患",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "fq_jzs_qt",
                                        label: "其他",
                                        flex: 1,
                                        xtype: "textfield"
                                            }
                                ]
                                    }
                        ]
                            }, {
                        id: "mq",
						name:"mq",
                        label: "母亲患病",
                        xtype: "checkboxfield",
                        listeners: {
                            check: function (comp, event, options) {
                                Ext.getCmp("mqhbs").setHidden(false);
                            },
                            uncheck: function (comp, event, options) {
                                Ext.getCmp("mqhbs").setHidden(true);
                            }
                        }
                            }, {
						id: "mqhbs",
                        name: "mqhbs",
                        hidden: true,
                        xtype: "fieldset",
                        items: [
                            {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "mq_gxy",
                                        label: "高血压",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "mq_gxb",
                                        label: "冠心病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "mq_tnb",
                                        label: "糖尿病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "mq_ncz",
                                        label: "脑卒中",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "mq_jsjb",
                                        label: "精神疾患",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "mq_jzs_qt",
                                        label: "其他",
                                        flex: 1,
                                        xtype: "textfield"
                                            }
                                ]
                                    }
                        ]
                            }, {
                        id: "xdjm",
						name:"xdjm",
                        label: "兄弟姐妹患病",
                        xtype: "checkboxfield",
                        listeners: {
                            check: function (comp, event, options) {
                                Ext.getCmp("xmhbs").setHidden(false);
                            },
                            uncheck: function (comp, event, options) {
                                Ext.getCmp("xmhbs").setHidden(true);
                            }
                        }
                            }, {
                        id: "xmhbs",
						name: "xmhbs",
                        hidden: true,
                        xtype: "fieldset",
                        items: [
                            {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "xm_gxy",
                                        label: "高血压",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "xm_gxb",
                                        label: "冠心病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "xm_tnb",
                                        label: "糖尿病",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }
                                ]
                                    }, {
                                layout: "hbox",
                                xtype: "container",
                                items: [
                                    {
                                        name: "xm_ncz",
                                        label: "脑卒中",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "xm_jsjb",
                                        label: "精神疾患",
                                        flex: 1,
                                        xtype: "checkboxfield"
                                            }, {
                                        name: "xm_jzs_qt",
                                        label: "其他",
                                        flex: 1,
                                        xtype: "textfield"
                                            }
                                ]
                                    }
                        ]
                            }
                ]
                    }, {
                title: "个人习惯",
                xtype: "fieldset",
                items: [
                    {
                        name: "xy",
                        label: "吸烟",
						value:"true",
						required:true,
						checked   : true,
                        xtype: "checkboxfield"
                            }, {
                        name: "hj",
                        label: "喝酒",
                        xtype: "checkboxfield"
                            }, {
                        name: "hc",
                        label: "喝茶",
                        xtype: "checkboxfield"
                            }, {
                        name: "fy",
                        autoSelect: false,
                        label: "服药情况",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '尊医长期服用的药物',
                                value: '1'
                                    },
                            {
                                text: '不定期按需服用的药物',
                                value: '2'
                                    }
                        ]
                            },{
                        name: "sg",
                        autoSelect: false,
                        label: "水果",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '基本不吃',
                                value: '1'
                                    },
                            {
                                text: '每周小于3次',
                                value: '2'
                                    },
                            {
                                text: '每周3-7次',
                                value: '3'
                                    },
                            {
                                text: '每周7次以上',
                                value: '4'
                                    }
                        ]
                            }, {
                        name: "ys",
                        autoSelect: false,
                        label: "饮食习惯",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '以荤为主',
                                value: '1'
                                    },
                            {
                                text: '以素为主',
                                value: '2'
                                    },
                            {
                                text: '荤素搭配',
                                value: '3'
                                    }
                        ]
                            }, {
                        name: "kw",
                        autoSelect: false,
                        label: "倾向口味",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '偏淡',
                                value: '1'
                                    },
                            {
                                text: '偏咸',
                                value: '2'
                                    },
                            {
                                text: '中等',
                                value: '3'
                                    }
                        ]
                            }, {
                        name: "tydl",
                        autoSelect: false,
                        label: "体力劳动或体育锻炼",
                        xtype: "selectfield",
                        options: [{
                                text: '',
                                value: ''
                                    },
                            {
                                text: '重体力劳动',
                                value: '1'
                                    },
                            {
                                text: '中度体力劳动',
                                value: '2'
                                    },
                            {
                                text: '轻度体力劳动',
                                value: '3'
                                    },
                            {
                                text: '极轻度体力劳动或脑力劳动',
                                value: '4'
                                    }
                        ]
                            }
 
                ]
        }, {
                xtype: "fieldset",
                items: [
                    {
                        itemId: "btn_surveyok",
                        text: "完成",
                        height: 50,
                        xtype: "button"
                            }
                ]
                    }]
    }
});