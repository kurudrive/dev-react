// combineReducers : 全reducerを結合するための関数
import { combineReducers } from 'redux'
// カウント状態を読み込む
import events from './events'

// 状態を結合する ※ 今回は一つだけだが普通は多いので、多くなった時に便利
export default combineReducers({ events })
// export default combineReducers({ count, foo, buz })