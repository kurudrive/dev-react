/**
 * 表示させるToDoリスト
 * 1. index.js
 * 2. /components/App.js
 * 3. /containers/VisibleTodoList.js (this file)
 */

// import で {} のある無しの違いは、読み込み先がdefaultで一個だけ返すファイルか複数返してくるファイルかの違いでOK？

import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

// アクション toggleTodo と VisibilityFilters を読み込む
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {

    // SHOW_ALLの時
    case VisibilityFilters.SHOW_ALL:
      return todos

    // 完了のみの時
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)

    // アクティブなTDだけの時
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    
    // 指定がない時
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

/*
mapStateToProps
stateの情報からこのcomponentに必要なものを取り出してcomponent内のpropsとしてマッピングする機能を持つ関数
引数には状態のトップレベルを示すstateを書いてどういったオブジェクトをpropsとして対応させるのかを関数の戻り値として定義
*/
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

/*
mapDispatchToProps
dispatch関数 : あるアクションが発生した時にReducerにタイプに応じた状態遷移を実行させる
*/
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)