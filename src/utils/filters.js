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