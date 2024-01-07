const array = [10, 20, 30, 40, 50];
const newArray = [];

console.log('配列の数 : ' + array.length);

for (let i = 0; i < array.length; i++) {
	const val = array[i] * 2;
	if ( val > 50 ) {
		newArray.push(val);
	}
}

// console.log(newArray);

// map で書くと... ///////////////////////////////////////////////
// for を使わなくてもループ処理ができる
const newArray2 = array.map( val => { 
	return val * 2
});

// 以下のように i と array も使える
const newArray0 = array.map((val, i, array) => { 
	console.log(i);
	console.log(array);
	return val * 2
});

// ↓↓ こう書いても同じ : val しか使ってないから無名関数を省略できる

const newArray3 = array.map( val => val * 2);

// filter で書くと... ///////////////////////////////////////////////
// 50 より大きいものだけを抽出する
const newArray4 = newArray2.filter( val => val > 50);
// console.log(newArray4);

// map と filter を組み合わせると... ///////////////////////////////////////////////
const newArray5 = array.map( val => val * 2).filter( val => val > 50);
console.log(newArray5);

