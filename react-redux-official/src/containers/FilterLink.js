/**
 * フッター部分のボタンコンポーネント
 * 
 * 1. index.js
 * 2. /components/App.js
 * 3. /components/Footer.js
 * 4. /containers/FilterLink.js (this file)
 */

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)