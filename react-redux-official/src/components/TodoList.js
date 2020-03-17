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


const TodoList = ({ todos, hoge }) => (
  <ul>
    { 
    // todosをtodoに入れながらループ
    }
    {todos.map(todo => (
      // クリックされたら toggleTodo() アクションに id を投げて実行
	  // key={todo.id} はTodoコンポーネントで使用していないがReactでmapする時はないとエラーになる
	  
	  // {...todo} 何やってんの？
	  // <Todo id={todo.id} text={todo.text} /> みたいにいい感じにしてくれる。
      // 配列に要素を追加できるようにするために...をつけてスプレッド演算子にしてる
    //   <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
      <Todo key={todo.id} {...todo} onClick={() => hoge(todo.id)} />
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
  hoge: PropTypes.func.isRequired
}

export default TodoList