// Reactの読み込み
import React from 'react';
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
			<nav className="navbar navbar-light bg-light">
			  <a className="navbar-brand" href="#">
			    <img src="/images/logo.svg" width="35" height="35" className="d-inline-block align-top" alt="" />
			    React & Bootstrap
			  </a>
			</nav>
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
