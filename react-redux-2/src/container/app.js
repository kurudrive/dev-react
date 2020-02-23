// connect 関数を使用して state action componet の関連付けをして処理する
import { connect } from 'react-redux'
import App from '../component/App'
import { increment } from '../actions/app'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => { dispatch(increment()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)