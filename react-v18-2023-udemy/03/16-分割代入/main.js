// 分割代入
const [ a, , c ] = [ "配列１", "配列２", "配列３" ];
console.log(a);
console.log(c);

const { age, name } = { name: "名前", age: 20 };
console.log(name);
console.log(age);

const fnArr = ([ country, state, city ]) => {
	console.log('--- 配列 ---');
	console.log(`country:${country}`);
	console.log(`state:${state}`);
	console.log(`city:${city}`);
}
fnArr([ "日本", "東京", "渋谷" ]);

objAddress = {
	country: "日本",
	state: "東京",
	city: "渋谷"
}
const fnObj = ({ country, state, city }) => {
	console.log('--- オブジェクト ---');
	console.log(`country:${country}`);
	console.log(`state:${state}`);
	console.log(`city:${city}`);
}
fnObj(objAddress);