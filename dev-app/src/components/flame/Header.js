// Reactの読み込み
import React from 'react';

class Header extends React.Component {

	// JSXを戻り値とするrenderメソッド
  render() {
		// ここは普通のjsなのでコメント書けます

    return (
			<nav className="navbar navbar-light bg-light">
			  <a className="navbar-brand" href="/">
			    <img src="/images/logo.svg" width="35" height="35" className="d-inline-block align-top" alt="" />
			    React & Bootstrap
			  </a>
			</nav>
    );
  }
}

// クラスをExport
export default Header;
