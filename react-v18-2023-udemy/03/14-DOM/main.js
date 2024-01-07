// h1 要素を取得する
const h1element = document.querySelector('h1');
// h1 要素を出力する
console.dir(h1element);
console.log(h1element.textContent );
// テキストを書き換える
h1element.textContent = 'Changed!';
console.log(h1element.textContent );

const bottunElement = document.querySelector('button');

/// 無名関数の場合 : 引数は イベント と 実行関数
/// e は bottunElement の情報が入っている
bottunElement.addEventListener('click', (e) => {
	console.log(e.target);
	console.log(e.target.textContent);
	console.log('Clicked!');
});

/// ↓ ↓ こう書いても同じ
const hellowFn = (e) => {
	console.log(e.target);
	console.log(e.target.textContent);
	console.log('Clicked!');
}
bottunElement.addEventListener('click', hellowFn);