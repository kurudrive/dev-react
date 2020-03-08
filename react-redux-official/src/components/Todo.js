/**
 * 1. index.js
 * 2. /components/App.js
 * 3. /containers/VisibleTodoList.js
 * 4. /components/TodoList.js
 * 5. /components/Todo.js (this file)
 */

import React from 'react'

// PropTypes をインポート（ 引数の型チェックを行う ）
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text }) => (
  <li

    onClick={onClick}
    style={{
      // completed が true だったら 'line-through' （打ち消し線）
      // completed が false だったら 'none'
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {
      // ToDo のテキスト
      text
    }
  </li>
)

// Todoに対して方チェックを行う
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo