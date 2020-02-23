import React from 'react'
import { render } from 'react-dom'
// storeを作成するための関数 createStore をインポート
import { createStore } from 'redux'
// 作成したstoreを全コンポーネントにわたす Provider をインポート
import { Provider } from 'react-redux'
// 作成した reducer をインポート
import reducer from './reducers/reducer'
// App コンポーネントをインポート
import App from './container/app'

// storeを作成
// アプリケーション内で唯一
// アプリケーション内のすべてのstateはstoreに集約される
const store = createStore(reducer)

render(
  // Provider : 全階層のcomponentでstoreが利用可能になるようにする
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)