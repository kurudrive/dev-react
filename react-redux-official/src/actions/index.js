/**
 * actions : アプリケーションで何が起きたかのデータ
 */

// ★アクションが発生したらreducerに情報を投げるという解釈でOK？

// 他でも使えるように actions ディレクトリ内でアクションクリエイターを定義してexportする

// 最初はTodoは登録されていないので0
let nextTodoId = 0

// ↓ アクションを返す関数 : アクションクリエイター

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}