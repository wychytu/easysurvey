/*
 * @author wych 
 */
Ext.define('SV.controller.survey', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            'surveypanel button[itemId=btn_surveyok]' : {
                tap: 'storeSV'
            }
        },
        refs: {surveypanel: 'surveypanel'}
    },
    storeSV: function() {
		var form = this.getSurveypanel().getValues();
		//if(svhelp.check(form)){
			form = svhelp.format(form );
			SV.webSql.insert(Ext.encode(form));
		//}
    }
});