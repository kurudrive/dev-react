// 初期stateとしの空の配列とactionを引数で投げる
const todos = (state = [], action) => {

	// 受け取った action の type で条件分岐する
	switch (action.type) {
		
	  // ADD_TODOアクションの時の処理
	  case 'ADD_TODO':
		return [
		  // 配列 state に新たに送られてきた項目の情報（ id / テキスト / 完了 ）を追加
		  ...state,
		  {
			id: action.id,
			text: action.text,
			completed: false
		  }
		]

	  // TOGGLE_TODOアクションの時の処理
	  case 'TOGGLE_TODO':
		// 配列 state をループ処理
		return state.map(todo =>
		  // ループ中の id と アクションで送られてきた id が同じの場合
		  	// todo.completed に !todo.completed を使う事によって逆の値（true/false）を入れてるって事？
		  	// 違う場合はそのまま
		  todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
		)
	  default:
		return state
	}
  }
  
  export default todos