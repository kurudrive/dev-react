export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
	type: INCREMENT
})
// ↑ の書き方は ↓と意味は同じ
// const increment = () => {
// 	return {
// 		type: INCREMENT
// 	}
// })
// export increment;

export const decrement = () => ({
	type: DECREMENT
})