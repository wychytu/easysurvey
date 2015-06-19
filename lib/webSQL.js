var webStorage = {};
webStorage.webSql = function () {
 
    var _this = this;
 
    //数据库
    var _dataBase;
 
    //打开数据库连接或者创建数据库
    this.openDatabase = function () {
 
        if ( !! _dataBase) {
            return _dataBase;
        }
        _dataBase = openDatabase("survey", "1.0", "问卷调查库", 10 * 1024 * 1024, function () {});
 
        if (!_dataBase) {
            console.log("数据库创建失败！");
        } else {
            console.log("数据库创建成功！");
        }
        return _dataBase;
    };
 
 
    //创建数据表
    this.createTable = function () {
 
        var dataBase = _this.openDatabase();
        // 创建表
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "create table if not exists survey_json (id TEXT PRIMARY KEY NOT NULL, surveyData TEXT NOT NULL,flag INTEGER  NOT NULL,tbrq TEXT NOT NULL)", [], function () {
                console.log('创建survey_json 表成功');
            }, function (tx, error) {
                console.log('创建survey_json 表失败:' + error.message);
            });
        });
    };
 
    //添加数据
    this.insert = function (json) {
        console.log(json);
        var d = new Date();
        var dataBase = _this.openDatabase();
        var id = d.getTime().toString(32);
        //var number = localStorage.getItem("clientNum");
        var tbrq = Ext.Date.format(d, 'y-m-d h:m:s');
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "insert into survey_json (id, surveyData,flag,tbrq) values(?, ? ,?, ?)", [id, json, 0, tbrq], function () {
                Ext.Msg.alert("完成","问卷填写完成，非常感谢你的协助");
		//js运行时编译，因此在交互中可以使用任意id
		surveyform.reset( );
            }, function (tx, error) {
                alert('添加数据失败: ' + error.message);
            });
        });
    };
 
    // 查询
    this.query = function (flag) {
        var dataBase = _this.openDatabase();
        var resultset = [];
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "select * from survey_json where flag = 0 order by id", [], function (tx, result) {
                //result：SQLResultSet对象。 
                //其定义为：interface SQLResultSet {
                //  readonly attribute long insertId;
                //  readonly attribute long rowsAffected;
                //  readonly attribute SQLResultSetRowList rows;
                //};
                //rows 有两个属性：length、item 。
                //故，获取查询结果的某一行某一列的值 ：result.rows.item[i].fieldname 
				for (var i = 0; i < result.rows.length; i++) {
                    resultset.push(result.rows.item(i));
                }                
					
                if (flag === 1) {//数据传输 
                    resultset = svhelp.arrayslice(resultset,3);
					
					var url = 'http://192.168.0.2:8080/Datahandler/insert';					
					0
					var succ = function(response){
						if (response.success === true) {//Ext.Msg.alert('成功', response.msg);
						console.log(1);
						}
						else {Ext.Msg.alert('失败', response.msg);}
					};
					
					var params = {};
					params.clientNum  = localStorage.getItem("clientNum");
                    params.version = localStorage.getItem("version");
					for(var j in resultset){
						params.data = Ext.encode(resultset[j]);	
						console.log(params);
                    	svhelp.postData(url,params,succ);
					}

				}else if(flag === 2){
					console.log(resultset);
				}
 
            }, function (tx, error) {
                alert('查询失败: ' + erroturr.message);
            });
        });
        //console.log(resultset);
    };
 
    //更新数据
    this.update = function (old_id, new_id) {
 
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "update survey_json set id = 1223 where id= ?", [ old_id], function (tx, result) {
                //_this.query();
console.log(123);
            }, function (tx, error) {
                alert('更新失败: ' + error.message);
            });
        });
    };
 
    //删除数据
    this.del = function (id) {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql(
                "delete from  survey_json where id= ?", [id], function (tx, result) {
 
            }, function (tx, error) {
                alert('删除失败: ' + error.message);
            });
        });
    };
 
    //删除数据表
    this.dropTable = function () {
        var dataBase = _this.openDatabase();
        dataBase.transaction(function (tx) {
            tx.executeSql('drop  table  survey_json ');
        });
    };
};