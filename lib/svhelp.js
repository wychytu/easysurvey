var svhelp = {};
//验证问卷
svhelp.check = function (data) {
	if (Ext.isEmpty(data.xm)) {
        Ext.Msg.alert("警告","请填写姓名，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.sfzh)) {
        Ext.Msg.alert("警告","请填写身份证号，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.tjh)) {
        Ext.Msg.alert("警告","请填写体检号，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.units)) {
        Ext.Msg.alert("警告","请填写单位，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.xb)) {
        Ext.Msg.alert("警告","请填写性别，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.zy)) {
        Ext.Msg.alert("警告","请填写职业，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.hy)) {
        Ext.Msg.alert("警告","请填写婚姻史，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.jy)) {
        Ext.Msg.alert("警告","请填写教育程度，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.fy)) {
        Ext.Msg.alert("警告","请填写服药情况，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.sg)) {
        Ext.Msg.alert("警告","请填写水果食用情况，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.ys)) {
        Ext.Msg.alert("警告","请填写饮食习惯，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.kw)) {
        Ext.Msg.alert("警告","请填写倾向口味，不能为空");
        return false;
    }
    if (Ext.isEmpty(data.tydl)) {
        Ext.Msg.alert("警告","请填写体力劳动或体育锻炼情况，不能为空");
        return false;
    }
	return true;
};
//格式化json数据
svhelp.format = function (form) {
    var substr1 = 'hbs_',
        substr2 = 'fq_',
        substr3 = 'mq_',
        substr4 = 'xm_';
    var hbs = [],
        jzs_fq = [],
        jzs_mq = [],
        jzs_xm = [];
    var object = {};
    for (var i in form) {
        if (i.search(substr1) != -1) {
            if (form[i]) {
                object = {};
                object[i] = form[i];
                hbs.push(object);
            }
            delete form[i];
        } else if (i.search(substr2) != -1) {
            if (form[i]) {
                object = {};
                object[i] = form[i];
                jzs_fq.push(object);
            }
            delete form[i];
        } else if (i.search(substr3) != -1) {
            if (form[i]) {
                object = {};
                object[i] = form[i];
                jzs_mq.push(object);
            }
            delete form[i];
        } else if (i.search(substr4) != -1) {
            if (form[i]) {
                object = {};
                object[i] = form[i];
                jzs_xm.push(object);
            }
            delete form[i];
        }
    }
    form.has_hbs = hbs;
    form.fq = jzs_fq;
    form.mq = jzs_mq;
    form.xdjm = jzs_xm;
    return form;
};
 
//jsonp
svhelp.postData = function (u,p,s,f) {
    Ext.data.JsonP.request({
        url: u,
        params: p,
        callbackKey: 'callback',
        success: function (response) {
		s(response);
        },
        failure: function () {
        	Ext.Msg.alert('错误','无法连通服务器，请检查网络情况');
        }
    });
};



//一位数组转化为二维数组
svhelp.arrayslice = function (arr,num){
	var newarr = [],j;
	for(var i=0;i<arr.length;){
		j=i;
		newarr.push(arr.slice(j,j+num));
		i=i+num;
	}
	return newarr;
};