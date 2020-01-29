

const api = {};
//随机句子
api.animeMotto = function () {
    return new Promise((resolve, reject) => {
        let url = 'https://hitokoto.jijidown.com/v1/api/hitokoto?maxlength=80';
        this.$axios.get(url).then(result => {
            if(result.status==200){
                resolve(result.data)
                
            }
        })
    })
}
module.exports = api;