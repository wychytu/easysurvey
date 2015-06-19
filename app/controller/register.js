/*
 * @author wych 
 */
Ext.define('SV.controller.register', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'registerpanel button[itemId=regBtn]': {
                tap: 'regis'
            }
        },
        refs: {
            registerpanel: 'registerpanel'
        }
    },
    regis: function () {
        var url = 'http://192.168.191.2:8080/Datahandler/register';
        var params = this.getRegisterpanel().getValues();
        if (Ext.isEmpty(params.cNum) || Ext.isEmpty(params.rCode)) {
            Ext.Msg.alert('警告', '有未填写内容，请检查');
        }
        var succ = function (response) {
            if (response.success == true) {
                Ext.Msg.alert('注册成功', response.msg);
                //console.log(cNum.getValue());
                localStorage.setItem("clientNum", Ext.getCmp('cNum').getValue());
		localStorage.setItem("desc", Ext.getCmp('desc').getValue());
                //退出设置界面，或重新刷新
                Ext.getCmp('regisform').parent.pop(regisform);
            } else {
                Ext.Msg.alert('注册失败', response.msg);
            }
        };
        svhelp.postData(url, params, succ);
    }
});