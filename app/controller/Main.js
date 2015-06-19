/*
 * @author wych 
 */
Ext.define('SV.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
	    'mainview button[itemId=surveyBtn]' : {
                tap: 'toSurvey'
            },'mainview button[itemId=uploadBtn]' : {
                tap: 'toUpload'
            },'mainview button[itemId=dataBtn]' : {
                tap: 'toData'
            },'mainview button[itemId=settingBtn]' : {
                tap: 'toSetting'
            }
        },
        refs: {
        	mainview: 'mainview',
        }
    },
    toSurvey: function() {
	this.getMainview().push({xtype:'surveypanel'});
    },
    toUpload: function() {
	this.getMainview().push({xtype:'uploadpanel'});
	//svhelp.postData(resultset);
    },toData: function() {
	this.getMainview().push({xtype:'datapanel'});
    },toSetting: function() {
	this.getMainview().push({xtype:'registerpanel'});
    }
});