// アクションクリエイターからVisibilityFiltersインポート
import { VisibilityFilters } from '../actions'

// フィルタリング処理関数を通して export で返す
// state の初期値は全件 と 送られてくる action を引数で投げる
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {

    // アクションタイプが SET_VISIBILITY_FILTER の時
    case 'SET_VISIBILITY_FILTER':
      // フィルタリングされた種類を返す
      return action.filter

    default:
      return state
  }
}

export default visibilityFilter