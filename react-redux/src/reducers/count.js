import { INCREMENT, DECREMENT } from '../actions'

// 初期状態のstate
const initialState = { value: 0 }

// カウントreducerを定義
// 関数として定義して引数２つ state と action 渡す
// state は初期値を設定しておく
export default (state = initialState, action) => {
	// アクションタイプによって処理を分岐する
	switch (action.type){
		case INCREMENT:
			return { value: state.value + 1 }
		case DECREMENT:
			return { value: state.value - 1 }
		// アクションが未定義の時や初期起動時はstateをそのまま返す
		default:
			return state
	}
} 