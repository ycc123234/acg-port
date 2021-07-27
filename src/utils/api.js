//该文件用于获取各种api数据接口
const api = {};


//随机句子
api.animeMotto = function () {
    return new Promise((resolve, reject) => {
        let url = 'https://hitokoto.jijidown.com/v1/api/hitokoto?maxlength=80';
        this.$axios.get(url).then(result => {
            if (result.status == 200) {
                resolve(result.data)
            }
        })
    })
}
// 明日方舟壁纸
api.mrfzbz = function () {
    return 'https://api.2heng.xin/cover/';
}

// newsList数据获取
api.newslist = function (params) {
    return new Promise((resolve,reject)=>{
        this.$axios.get('/cms/notice/list', params).then((result) => {
            if (result.status == 200) {
                  resolve(result.data)
            }
        });
    })

}



module.exports = api;
