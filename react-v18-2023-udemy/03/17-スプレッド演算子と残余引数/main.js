// 最大を抽出する
const result = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(result);

// スプレッド演算子（展開してくれる）
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result2 = Math.max(...nums);
console.log(result2);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1];
console.log(arr1);
console.log(newArr);

// スプレッド演算子で展開すると別のメモリ領域にコピーされているのでfalseになる
console.log(arr1 === newArr);

let newArr2 = [...arr1, 99, ...arr2];
console.log(newArr2);

// スプレッド演算子でオブジェクトを展開する
const obj = {
	name: "名前",
	age: 20
};
const newObj = {...obj};
// コピーしたオブジェクトのnameを変更しているので元のオブジェクトには影響しない
newObj.name = "名前２";
console.log(newObj, obj);

// スプレッド演算子でオブジェクトを展開する
// 配列を展開する前提の関数
const restA = (...argA) => console.log(argA);
restA(1,3);

const restB = (n, ...argB) => console.log(argB);
// 1はnに代入される ので argB には 3,4 が代入される
restB(1,3,4);
