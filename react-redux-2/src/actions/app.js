// 他でも使えるように定義しておく
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクションを返す関数 : アクションクリエイター
// componets で使用するので export する
export const increment = () => ({
	type: INCREMENT
})

// export const decrement = () => ({
// 	type: DECREMENT
// })