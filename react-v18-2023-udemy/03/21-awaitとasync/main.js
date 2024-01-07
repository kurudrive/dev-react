// 非同期処理（await/async）
// Premise よりコンパクトに書ける

let a = 0;

init();
async function init() {
	try {
		const result = await new Promise((resolve, reject) => {
			// 2000ミリ秒後に実行する
			setTimeout(() => {
				a = 1;
				// resolve(a);
				reject(a);
			}, 2000);
		})
		console.log(result);
	} catch (e) {
		console.log('catchが実行',e);
	}
}

