/**
 * フッター部分のコンポーネント
 * 
 * 1. index.js
 * 2. /components/App.js
 * 3. /components/Footer.js (this file)
 */

import React from 'react'
import FilterLink from '../containers/FilterLink'

// VisibilityFilters アクション読み込み
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
)

export default Footer