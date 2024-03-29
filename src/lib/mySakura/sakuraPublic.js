import Sakura from './sakura.js'

const zq = new Sakura();
//字符串分割并合并回字符串
export function superSplice(bufs, str, count){
	return zq.superSplice(bufs, str, count);	
}
//安全代理
export function proxy(obj) {
	let proxy = new zq.newProxy()
	return new proxy(obj);
}
//Promise任务队列
export function waitList(list) {
	zq.waitList(list)
}
//next任务队列
export function nextList(list) {
	return zq.nextList(list)
}
// [Symbol.asyncIterator ]任务队列/
export function asyncList() {

}

//倒计时
export function countDown(count, step) {
	zq.countDown(count, step);
}

//随机昵称

export function randomNickname({adj=[], title=[], firstName=[], lastName=[], numberLength=0}) {
	console.log(adj, title, firstName, lastName, numberLength);
	let fullName = zq.randomNickname(adj, title, firstName, lastName, numberLength);
	console.log('fullName', fullName)
	return fullName;
}
//获取浏览器版本
export function getBrowse(){
	return zq.getBrowse();
}
//获取操作系统版本
export function getOS(){
	return zq.getOS();
}
