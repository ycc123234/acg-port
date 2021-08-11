module.exports=({
     //第一个数字--系统：1 数据库：2
     //第二个数字代表板块
     //第三个数字预留
     //第四个数字代表不同操作
     SYSTEM_EXCEPTION : 1001,                       //系统异常
     SYSTEM_MAINTAIN : 1002,                        //维护中
     SYSTEM_UNKNOWN : 1003,                         //未知错误
     SQL_REQUEST_SUCCESS : 2101,                    //请求成功
     SQL_REQUEST_NULLPARAMS : 2102,                 //无请求参数
     SQL_LOGIN_NOPOWER : 2201,                      //无访问权限
     SQL_LOGIN_ERRORLOGIN : 2202,                   //账号/密码错误
     SQL_LOGIN_SUCCESS : 2203,                      //登录成功
     SQL_LOGIN_ALREADY : 2204,                      //登录有效期内
     SQL_LOGIN_OVERTIME : 2205,                     //token过期
     SQL_LOGIN_FAIL : 2206,                         //登录失败
     SQL_INSERT_SUCCESS:2301,                       //数据库添加成功
     SQL_INSERT_NORESULT:2302,                      //查无此结果
     SQL_INSERT_FAIL:2303,                          //数据库添加失败
     SQL_UPDATE_SUCCESS:2401,                       //数据库更新成功
     SQL_UPDATE_NORESULT:2402,                      //查无此结果
     SQL_UPDATE_FAIL:2403,                          //数据库更新失败
     SQL_DELETE_SUCCESS:2501,                       //数据库删除成功
     SQL_DELETE_NORESULT:2502,                      //查无此结果
     SQL_DELETE_FAIL:2503,                          //数据库删除失败
     SQL_SELECT_SUCCESS:2601,                       //数据库查询成功
     SQL_SELECT_NORESULT:2602,                      //查无此结果
     SQL_SELECT_FAIL:2603,                          //数据库查询失败
})
