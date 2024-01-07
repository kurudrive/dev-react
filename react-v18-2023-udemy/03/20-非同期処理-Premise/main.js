// 非同期処理（Premise）

let a = 0;

new Promise((resolve, reject) => {
	// 2000ミリ秒後に実行する
	setTimeout(() => {
		a = 1;
		// a = 1 の処理が終わったら resolve が呼ばれて then のコールバック関数が実行される
		resolve(a);
	}, 2000);
	// a の値 1 が b に代入される
}).then((b) => {
	console.log(b);
	return b;
	// b の値 1 が c に代入される
}).then((c) => {
	console.log(c);
})

new Promise((resolve, reject) => {
	// 2000ミリ秒後に実行する
	setTimeout(() => {
		a = 1;
		// resolve(a);
		// 不具合が発生した時は reject を呼べば catch のコールバック関数が実行される
		reject(a);
	}, 2000);
	// a の値 1 が b に代入される
}).then((b) => {
	// 通過しない
	console.log(b);
}).catch((c) => {
	console.log('_|＼○_ﾋｬｯ ε=＼＿○ﾉ ﾎｰｳ!!');
	console.log('catchが実行',c);
})