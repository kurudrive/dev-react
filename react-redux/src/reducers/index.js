// combineReducers : 全reducerを結合するための関数
import { combineReducers } from 'redux'
// カウント状態を読み込む
import count from './count'

// 状態を結合する ※ 今回は一つだけだが普通は多いので、多くなった時に便利
export default combineReducers({ count })
// export default combineReducers({ count, foo, buz })