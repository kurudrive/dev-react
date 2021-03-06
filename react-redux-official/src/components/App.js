import React from 'react'

// ToDoを追加するフロントDOM
import AddTodo from '../containers/AddTodo'
// 
import VisibleTodoList from '../containers/VisibleTodoList'

import Footer from './Footer'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App