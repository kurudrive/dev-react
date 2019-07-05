// Reactの読み込み
import React from 'react';
import Header from './components/flame/Header';
import NameChange from './NameChange';
import CountUp from './CountUp';
import StaffMap from './StaffMap';
import StaffStatic from './StaffStatic';
import logo from './logo.svg';

class App extends React.Component {

	// JSXを戻り値とするrenderメソッド
  render() {
		// ここは普通のjsなのでコメント書けます

    return (
			<div>
			<Header />
        {/* {} で js が使えるので、その中で /* でコメントが使える */}
				<div className="container">
				{/* 画像の末尾は / がないとエラーになる */}

				<img src={logo} className="App-logo" alt="logo" />

				<NameChange />

				<CountUp />

				<StaffMap />

				<StaffStatic />

				</div>


      </div>
    );
  }
}

// クラスをExport
export default App;
