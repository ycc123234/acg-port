var _this;
class Sakura {
	constructor() {
		_this = this;

	}
	//构造器
	newProxy() {
		let handle = new Object();
		handle = {
			construct(target, args) {
				return new target(...args)
			}
		}
		return new Proxy(Zqili.objectProxy, handle)
	}
	//Symbol唯一值生成器
	setSymbol(word) {
		return Symbol(word)
	}
	//禁止新增属性代理,禁止访问未定义的属性
	static objectProxy(obj) {
		let handle = new Object();
		handle = {

			set(obj, prop, value) {
				if (prop in obj) {
					Reflect.set(...arguments)
				} else {
					console.error(prop, 'is not a valid property');
				}
				return true;
			},
			get(obj, prop) {
				if (prop in obj) {
					return Reflect.get(...arguments);
				} else {
					console.error(prop, 'is not a valid property');
				}
			},
			apply(target, thisArg, argumentsList) {
				console.log(target(argumentsList));
			}
		}

		return new Proxy(obj, handle)

	}
	async waitList(list) {
		for (let fn of list)
			await fn();
		console.warn('for over')
	}
	countDown(count, step) {
		return new Promise((resolve, reject) => {
			let num = count;
			let algorithm;
			if (count > 0) {
				algorithm = function () {
					return count -= step
				}
			} else {
				algorithm = function () {
					return count += step
				}
			}
			let cd = setInterval(() => {
				console.log(algorithm());
				if (num * count <= 0) {
					console.warn('count down over');
					clearInterval(cd);
					resolve(1)
				}
			}, step * 1000)
		})
	}
	nextList = function* (list) {
		if (list.length == 0) {
			while (true) {
				yield list();
			}
		} else {
			for (let fn of list) {
				yield fn();
			}
		}
	}
	// 生成随机数
	getRandomInt(max) {

		return ~~(Math.random() * ~~max);
	}
	randomNickname(adj, title, firstName, lastName, numberLength) {
		adj = adj[_this.getRandomInt(adj.length)]
		adj = adj ? adj : ''
		title = title[_this.getRandomInt(title.length)]
		title = title ? title : ''
		firstName = firstName[_this.getRandomInt(firstName.length)]
		firstName = firstName ? firstName : ''
		lastName = lastName[_this.getRandomInt(lastName.length)]
		lastName = lastName ? lastName : ''
		numberLength = numberLength > 0 ? _this.getRandomInt(Math.pow(10, numberLength)) : ''
		const fullName = adj + title + firstName + lastName + numberLength;

		return fullName;

	}
	//统计数组中的相同值个数
	countArr(arr) {
		var arrObj = arr.reduce(
			function (obj, name) {
				obj[name] = obj[name] ? ++obj[name] : 1;
				return obj;
			}, {}
		);
		return arrObj;
	}
	//精确到指定位数的小数 eg:round(1.1415926,2)==1.14
	floatFloor = (n, decimals) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
	//将对象彻底冻结
	constantize(obj) {
		Object.freeze(obj);
		Object.keys(obj).forEach((key, i) => {
			if (typeof obj[key] === 'object') {
				constantize(obj[key]);
			}
		});
	};

	//获取顶层函数  或使用globalThis
	// 方法一
	getGlobal2() {
		(typeof window !== 'undefined' ?
			window :
			(typeof process === 'object' &&
				typeof require === 'function' &&
				typeof global === 'object') ?
				global :
				this);
	}

	// 方法二
	getGlobal() {
		if (typeof self !== 'undefined') {
			return self;
		}
		if (typeof window !== 'undefined') {
			return window;
		}
		if (typeof global !== 'undefined') {
			return global;
		}
		throw new Error('unable to locate global object');
	};
	/**
	 * @description 字符串分割并合并回字符串
	 * @param {String} bufs 
	 * @param {String} str 
	 * @param {Number} count 
	 */
	superSplice(bufs, str, count) {
		bufs = bufs.split(str)
		if (bufs.length < count * -1) {
			return '';
		}
		if (count > 0) bufs.splice(0, Math.sqrt(count*count));
		else bufs.splice(bufs.length - 1, Math.sqrt(count*count));
		bufs = bufs.join('');
		return bufs;
	}
}

export default Sakura
