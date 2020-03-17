/**
 * Todo追加部分コンポーネント
 * 
 * 1. index.js
 * 2. /components/App.js
 * 3. /containers/AddTodo.js (this file)
 */

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
// ★ import { useDispatch } from 'react-redux';

const AddTodo = ({ dispatch }) => {
	// ★ const dispatch = useDispatch();
  	let input

  return (
    <div>
      <form
        onSubmit={e => {

          // e.preventDefault() がないと再読み込みが発生してしまってリセットされる
          e.preventDefault()

          // 値が空の時に何もしないで返す
          if (!input.value.trim()) {
            return
          }
		  // addTodo で返ってきたオブジェクトを dispach でreducerに送る
          // dispatch関数 : あるアクションが発生した時にReducerにタイプに応じた状態遷移を実行させる
          dispatch(addTodo(input.value))

          // input.value を空に戻す
          input.value = ''

        }}
      >
        <input 
		// node : 中のDOM → input に入れている
        ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
// connect()でReactコンポーネントとstoreをつなぐ
// connect() さんがつなげてくれるから dispatch() が使えてる
export default connect()(AddTodo)
// ★ export default AddTodo;