//该文件用于存放各种需要用到的数据过滤器
//时间转换  秒==>分:秒  举例:输入100 输出01:40
export const audioAtTime = (time) => {
    let minutes;
    let seconds;
    minutes = parseInt(time / 60);
    seconds = parseInt(time % 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return minutes + ":" + seconds + "";
}

//日期转换  秒==>分:秒  举例:1625123459879 输出2021-07-01 15：11
export const dateFilter = (d) => {
    d = Number(d);
    const date = new Date(d);
    let days=parseInt((new Date().getTime()-date.getTime())/86400000)
    console.log(new Date().getTime(),date.getTime())
    if(days<=30){
        return days==0?'今天':days+'天前' 
    }else{
        var month = Number.parseInt(date.getMonth()) + 1
        var day = Number.parseInt(date.getDate())
        var hours = Number.parseInt(date.getHours())
        var minutes = Number.parseInt(date.getMinutes())
    
        month = month >= 10 ? month : ('0' + month);
        day = day >= 10 ? day : ('0' + day);
        hours = hours >= 10 ? hours : ('0' + hours);
        minutes = minutes >= 10 ? minutes : ('0' + minutes);
    
        return `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}`
    }
  
}