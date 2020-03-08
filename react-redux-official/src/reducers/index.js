// reducers : アクションが発生した時にアクションに組み込まれたtypeに対して状態（state）をどう変化させるのか
// reducer は actionとstateを受け取り、新たなstateを作成して返す。

// combineReducers : 全reducerを結合するための関数
import { combineReducers } from 'redux'

// todos状態を読み込んで状態を処理する
import todos from './todos'

// visibilityFilter状態を読み込んで状態を処理する
import visibilityFilter from './visibilityFilter'

// 全部の状態を結合する 
export default combineReducers({
  todos,
  visibilityFilter
})