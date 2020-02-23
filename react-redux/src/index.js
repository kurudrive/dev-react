import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するための関数 createStore をインポート
import { createStore } from 'redux';
// 作成したstoreを全コンポーネントにわたす Provider をインポート
import { Provider } from 'react-redux';
// 作成した reducer をインポート
import reducer from './reducers';
// App コンポーネントをインポート
import App from './components/App';
import './index.css';

import * as serviceWorker from './serviceWorker';

// storeを作成
// アプリケーション内で唯一
// アプリケーション内のすべてのstateはstoreに集約される
const store = createStore(reducer)

ReactDOM.render(
	// Provider : 全階層のcomponentでstoreが利用可能になるようにする
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
