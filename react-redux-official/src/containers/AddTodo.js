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

const AddTodo = ({ dispatch }) => {
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

          // dispatch関数 : あるアクションが発生した時にReducerにタイプに応じた状態遷移を実行させる
          dispatch(addTodo(input.value))

          // input.value を空に戻す
          input.value = ''

        }}
      >
        <input 
        // ↓ ★これ何やってんの？
        ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}
// connect()でReactコンポーネントとstoreをつなぐ
export default connect()(AddTodo)