// Reactの読み込み
import React from 'react';
// import Header from './components/flame/Header';
import NameChange from './components/NameChange';
import CountUp from './components/CountUp';
import StaffMap from './components/StaffMap';
import StaffStatic from './components/StaffStatic';
import ToDo from './components/ToDo';
import logo from './logo.svg';

class App extends React.Component {

	// constructorは読み込まれたらとりあえず実行される部分
	constructor(props) {
    super(props);
    // stateを定義 オブジェクト形式で入れられる
    this.state = {currentPage:'toDo'}
  }

	// State の pageを変更するためのメソッド pageChange を定義
  pageChange(page){
    this.setState({currentPage: page});
  }

	// JSXを戻り値とするrenderメソッド
  render() {

		// 変数 appPageをとりあえず定義
		let appPage;
		// 以下の条件分岐で appPage に入る内容を切り替える
		if ( this.state.currentPage === 'logo' ){
			appPage = (
				<img src={logo} className="App-logo" alt="logo" />
			);
		} else if ( this.state.currentPage === 'nameChange' ){
			appPage = (
				<NameChange />
			);
		} else if ( this.state.currentPage === 'countUp' ){
			appPage = (
				<CountUp />
			);
		} else if ( this.state.currentPage === 'staff' ){
			appPage = (
				<div>
				<StaffMap />
				<StaffStatic />
				</div>
			);
		} else if ( this.state.currentPage === 'toDo' ){
			appPage = (
				<ToDo />
			);
		}

    return (
			<div>
			<nav className="navbar navbar-light bg-light">
			  <a className="navbar-brand" href="/">
			    <img src="/images/logo.svg" width="35" height="35" className="d-inline-block align-top" alt="" />
			    React & Bootstrap
			  </a>
				<div className="btn-group" role="group" aria-label="Basic example">
				{/* {} で js が使えるので、その中で /* でコメントが使える */}
				{/* クリックされたら this.state.currentPage の内容が 引数になり、それにより {appPage} の内容も変更される */}
				 <button className="btn btn-primary" onClick={() => {this.pageChange('logo')}}>Logo</button>
				 <button className="btn btn-primary" onClick={() => {this.pageChange('nameChange')}}>NameChange</button>
				 <button className="btn btn-primary" onClick={() => {this.pageChange('countUp')}}>CountUp</button>
				 <button className="btn btn-primary" onClick={() => {this.pageChange('staff')}}>Staff</button>
				 <button className="btn btn-primary" onClick={() => {this.pageChange('toDo')}}>ToDo</button>
				</div>
			</nav>
				<div className="container text-center pt-5">
				{/* 画像の末尾は / がないとエラーになる */}

				{appPage}

				</div>

      </div>
    );
  }
}

// クラスをExport
export default App;
