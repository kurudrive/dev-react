// 初期状態のstate
const initialState = {
	fuga: 1
  }
  
  export default function reducer(state = initialState, action) {
	// アクションタイプによって処理を分岐する
	switch(action.type) {
	  case 'INCREMENT': {
		return { fuga: state.fuga + 1 }
	  }
	  // アクションが未定義の時や初期起動時はstateをそのまま返す
	  default:
		return state
	}
  }