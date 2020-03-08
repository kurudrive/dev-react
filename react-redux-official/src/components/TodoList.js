/**
 * ToDo リスト部分のコンポーネント
 * 
 * 1. index.js
 * 2. /components/App.js
 * 3. /containers/VisibleTodoList.js
 * 4. /components/TodoList.js (this file)
 */

import React from 'react'

// PropTypes をインポート（ 引数の型チェックを行う ）
import PropTypes from 'prop-types'

// １件分のTodo読み込み
import Todo from './Todo'


const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    { 
    // todosをtodoに入れながらループ
    }
    {todos.map(todo => (
      // クリックされたら toggleTodo() アクションに id を投げて実行
      // key={todo.id} はTodoコンポーネントで使用していないがReactでmapする時はないとエラーになる
      // ★ {...todo} 何やってんの？
      // 配列に要素を追加できるようにするために...をつけてスプレッド演算子にしてるだけ？
      // 既にスプレッド演算子じゃないの？
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
)

// 型チェック
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList