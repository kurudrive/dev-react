import React from 'react';
import ReactDOM from 'react-dom';
// storeを作成するための関数 createStore をインポート
// サーバー通信するミドルウェア redux-thunk を使うので、ミドルウェアが使えるようにする
import { createStore, applyMiddleware } from 'redux';
// 作成したstoreを全コンポーネントにわたす Provider をインポート
import { Provider} from 'react-redux';
// サーバー通信するためのミドルウェアパッケージ
import thunk from 'redux-thunk'

// 作成した reducer をインポート
import reducer from './reducers'
// EventsIndex コンポーネントをインポート
import EventsIndex from './components/events_index';
import './index.css';

import * as serviceWorker from './serviceWorker';

// storeを作成
// storeはアプリケーション内で一つだけ
// アプリケーション内のすべてのstateはstoreに集約される
// ミドルウェアが使えるようにする applyMiddleware の引数に ミドルウェアである thunk を渡す
const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
	// Provider : 全階層のcomponentでstoreが利用可能になるようにする
	<Provider store={store}>
		<EventsIndex />
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
