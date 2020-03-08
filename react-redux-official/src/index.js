import React from 'react'
import { render } from 'react-dom'

// 作成したstoreを全コンポーネントにわたす Provider をインポート
import { Provider } from 'react-redux'

// storeを作成するための関数 createStore をインポート
import { createStore } from 'redux'

// 作成した rootReducer をインポート
// とりあえず./reducers/index.jsをを読み込んで、index.js が todo.js や vibilityFilter.js を読み込んでいる
import rootReducer from './reducers'

// App コンポーネントをインポート
import App from './components/App'

// storeを作成
// アプリケーション内で唯一
// アプリケーション内のすべてのstateはstoreに集約される
const store = createStore(rootReducer)

render(
  // Provider : 全階層のcomponentでstoreが利用可能になるようにする
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)